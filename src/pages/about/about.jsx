import * as React from 'react';
import Article from '../article/article';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { article: null };
  }

  componentDidMount() {
    const readmePath = require('./about-me.md');

    fetch(readmePath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        this.setState({
          article: {
            title: 'About Me',
            body: text,
            date_created: '2020.1.1',
            categories: [{ name: 'about-me' }]
          }
        });
      });
  }

  render() {
    const article = this.state.article;

    if (article) {
      return (
        <Article
          title={article.title}
          body={article.body}
          date_created={article.date_created}
          categories={article.categories}
        />
      );
    } else {
      return null;
    }
  }
}
