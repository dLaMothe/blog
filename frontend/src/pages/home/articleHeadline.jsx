import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleHeadline extends React.Component {
  render() {
    const { id, title, subtitle, date } = this.props;

    return (
      <Link className="articles__headline" to={'/articles/' + id}>
        <span className="articles__date">{date}</span>
        <h4 className="articles__summary">{title}</h4>
        <h5 className="articles__subtitle">{subtitle}</h5>
      </Link>
    );
  }
}

ArticleHeadline.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  date: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default ArticleHeadline;