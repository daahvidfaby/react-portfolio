import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './App.css';
import david from './assets/img/david.jpg';
import menu__icon from './assets/img/menu-icon.svg';

const skills = {
  "integration" : [
      {
        "name": "HTML",
        "sub": null
      },
      {
        "name": "CSS",
        "sub": null
      },
      {
        "name": "Librairies CSS",
        "sub": "Bootstrap, MaterializeCSS"
      }
  ],
  "development" : [
      {
        "name": "Javascript",
        "sub": null
      },
      {
        "name": "Librairies JS",
        "sub": "jQuery, ReactJS"
      },
      {
        "name": "Node.js",
        "sub": "NPM, Express"
      },
      {
        "name": "PHP",
        "sub": "Laravel, Jelix"
      },
      {
        "name": "Rest APIs",
        "sub": "Création et communication"
      }
  ],
    "automating" : [
      {
        "name": "Gulp",
        "sub": null
      },
      {
        "name": "Webpack",
        "sub": null
      },
      {
        "name": "Préprocesseurs CSS",
        "sub": "Less et Sass"
      },
  ],
    "interfaces" : [
      {
        "name": "UX Design",
        "sub": "Réflexion autour de personas, notions d'ergonomie"
      },
      {
        "name": "Maquettes et prototypes",
        "sub": "Illustrator, Photoshop, Marvel"
      }
  ]
}


class Strong extends Component {
  render() {
    return (
      <strong className="text--bold">{this.props.children}</strong>
    );
  }
}

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

class SkillsBlock extends Component {
  getSkillsList(skillsName) {
    return skills[skillsName].map(function(skill, index) {
      let sub = (skill.sub != null ? skill.sub:'');
      return (
        <li key={index} className="skills-block__list__item">
          <span className="skills-block__list__sub-item  skills-block__list__sub-item--main">{skill.name}</span>
          <span className="skills-block__list__sub-item  skills-block__list__sub-item--secondary">{sub}</span>
        </li>
      );
    });
  }
  render() {
    return (
      <div className="skills-block">
        <h3 className="skills-block__title">{this.props.title}</h3>
          <ul className="skills-block__list">
            {this.getSkillsList(this.props.skills)}
          </ul>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <Link to="/">      
          <h2 className="logo__text">
            David <span className="logo__text--green">Faby</span>
          </h2>
        </Link>  
      </div>
    );
  }
}

class Form extends Component {
  render() {
    return (
      <form className="form" method="post" action="/postMessage">
        {this.props.children}
      </form>
    );
  }
}

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

class HomeContent extends Component {
  render() {
    return (
      <main className="content parallax__layer parallax__layer--back">
            <section className="content-block">
              <img src={david} alt="David Faby" className="content-block__image image--parallax"/>
             <Article title="Présentation">
                <p className="article__text">
                Apprenti en <Strong>développement web</Strong>, j’aime
                réaliser des sites et des applications web
                interactives et modernes.</p>
                <p className="article__text">Plutôt orienté <Strong>Front-end</Strong>,
                je suis <Strong>polyvalent</Strong> lors de leur création.
                Pour vous, je saurais à la fois me pencher
                sur la conception, pour réfléchir au
                développement à toutes les étapes d’un
                projet.</p>
                <p className="article__text">Que ce soit sur la <Strong>réflexion</Strong> sur l’<Strong>expérience utilisateur</Strong>,
                l’<Strong>interface</Strong> et l’<Strong>accessibilité</Strong>, ou
                lors du <Strong>développement back-end</Strong> et
                front-end, je saurais utiliser mes
                compétences pour mener à bien ce projet.</p>
                <p className="article__text">Je sais m’intégrer à une équipe et à la fois travailler en autonomie.
                Ensemble, nous pourrons créer l’avenir de l’internet.
                </p>
              </Article>
            </section>
            <section className="content-block">
              <Article title="Compétences" class="article--color-invert article--space-bottom">
                  <SkillsBlock title="Intégration" skills="integration"/>
                  <SkillsBlock title="Développement web" skills="development"/>
                  <SkillsBlock title="Automatisation" skills="automating"/>
                  <SkillsBlock title="Interfaces" skills="interfaces"/>
              </Article>

            </section>
            <div className="button-container">
              <Button location="/contact" type="primary">Contactez-moi !</Button>
            </div>

          </main>
    );
  }
}

class ContactContent extends Component {
  render() {
    return (
      <main className="content parallax__layer parallax__layer--back">
            <section className="content-block">
              <Article title="Adresse">
                <div className="article__text">
                  <Strong>75, Rue d'Ostwald</Strong>
                </div>
                <div className="article__text">
                  <Strong>67200 Strasbourg</Strong>
                </div>
              </ Article>
              <Article title="En ligne">
                <div className="article__text">
                  <Button type="icon" location="https://github.com/daahvidfaby">
                    <i className="fa fa-github" aria-hidden="true"></i>
                  </Button>
                  <Button type="icon" location="https://twitter.com/daahvidFaby">
                    <i className="fa fa-twitter" aria-hidden="true"></i>
                  </Button>
                </div>
              </ Article>
              <Article title="Par mail">
                <div className="article__text">
                  <Strong>david.faby29@gmail.com</Strong>
                </div>
              </ Article>
              <Form>
                <Article class="article--color-invert article--space-bottom">
                    <Field type="text" name="firstname" title="Nom" />
                    <Field type="text" name="lastname" title="Prénom" />
                    <Field type="text" name="email" title="E-mail" />
                    <Field type="textarea" name="message" title="Message" />
                </ Article>
                <div className="button-container">
                  <Button type="primary">C'est parti !</Button>
                </div>
              </Form>
            </section>
            

          </main>
    );
  }
}

class PageHeader extends Component {
  render() {
    return (
      <section className="page-header">
        <div className="page-header__top">
          <span className="page-header__top__text">Me</span>
        </div>
        <div className="page-header__bottom">
          <h1 className="page-header__bottom__title">Contacter</h1>
          <div className="page-header__bottom__text">
            Et si on apprenait à mieux se connaître ?
          </div>
        </div>
      </section>
    );
  }
}

class HomeIntro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="intro__text">
          <p className="intro__text__paragraph  intro__text__paragraph--primary">Bonjour !</p>
          <p className="intro__text__paragraph"><span className="intro__text__paragraph--light">Je suis</span> David Faby,</p>
          <h1 className="intro__title intro__title--close intro__title--code">Développeur<br/> Front-end</h1>
        </div>
        <div className="intro__pattern"></div>
      </section>
    );
  }
}


class Portfolio extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <div className="parallax">
            <div className="parallax__layer parallax__layer--front">
              <header className="header">
                <Logo />
                <nav className="menu">
                  <div className="menu__button">
                    <a href="#" className="menu__button__link">
                      <img className="menu__button__icon" src={menu__icon} alt="Menu" />
                      <div className="menu__button__text">Menu</div>
                    </a>
                  </div>
                  <ul className="menu__list">
                    <li className="menu__list__item">Présentation</li>
                    <li className="menu__list__item">Projets</li>
                    <li className="menu__list__item">Contact</li>
                  </ul>
                </nav>
              </header>
              
              <Route exact path="/" component={HomeIntro} />
              <Route path="/contact" component={PageHeader} />
              
            </div>
     
     
            <Route exact path="/" component={HomeContent} />
            <Route path="/contact" component={ContactContent} />
           
          </div>
        </div>
      </Router>
    );
  }
}



export default Portfolio;
