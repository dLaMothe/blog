import * as React from 'react';
import PropTypes from 'prop-types';

export class Footer extends React.Component {
  render() {
    const { openArticles, isDisplayed } = this.props;

    return (
      <footer className="footer main__item">
        <div className="footer__text">
          <p>
            Hi my names David, I am a Software Engineer by trade. I want to use
            this blog as an excuse to write about things I enjoy.
          </p>
        </div>

        <button className="expand-list__button" onClick={openArticles}>
          <span className="expand-list__text">
            {isDisplayed ? 'less' : 'more'}
          </span>
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  openArticles: PropTypes.func.isRequired
};

export default Footer;
