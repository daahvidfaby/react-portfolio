import React, { Component } from 'react';

class PageHeader extends Component {
  getTopTitle() {
    switch(this.props.location.pathname) {
      case '/contact':
            return 'Me';      
      break;
      case '/projects':
            return 'Mes';      
      break;
      default:
      return undefined;
    }
  }
  getMainTitle() {
    switch(this.props.location.pathname) {
      case '/contact':
            return 'Contacter';      
      break;
      case '/projects':
            return 'Projets';      
      break;
      default:
      return undefined;
    }
  }
  getSubtitle() {
    switch(this.props.location.pathname) {
      case '/contact':
            return 'Et si on apprenait à mieux se connaître ?';      
      break;
      case '/projects':
            return 'Une sélection de mes meilleurs projets';      
      break;
      default:
      return undefined;
    }
  }
  render() {
    return (
      <section className="page-header">
        <div className="page-header__top">
          <span className="page-header__top__text">{this.getTopTitle()}</span>
        </div>
        <div className="page-header__bottom">
          <h1 className="page-header__bottom__title">{this.getMainTitle()}</h1>
          <div className="page-header__bottom__text">
            { this.getSubtitle() }
          </div>
          <div className="page-header__arrow">
            <i className="fa fa-chevron-down" aria-hidden="true"></i>
          </div>
        </div>
      </section>
    );
  }
}

export default PageHeader;