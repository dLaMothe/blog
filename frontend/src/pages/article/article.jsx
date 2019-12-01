import * as React from 'react';
import { Tram } from '@material-ui/icons';
import Markdown from '../../components/markdown';
import marked from 'marked';

export default class Article extends React.Component {
  render() {
    const article = this.props.article;

    return (
      <div className="article">
        <div className="article__header">
          <div className="article__date">29.4.1992</div>
          <div className="article__icon">
            <Tram />
          </div>
          <div className="article__headline">
            <b>article.title</b>
            <hr className="article__hr" />
            {article.categories.map((category, key) => {
              return (
                <span key={key} className="article__tag">
                  {'#' + category.name + ' '}
                </span>
              );
            })}
          </div>
        </div>
        <div className="article__body">
          <Markdown markdown={marked(article.body)} />
        </div>
      </div>
    );
  }
}
