import React, {Component} from 'react';

class Form extends Component {
  render() {
    return (
      <form className="form" method="post" action="/postMessage">
        {this.props.children}
      </form>
    );
  }
}

export default Form;