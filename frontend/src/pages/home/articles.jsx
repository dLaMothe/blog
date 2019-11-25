import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

import PropTypes from 'prop-types';
import ArticleHeadline from './articleHeadline';

export class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.getNext = this.getNext.bind(this);
    this.getPrev = this.getPrev.bind(this);
    this.updateState = this.updateArticleIndex.bind(this);
    this.state = {
      articleIndex: 0
    };
  }

  render() {
    const { articles } = this.props;
    const { articleIndex } = this.state;
    const article = articles[articleIndex];

    // TODO: determine if I want to stick with this idea and add it to the data model if so
    var colors = ['red', 'yellow', 'blue'];

    const backArticle = () => this.updateArticleIndex(articles.length, -1);
    const forwardArticle = () => this.updateArticleIndex(articles.length, 1);

    return (
      <div className="articles main__item">
        <div className="articles__colors">
          {colors.map((color, key) => {
            return <div key={key} className={'articles__colors--' + color} />;
          })}
        </div>
        <div className="articles__left">
          <ArrowBack onClick={backArticle} />
        </div>
        {article && (
          <ArticleHeadline
            {...article}
            color={colors[this.state.articleIndex]}
          />
        )}
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

  updateArticleIndex(articlesCount, direction) {
    var index = this.state.articleIndex + direction;
    if (index === -1) index = articlesCount - 1;
    else if (index === articlesCount) index = 0;
    this.setState({
      articleIndex: index
    });
  }
}

Articles.propTypes = {
  articles: PropTypes.array.isRequired
};

export default Articles;
