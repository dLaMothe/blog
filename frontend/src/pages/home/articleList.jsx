import * as React from 'react';
import { Tram } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default class ArticleList extends React.Component {
  componentDidMount() {
    var i = 10;
    var int = setInterval(function() {
      window.scrollTo(0, i);
      i += 10;
      if (i >= 200) clearInterval(int);
    }, 20);
  }

  render() {
    const dummyId = 15;
    const dummyArticleList = [
      {
        title: 'Hello',
        date: '29.04.1992',
        tags: ['hello'],
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      },
      {
        title: 'Goodbye',
        date: '05.07.1991',
        tags: ['goodbye'],
        intro:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
      }
    ];

    return (
      <div className="article-list">
        {dummyArticleList.map((article, key) => {
          return (
            <div key={key} className="article-list__grid">
              <div className="article-list__date">{article.date}</div>
              <Link to={'/articles/' + dummyId} className="article-list__link">
                <div className="article-list-headline">
                  <div className="article-list-headline__icon">
                    <Tram />
                  </div>
                  <div className="article-list-headline__title">
                    <h3>{article.title}</h3>
                  </div>
                  <div className="article-list-headline__tags">
                    {article.tags}
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
