import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatArticleDate } from '../../utils';

export class ArticleList extends React.Component {
  render() {
    const { articles } = this.props;
    return (
      <div className="article-list">
        {articles.map((article, key) => {
          return (
            <div key={key} className="article-list__grid">
              <div className="article-list__date">
                {formatArticleDate(article.date_created)}
              </div>
              <Link
                to={'/articles/' + article.id}
                className="article-list__link"
              >
                <div className="article-list-headline">
                  <h3 className="article-list-headline__title">
                    {article.title}
                  </h3>

                  <p className="article-list__abstract">{article.abstract}</p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};

export default ArticleList;
