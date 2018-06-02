import * as React from 'react';
import Header from '../../components/header';
import ArtliceList from './articleList';
import Footer from '../../components/footer';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Header />
        <ArtliceList />
        <Footer />
      </div>
    );
  }
}
