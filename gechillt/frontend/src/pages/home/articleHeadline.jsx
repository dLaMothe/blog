import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleHeadline extends React.Component {
  render() {
    const { id, title, subtitle, date } = this.props;

    return (
      <div className="articles__headline">
        <span className="articles__date">{date}</span>
        <Link className="articles__summary" to={'/articles/' + id}>
          <h4>{title}</h4>
        </Link>
        <h5 className="articles__subtitle">{subtitle}</h5>
      </div>
    );
  }
}

ArticleHeadline.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string.isRequired
};

export default ArticleHeadline;
