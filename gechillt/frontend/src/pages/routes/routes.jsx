import * as React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';

export default class Router extends React.Component {
  render() {
    return (
      <div className="router-container">
        <Route exact={true} path="/" component={Home} />
      </div>
    );
  }
}
