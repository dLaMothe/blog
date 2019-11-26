import * as React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownward } from '@material-ui/icons';

export class Footer extends React.Component {
  render() {
    const { openArticles, abstract, isOpen } = this.props;

    return (
      <footer className="footer main__item">
        <div className="footer__text">
          <p>{abstract}</p>
        </div>
        <div className="footer__arrow">
          <ArrowDownward
            className={
              'footer__icon' + (isOpen ? ' footer__icon--flipped' : '')
            }
            onClick={openArticles}
          />
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  openArticles: PropTypes.func.isRequired,
  abstract: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired
};

export default Footer;
