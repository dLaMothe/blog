import * as React from 'react';
import PropTypes from 'prop-types';

export class Tags extends React.Component {
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
        <span className="tags__title">Filter By</span>
        <div className="tags__flex">
          {tags.map((tag, key) => {
            const tagClickHandler = () => this.props.setTagArticles(tag.id);
            return (
              <span onClick={tagClickHandler} className="tags__text">
                #{tag.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

Tags.propTypes = {
  setTagArticles: PropTypes.func.isRequired
};

export default Tags;
