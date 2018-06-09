import * as React from 'react';

const navigationItems = [
  {
    color: 'blue',
    name: 'sad'
  },
  { color: 'red', name: 'angry' },
  { color: 'yellow', name: 'happy' }
];

export default class Navigation extends React.Component {
  render() {
    const itemClass = 'navigation__item';

    return (
      <div className="navigation__list main__item">
        {navigationItems.map((item, key) => {
          return <div key={key} className={itemClass + '--' + item.color} />;
        })}
      </div>
    );
  }
}
