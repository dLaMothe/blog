import * as React from 'react';
import PropTypes from 'prop-types';
import { ArrowDownward } from '@material-ui/icons';

export class Footer extends React.Component {
  render() {
    const { openArticles } = this.props;

    return (
      <div className="footer">
        <div className="footer__text">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="footer__arrow">
          <ArrowDownward nativeColor="white" onClick={openArticles} />
        </div>
      </div>
    );
  }
}

Footer.protoTypes = {
  openArticles: PropTypes.func.isRequired
};

export default Footer;
