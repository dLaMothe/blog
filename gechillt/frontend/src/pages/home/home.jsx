import * as React from 'react';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import ArtliceList from './articles';
import Footer from '../../components/footer';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <Header />
        <ArtliceList />
        <Footer />
      </div>
    );
  }
}
