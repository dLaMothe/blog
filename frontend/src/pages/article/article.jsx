import * as React from 'react';
import { Tram } from '@material-ui/icons';
import PropTypes from 'prop-types';
import Markdown from '../../components/markdown';
import marked from 'marked';

export default class Article extends React.Component {
  render() {
    const { title, body, date_created, categories } = this.props;

    return (
      <div className="article">
        <div className="article__header">
          <div className="article__date">{date_created}</div>
          <div className="article__icon">
            <Tram />
          </div>
          <div className="article__headline">
            <b>{title}</b>
            <hr className="article__hr" />
            {categories.map((category, key) => {
              return (
                <span key={key} className="article__tag">
                  {'#' + category.name + ' '}
                </span>
              );
            })}
          </div>
        </div>
        <div className="article__body">
          <Markdown markdown={marked(body)} />
        </div>
      </div>
    );
  }
}

Article.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  date_created: PropTypes.string.isRequired,
  categories: PropTypes.array
};
