import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';
import ArticleHeadline from './articleHeadline';

const dummyArticle = [
  {
    id: 15,
    title: 'Some Summary Text Here',
    subtitle: 'Some subtitle here',
    date: '20.04.1992',
    color: 'blue'
  },
  {
    id: 16,
    title: 'Some Other Summary Text Here',
    subtitle: 'A different subtitle here',
    date: '05.07.1991',
    color: 'red'
  },
  {
    id: 17,
    title: 'Summary text: the return',
    subtitle: 'Even more subtitles',
    date: '01.01.0001',
    color: 'yellow'
  }
];

export default class Articles extends React.Component {
  componentWillMount() {
    this.setState(dummyArticle[0]);
  }

  render() {
    var leftStyle = {
      backgroundColor: dummyArticle[1].color
    };

    var rightStyle = {
      backgroundColor: dummyArticle[2].color
    };

    return (
      <div className="articles main__item">
        <div className="articles__left--color" style={leftStyle} />
        <div className="articles__left">
          <ArrowBack />
        </div>
        <ArticleHeadline {...this.state} />
        <div className="articles__right">
          <ArrowForward />
        </div>
        <div className="articles__right--color" style={rightStyle} />
      </div>
    );
  }
}
