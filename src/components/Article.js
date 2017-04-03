import React, {Component} from 'react';

class Article extends Component {
  getHtmlTitle(title) {
    if(title !== undefined) {
      return (<h2 className="article__title"> {title}</h2>)
    }
  }
  getClasses(classes) {
    if(classes === undefined) {
      return '';
    }
    return classes;
  }
  render() {
    return (
      <article className={"article " + this.getClasses(this.props.class)}>

        { this.getHtmlTitle(this.props.title) }
        
        {this.props.children}
        
      </article>
    );
  }
}

export default Article;