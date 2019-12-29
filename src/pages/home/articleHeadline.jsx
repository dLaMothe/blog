import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatArticleDate } from '../../utils';

class ArticleHeadline extends React.Component {
  render() {
    const { id, title, abstract, date_created } = this.props;

    return (
      <Link className="featured_article__headline" to={'/articles/' + id}>
        <span className="featured_article__date">
          {formatArticleDate(date_created)}
        </span>
        <span className="featured_article__title">{title}</span>
        <p className="featured_article__abstract">{abstract}</p>
      </Link>
    );
  }
}

ArticleHeadline.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  abstract: PropTypes.string,
  date_created: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ArticleHeadline;
