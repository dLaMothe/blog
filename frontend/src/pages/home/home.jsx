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
      articles: [],
      articleIndex: null
    };
    this.displayList = this.displayList.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.updateArticleIndex = this.updateArticleIndex.bind(this);
  }

  componentDidMount() {
    fetch('/blog/posts/')
      .then(response => response.json())
      .then(articles => {
        this.setState({
          articleIndex: 0,
          articles: articles
        });
      });
  }

  displayList() {
    this.setState({ isDisplayed: !this.state.isDisplayed });
  }

  getNext(arr, index) {
    if (index === arr.length - 1) {
      return arr[0];
    } else {
      return arr[index + 1];
    }
  }

  getPrev(arr, index) {
    if (index === 0) {
      return arr[arr.length - 1];
    } else {
      return arr[index - 1];
    }
  }

  updateArticleIndex(articlesCount, direction) {
    var index = this.state.articleIndex + direction;
    if (index === -1) index = articlesCount - 1;
    else if (index === articlesCount) index = 0;
    this.setState({
      articleIndex: index
    });
  }

  render() {
    const { articles, articleIndex } = this.state;

    const backArticle = () => this.updateArticleIndex(articles.length, -1);
    const forwardArticle = () => this.updateArticleIndex(articles.length, 1);

    return (
      <div className="home">
        <div className="main">
          <Header />
          {articles.length > 0 && (
            <Articles
              article={articles[articleIndex]}
              articleIndex={articleIndex}
              backArticle={backArticle}
              forwardArticle={forwardArticle}
            />
          )}
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
