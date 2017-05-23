import React, {Component} from 'react';

class Dialog extends Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }
  getTypeClass() {
    if(this.props.success === true) {
      return 'success';
    }
    return 'error';
  }
  handleDisplayClass() {
    if(this.props.display === true) {
      return 'dialog--display';
    }
    return 'dialog--hide';
  }
  close(e) {
    e.preventDefault();
    this.props.handleClose();
  }
  render() {
    return (
      <div className={"dialog dialog--" + this.getTypeClass() + " " + this.handleDisplayClass()}>
        <div className="dialog__close">
          <a href="#" className="dialog__close__link" onClick={this.close}>
            <i className="fa fa-times" aria-hidden="true"></i>
          </a>
        
        </div>
        <div className="dialog__message">{this.props.children}</div>
      </div>
    );
  }
}

export default Dialog;