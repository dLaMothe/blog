import * as React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownward } from '@material-ui/icons';

export class Footer extends React.Component {
  render() {
    const { openArticles, abstract } = this.props;

    return (
      <footer className="footer main__item">
        <div className="footer__text">
          <p>{abstract}</p>
        </div>
        <div className="footer__arrow">
          <ArrowDownward nativecolor="white" onClick={openArticles} />
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  openArticles: PropTypes.func.isRequired,
  abstract: PropTypes.string.isRequired
};

export default Footer;
