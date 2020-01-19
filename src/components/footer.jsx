import * as React from 'react';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll = event => {
    const target = document.getElementsByClassName('article-list')[0];
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
      });
    }
  };

  render() {
    return (
      <footer className="footer main__item">
        <button className="expand-list__button" onClick={this.handleScroll}>
          <span className="expand-list__text">more</span>
        </button>
      </footer>
    );
  }
}

export default Footer;
