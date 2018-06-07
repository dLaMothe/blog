import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
import About from '../about/about';

export default class Router extends React.Component {
  render() {
    return (
      <div className="router-container">
        <Route exact={true} path="/" component={Home} />
        <Route exact={true} path="/about" component={About} />
      </div>
    );
  }
}
