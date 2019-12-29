import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

import PropTypes from 'prop-types';
import ArticleHeadline from './articleHeadline';

export class FeaturedArticles extends React.Component {
  render() {
    const { article, backArticle, forwardArticle, articleIndex } = this.props;

    // TODO: determine if I want to stick with this idea and add it to the data model if so
    var colors = ['red', 'yellow', 'blue'];

    return (
      <div className="featured_article main__item">
        <div className="featured_article__colors">
          {colors.map((color, key) => {
            return (
              <div key={key} className={'featured_article__colors--' + color} />
            );
          })}
        </div>
        <div
          className="featured_article__left featured_article__button"
          onClick={backArticle}
        >
          <ArrowBack fontSize="large" />
        </div>
        {article && (
          <ArticleHeadline {...article} color={colors[articleIndex]} />
        )}
        <div
          className="featured_article__right featured_article__button"
          onClick={forwardArticle}
        >
          <ArrowForward fontSize="large" />
        </div>
      </div>
    );
  }
}

FeaturedArticles.propTypes = {
  article: PropTypes.object.isRequired,
  articleIndex: PropTypes.number.isRequired,
  backArticle: PropTypes.func.isRequired,
  forwardArticle: PropTypes.func.isRequired
};

export default FeaturedArticles;
