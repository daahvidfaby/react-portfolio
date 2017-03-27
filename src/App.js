import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
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

class HomeContent extends Component {
  render() {
    return (
      <main className="content parallax__layer parallax__layer--back">
            <section className="content-block">
              <img src={david} alt="David Faby" className="content-block__image image--parallax"/>
              <article className="article">
                <h2 className="article__title">Présentation</h2>
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
              </article>
            </section>
            <section className="content-block">
              <article className="article article--color-invert article--space-bottom">
                <h2 className="article__title">Compétences</h2>
                  <SkillsBlock title="Intégration" skills="integration"/>
                  <SkillsBlock title="Développement web" skills="development"/>
                  <SkillsBlock title="Automatisation" skills="automating"/>
                  <SkillsBlock title="Interfaces" skills="interfaces"/>
              </article>

            </section>
            <div className="home-contact">
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
              <img src={david} alt="David Faby" className="content-block__image image--parallax"/>
              <article className="article">
                <h2 className="article__title">Présentation</h2>
              </article>
            </section>
            <section className="content-block">
              <article className="article article--color-invert article--space-bottom">
                <h2 className="article__title">Compétences</h2>
                  <SkillsBlock title="Intégration" skills="integration"/>
                  <SkillsBlock title="Développement web" skills="development"/>
                  <SkillsBlock title="Automatisation" skills="automating"/>
                  <SkillsBlock title="Interfaces" skills="interfaces"/>
              </article>

            </section>
            <div className="home-contact">
              <Button location="/contact" type="primary">Contactez-moi !</Button>
            </div>

          </main>
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
                <div className="logo">
                  <h2 className="logo__text">
                    David <span className="logo__text--green">Faby</span>
                  </h2>
                </div>
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


/*export default Portfolio;*/
