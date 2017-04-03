import React, {Component} from 'react';

class Strong extends Component {
  render() {
    return (
      <strong className="text--bold">{this.props.children}</strong>
    );
  }
}

export default Strong;