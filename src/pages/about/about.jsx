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
        <div>
          <Article
            title={article.title}
            body={article.body}
            date_created={article.date_created}
            categories={article.categories}
          />
          <div className="social">
            <a href="https://github.com/dlamothe" className="social__link">
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/davidalamothe/"
              className="social__link"
            >
              LinkedIn
            </a>
            <a href="mailto:david.a.lamothe@gmail.com" className="social__link">
              Email
            </a>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
