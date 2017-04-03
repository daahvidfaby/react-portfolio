import React, {Component} from 'react';

class Button extends Component {
  getType(property) {
    return 'button--' + property;
  }
  render() {
    return (
      <a className={'button ' + this.getType(this.props.type)} href={this.props.location}>{this.props.children}</a>
    );
  }
}

export default Button;