import * as React from "react";
import ArticleList from "./articleList";
import FeaturedArticles from "./featuredArticle";
import Footer from "../../components/footer";
import Header from "../../components/header";
import Categories from "./categories";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latestArticles: [],
      articles: [],
      articleIndex: null,
      categoryArticles: [],
      selectedCategoryId: null
    };
    this.setCategory = this.setCategory.bind(this);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.updateArticleIndex = this.updateArticleIndex.bind(this);
  }

  componentDidMount() {
    fetch("/api/posts/")
      .then(response => response.json())
      .then(articles => {
        this.setState({
          articleIndex: 0,
          articles: articles
        });
      });
  }

  setCategory(categoryId) {
    if (categoryId == null) {
      this.setState({
        selectedCategoryId: null,
        categoryArticles: []
      });
      return;
    }

    fetch(`/api/categories/${categoryId}/`)
      .then(response => response.json())
      .then(articles => {
        this.setState({
          categoryArticles: articles,
          selectedCategoryId: categoryId
        });
      });
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
    const {
      articles,
      categoryArticles,
      articleIndex,
      selectedCategoryId
    } = this.state;

    const selectedArticles =
      categoryArticles.length > 0 ? categoryArticles : articles;
    const currentArticle = articles[articleIndex];
    const backArticle = () => this.updateArticleIndex(articles.length, 1);
    const forwardArticle = () => this.updateArticleIndex(articles.length, -1);

    return (
      <div className="home">
        {articles.length > 0 && (
          <>
            <div className="main">
              <Header />
              <FeaturedArticles
                article={currentArticle}
                articleIndex={articleIndex}
                backArticle={backArticle}
                forwardArticle={forwardArticle}
              />
              <Footer />
            </div>
            <div className="home__list">
              <Categories
                setCategory={this.setCategory}
                selectedCategoryId={selectedCategoryId}
              />
              <ArticleList articles={selectedArticles} />
            </div>
          </>
        )}
      </div>
    );
  }
}
