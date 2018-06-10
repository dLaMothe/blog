import * as React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header main__item">
        <div className="about-me">
          <Link className="about-me__link" to="/about">
            About Me
          </Link>
        </div>
        <div className="title">
          <div className="title__text">
            <h3>gechecked</h3>
          </div>
        </div>
        <div className="search">
          <div className="search__icon">
            <Search />
          </div>
        </div>
      </header>
    );
  }
}
