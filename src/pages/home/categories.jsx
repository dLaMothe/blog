import * as React from 'react';
import PropTypes from 'prop-types';

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch('/api/categories')
      .then(response => response.json())
      .then(categories => {
        this.setState({
          categories: categories
        });
      });
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="categories">
        <span className="categories__title">Filter By</span>
        <div className="categories__flex">
          {categories.map((category, key) => {
            const categoryClickHandler = () =>
              this.props.setCategory(category.id);
            return (
              <span onClick={categoryClickHandler} className="categories__text">
                #{category.name}
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}

Categories.propTypes = {
  setCategory: PropTypes.func.isRequired
};

export default Categories;
