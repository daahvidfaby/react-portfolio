import React, { Component } from 'react';
import './App.css';
import david from './assets/img/david.jpg';


class Strong extends Component {
  render() {
    return (
      <strong className="text--bold">{this.props.children}</strong>
    );
  }
}

class SkillsBlock extends Component {
  getSkillsList(skills) {
    return skills.map(function (skill, index) {
      return <li classNameme="skills-block__list__item">{skill}</li>;
    });
  }
  render() {
    return (
      <div className="skills-block">
        <h3>{this.props.title}</h3>
          <ul className="skills-block__list">
            {this.getSkillsList(this.props.skills)}
          </ul>
      </div>
    );
  }
}

class Portfolio extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="logo">
            <h2 className="logo__text">
              David <span className="logo__text--green">Faby</span>
            </h2>
          </div>
          <nav className="menu">
            <div className="menu__button">&nbsp; </div>
              <ul className="menu__list">
                <li className="menu__list__item">Présentation</li>
                <li className="menu__list__item">Projets</li>
                <li className="menu__list__item">Contact</li>
              </ul>
          </nav>
        </header>
        <main className="content">
          <section className="intro">
            <div className="intro__text">
              <p>Bonjour !</p>
              <p>Je suis David Faby,</p>
              <h1 className>Développeur Front-end</h1>
            </div>
            <div className="intro__pattern">

            </div>
          </section>
          <section className="content-block">
            <img src={david} alt="David Faby" className="content-block__image image--parallax"/>
            <article className="article">
              <h2 className="article__title">Présentation</h2>
              <p className="article__text">
              Apprenti en <Strong>développement web</Strong>, j’aime
              réaliser des sites et des applications web
              interactives et modernes.
              Plutôt orienté <Strong>Front-end</Strong>,
              je suis <Strong>polyvalent</Strong> lors de leur création.
              Pour vous, je saurais à la fois me pencher
              sur la conception, pour réfléchir au
              développement à toutes les étapes d’un
              projet.
              Que ce soit sur la <Strong>réflexion</Strong> sur l’<Strong>expérience utilisateur</Strong>,
              l’<Strong>interface</Strong> et l’<Strong>accessibilité</Strong>, ou
              lors du <Strong>développement back-end</Strong> et
              front-end, je saurais utiliser mes
              compétences pour mener à bien ce projet.
              Je sais m’intégrer à une équipe et à la fois travailler en autonomie.
              Ensemble, nous pourrons créer l’avenir de l’internet.
              </p>
            </article>
          </section>
          <section className="content-block content-block--dark">
            <article className="article">
              <h2 className="article__title">Compétences</h2>
              <SkillsBlock skills={'HTML', 'CSS', 'Libirairies CSS'}/>
              <div className="skills-block">
                <h3>Intégration</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Librairies CSS <span>Bootstrap, MaterializeCSS</span></li>
                </ul>
              </div>
              <div className="skills-block">
                <h3>Intégration</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Librairies CSS <span>Bootstrap, MaterializeCSS</span></li>
                </ul>
              </div>
              <div className="skills-block">
                <h3>Intégration</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>Librairies CSS <span>Bootstrap, MaterializeCSS</span></li>
                </ul>
              </div>
            </article>

          </section>

        </main>
      </div>
    );
  }
}

export default Portfolio;
