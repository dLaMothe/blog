import * as React from 'react';
import Header from '../../components/header';
import FeaturedArticles from './featuredArticle';
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

    const currentArticle = articles[articleIndex];
    const backArticle = () => this.updateArticleIndex(articles.length, -1);
    const forwardArticle = () => this.updateArticleIndex(articles.length, 1);

    return (
      <div className="home">
        {articles.length > 0 && (
          <div className="main">
            <Header />
            <FeaturedArticles
              article={currentArticle}
              articleIndex={articleIndex}
              backArticle={backArticle}
              forwardArticle={forwardArticle}
            />
            <Footer
              abstract={currentArticle.abstract}
              openArticles={this.displayList}
              isOpen={this.state.isDisplayed}
            />
          </div>
        )}
        {this.state.isDisplayed && (
          <div className="home__list">
            <ArticleList articles={articles} />
          </div>
        )}
      </div>
    );
  }
}
