import * as React from 'react';

export default class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
  }

  componentDidMount() {
    fetch('/api/categories')
      .then(response => response.json())
      .then(tags => {
        this.setState({
          tags: tags
        });
      });
  }

  render() {
    const { tags } = this.state;

    return (
      <div className="tags">
        <h1 className="tags__title">Filter By</h1>
        <div className="tags__flex">
          {tags.map((tag, key) => {
            return (
              <span key={key} className="tags__text">
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}
