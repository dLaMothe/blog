import * as React from 'react';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Articles from './articles';
import ArticleList from './articleList';
import Footer from '../../components/footer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisplayed: false
    };
    this.displayList = this.displayList.bind(this);
  }

  displayList() {
    this.setState({ isDisplayed: !this.state.isDisplayed });
  }
  render() {
    return (
      <div className="home">
        <div className="main">
          <Navigation />
          <Header />
          <Articles />
          <Footer openArticles={this.displayList} />
        </div>
        {this.state.isDisplayed && (
          <div className="home__list">
            <ArticleList />
          </div>
        )}
      </div>
    );
  }
}
