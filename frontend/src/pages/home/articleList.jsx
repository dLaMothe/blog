import * as React from 'react';
import PropTypes from 'prop-types';
import { Tram } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export class ArticleList extends React.Component {
  componentDidMount() {
    var i = 10;
    var int = setInterval(function() {
      window.scrollTo(0, i);
      i += 10;
      if (i >= 200) clearInterval(int);
    }, 20);
  }

  render() {
    const { articles } = this.props;
    console.log(articles);
    return (
      <div className="article-list">
        {articles.map((article, key) => {
          return (
            <div key={key} className="article-list__grid">
              <div className="article-list__date">{article.date_created}</div>
              <Link
                to={'/articles/' + article.id}
                className="article-list__link"
              >
                <div className="article-list-headline">
                  <div className="article-list-headline__icon">
                    <Tram />
                  </div>
                  <div className="article-list-headline__title">
                    <h3>{article.title}</h3>
                  </div>
                  <div className="article-list-headline__subtitle">
                    {article.subtitle}
                  </div>
                </div>
              </Link>

              <article className="article-list__introduction">
                <p>{article.intro}</p>
              </article>
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
