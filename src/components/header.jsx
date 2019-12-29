import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header main__item">
        <div className="about-me">
          <Link className="about-me__link" to="/about">
            About Mich
          </Link>
        </div>
        <div className="title">
          <div className="title__text">
            <h3>reasons unknown</h3>
          </div>
        </div>
        <div className="spacer"></div>
      </header>
    );
  }
}
