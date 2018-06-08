import * as React from 'react';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Articles from './articles';
import ArticleList from './articleList';
import Footer from '../../components/footer';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.displayList = this.displayList.bind(this);
  }

  displayList() {}
  render() {
    return (
      <div className="home">
        <Navigation />
        <Header />
        <Articles />
        <Footer />
        <ArticleList />
      </div>
    );
  }
}
