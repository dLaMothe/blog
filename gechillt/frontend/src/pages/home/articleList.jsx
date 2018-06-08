import * as React from 'react';

export default class ArticleList extends React.Component {
  render() {
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
            <div key={key} className="article-list__summary">
              <div className="article-list__header">
                {article.title}
                {article.tags}
              </div>
              <div className="article-list__date">{article.date}</div>
              <div className="article-list__introduction">{article.intro}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
