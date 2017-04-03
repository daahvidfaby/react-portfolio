import React, {Component} from 'react';

class Field extends Component {
  getField(props) {
    let field;
    switch(props.type) {
      case 'textarea':
        field = (<textarea className={"form__field__input form__field__input--" + props.type}  name={props.name} id={props.name} /> );  
      break;
      case 'text':
      default:
        field = (<input type={props.type} className={"form__field__input form__field__input--" + props.type}  name={props.name} id={props.name} /> );
        break;
    }
    
    return (
      <div className="form__field">
        <label htmlFor={props.name} className="form__field__label">{props.title}</label>
        {field}
      </div>
    )
  }
  render() {
    return this.getField(this.props);
  }
}

export default Field;