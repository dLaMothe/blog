import * as React from 'react';
import Proptypes from 'prop-types';

class Markdown extends React.Component {
  render() {
    return <div dangerouslySetInnerHTML={{ __html: this.props.markdown }} />;
  }
}

Markdown.propTypes = {
  markdown: Proptypes.string.isRequired
};

export default Markdown;
