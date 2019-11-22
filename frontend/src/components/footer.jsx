import * as React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownward } from '@material-ui/icons';

export class Footer extends React.Component {
  render() {
    const { openArticles } = this.props;

    return (
      <footer className="footer main__item">
        <div className="footer__text">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="footer__arrow">
          <ArrowDownward nativecolor="white" onClick={openArticles} />
        </div>
      </footer>
    );
  }
}

Footer.propTypes = {
  openArticles: PropTypes.func.isRequired
};

export default Footer;
