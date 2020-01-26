import * as React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    fetch("/api/categories")
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
            const resetCategoryClickHandler = () => this.props.setCategory();
            const isSelected = category.id === this.props.selectedCategoryId;
            const textClass = classNames({
              categories__text: true,
              "categories__text--selected": isSelected
            });
            return (
              <span
                onClick={
                  isSelected ? resetCategoryClickHandler : categoryClickHandler
                }
                key={key}
                className={textClass}
              >
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
  setCategory: PropTypes.func.isRequired,
  selectedCategoryId: PropTypes.number
};

export default Categories;
