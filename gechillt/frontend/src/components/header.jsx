import * as React from 'react';
import { Link } from 'react-router-dom';
import { Search } from '@material-ui/icons';

export default class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="about-me">
          <Link className="about-me__link" to="/about">
            About Me
          </Link>
        </div>
        <div className="title">
          <div className="title__text">Title</div>
        </div>
        <div className="search">
          <div className="search__icon">
            <Search />
          </div>
        </div>
      </div>
    );
  }
}
