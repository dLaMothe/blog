import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

export default class Articles extends React.Component {
  render() {
    return (
      <div className="articles">
        <div className="articles__left">
          <ArrowBack />
        </div>
        <div className="articles__summary">
          <h4>Some Summary Text Here</h4>
        </div>
        <div className="articles__right">
          <ArrowForward />
        </div>
      </div>
    );
  }
}
