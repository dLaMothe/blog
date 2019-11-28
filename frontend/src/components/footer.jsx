import * as React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownward } from '@material-ui/icons';

export class Footer extends React.Component {
  render() {
    const { openArticles, isOpen } = this.props;

    return (
      <footer className="footer main__item">
        <div className="footer__text">
          <p>This is where the summary of my blog will go</p>
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
  isOpen: PropTypes.bool.isRequired
};

export default Footer;
