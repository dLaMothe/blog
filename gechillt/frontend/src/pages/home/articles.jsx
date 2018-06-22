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
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  componentWillMount() {
    const currentArticle = dummyArticle[0];
    this.setState({
      article: currentArticle,
      prevArticle: this.getPrev(dummyArticle, 0),
      nextArticle: this.getNext(dummyArticle, 0),
      articleIndex: 0
    });
  }
  render() {
    const { article, prevArticle, nextArticle } = this.state;

    var colors = [prevArticle.color, article.color, nextArticle.color];

    const backArticle = () => this.updateState(dummyArticle, -1);
    const forwardArticle = () => this.updateState(dummyArticle, 1);

    return (
      <div className="articles main__item">
        <div className="articles__colors">
          {colors.map((color, key) => {
            return <div className={'articles__colors--' + color} />;
          })}
        </div>

        <div className="articles__left">
          <ArrowBack onClick={backArticle} />
        </div>
        <ArticleHeadline {...this.state.article} />
        <div className="articles__right">
          <ArrowForward onClick={forwardArticle} />
        </div>
      </div>
    );
  }

  getNext(arr, index) {
    if (index === arr.length - 1) {
      return arr[0];
    } else {
      return arr[index + 1];
    }
  }

  getPrev(arr, index) {
    if (index === 0) {
      return arr[arr.length - 1];
    } else {
      return arr[index - 1];
    }
  }

  updateState(arr, direction) {
    var index = this.state.articleIndex + direction;
    if (index === -1) index = arr.length - 1;
    else if (index === arr.length) index = 0;
    var article = arr[index];
    this.setState({
      article,
      articleIndex: index,
      prevArticle: this.getPrev(arr, index),
      nextArticle: this.getNext(arr, index)
    });
  }
}
