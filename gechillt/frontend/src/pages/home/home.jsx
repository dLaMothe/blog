import * as React from 'react';
import Navigation from '../../components/navigation';
import Header from '../../components/header';
import Articles from './articles';
import Footer from '../../components/footer';

export default class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <Navigation />
        <Header />
        <Articles />
        <Footer />
      </div>
    );
  }
}
