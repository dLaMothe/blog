import * as React from 'react';
import { ArrowDownward } from '@material-ui/icons';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer__text">
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor.
          </p>
        </div>
        <div className="footer__arrow">
          <ArrowDownward nativeColor="white" />
        </div>
      </div>
    );
  }
}
