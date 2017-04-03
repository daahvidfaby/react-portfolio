import React, {Component} from 'react';

class Dialog extends Component {
  render() {
    return (
      <div className={"dialog dialog--" + this.props.type}>
        <div className="dialog__close">
          <a href="#" className="dialog__close__link">
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        
        </div>
        <div className="dialog__message">{this.props.children}</div>
      </div>
    );
  }
}

export default Dialog;