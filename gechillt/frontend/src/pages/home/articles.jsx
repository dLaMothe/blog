import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import ArticleHeadline from './articleHeadline';

const dummyArticle = [
  {
    id: 15,
    title: 'Some Summary Text Here',
    subtitle: 'Some subtitle here',
    date: '20.04.1992'
  }
];

export default class Articles extends React.Component {
  componentWillMount() {
    this.setState(dummyArticle[0]);
  }

  render() {
    return (
      <div className="articles main__item">
        <div className="articles__left">
          <ArrowBack />
        </div>
        <ArticleHeadline {...this.state} />
        <div className="articles__right">
          <ArrowForward />
        </div>
      </div>
    );
  }
}
