import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default class Articles extends React.Component {
  render() {
    const dummyId = 15;

    return (
      <div className="articles main__item">
        <div className="articles__left">
          <ArrowBack />
        </div>
        <span className="articles__date">20.04.1992</span>
        <Link className="articles__summary" to={'/articles/' + dummyId}>
          <h4>Some Summary Text Here</h4>
        </Link>
        <h5 className="articles__subtitle">Some subtitle here</h5>
        <div className="articles__right">
          <ArrowForward />
        </div>
      </div>
    );
  }
}
