import * as React from 'react';
import { Tram } from '@material-ui/icons';
import Markdown from '../../components/markdown';
import mdPath from './test.md';
import marked from 'marked';

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { markdown: '' };
  }

  componentWillMount() {
    //TODO: Markdown will be sent via server API
    fetch(mdPath)
      .then(response => {
        return response.text();
      })
      .then(text => {
        console.log(text);
        this.setState({
          markdown: marked(text),
          id: this.props.match.params.id
        });
      });
  }

  render() {
    const dummyTags = ['these', 'are', 'tags'];
    return (
      <div className="article">
        <div className="article__header">
          <div className="article__date">29.4.1992</div>
          <div className="article__icon">
            <Tram />
          </div>
          <div className="article__headline">
            <b>This is a long and fancy Headline as an example</b>
            <hr className="article__hr" />
            {dummyTags.map((tag, key) => {
              return (
                <span key={key} className="article__tag">
                  {'#' + tag + ' '}
                </span>
              );
            })}
          </div>
        </div>
        <div className="article__body">
          <Markdown markdown={this.state.markdown} />
        </div>
      </div>
    );
  }
}
