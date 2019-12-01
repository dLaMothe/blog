import * as React from 'react';
import Article from './article';

export default class ArticleContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  //TODO: Find some time to make this work conceptually with hooks
  componentDidMount() {
    fetch('/blog/posts/' + this.props.match.params.id + '/')
      .then(response => response.json())
      .then(article => {
        this.setState({
          article: article
        });
      });
  }

  render() {
    const article = this.state.article;

    if (article) {
      return <Article article={article} />;
    } else {
      return null;
    }
  }
}
