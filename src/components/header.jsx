import * as React from 'react';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header main__item">
        <div className="about-me">
          <Link className="about-me__link" to="/about">
            <span className="about-me__text">about me</span>
          </Link>
        </div>
        <div className="title">
          <div className="title__header">
            <h3>reasons unknown</h3>
          </div>
          <p className="title__text">
            Hi my names David, I am a Software Engineer by trade. I want to use
            this blog as an excuse to write about things I enjoy
          </p>
        </div>
        <div className="spacer" />
      </header>
    );
  }
}
