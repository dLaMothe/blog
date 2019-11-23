import * as React from 'react';
import Header from '../../components/header';
import Articles from './articles';
import ArticleList from './articleList';
import Footer from '../../components/footer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false,
      latestArticles: [],
      articles: []
    };
    this.displayList = this.displayList.bind(this);
  }

  componentDidMount() {
    fetch('/blog/posts/')
      .then(response => response.json())
      .then(articles => {
        this.setState({
          latestArticles: articles.slice(0, 3),
          articles: articles.slice(3)
        });
      });
  }

  displayList() {
    this.setState({ isDisplayed: !this.state.isDisplayed });
  }
  render() {
    const { articles, latestArticles } = this.state;
    return (
      <div className="home">
        <div className="main">
          <Header />
          <Articles articles={latestArticles} />
          <Footer openArticles={this.displayList} />
        </div>
        {this.state.isDisplayed && (
          <div className="home__list">
            <ArticleList articles={articles} />
          </div>
        )}
      </div>
    );
  }
}
