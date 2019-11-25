import * as React from 'react';
import { ArrowBack, ArrowForward } from '@material-ui/icons';

import PropTypes from 'prop-types';
import ArticleHeadline from './articleHeadline';

export class Articles extends React.Component {
  render() {
    const { article, backArticle, forwardArticle, articleIndex } = this.props;

    // TODO: determine if I want to stick with this idea and add it to the data model if so
    var colors = ['red', 'yellow', 'blue'];

    return (
      <div className="articles main__item">
        <div className="articles__colors">
          {colors.map((color, key) => {
            return <div key={key} className={'articles__colors--' + color} />;
          })}
        </div>
        <div className="articles__left" onClick={backArticle}>
          <ArrowBack />
        </div>
        {article && (
          <ArticleHeadline {...article} color={colors[articleIndex]} />
        )}
        <div className="articles__right" onClick={forwardArticle}>
          <ArrowForward />
        </div>
      </div>
    );
  }
}

Articles.propTypes = {
  article: PropTypes.object.isRequired,
  articleIndex: PropTypes.number.isRequired,
  backArticle: PropTypes.func.isRequired,
  forwardArticle: PropTypes.func.isRequired
};

export default Articles;
