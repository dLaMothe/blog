import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

export default class Articles extends React.Component {
  render() {
    return (
      <div className="articles">
        <div className="articles__left">
          <ArrowBack />
        </div>
        <span className="articles__date">20.04.1992</span>
        <h4 className="articles__summary">Some Summary Text Here</h4>
        <h5 className="articles__subtitle">Some subtitle here</h5>
        <div className="articles__right">
          <ArrowForward />
        </div>
      </div>
    );
  }
}
