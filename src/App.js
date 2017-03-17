import React, { Component } from 'react';
import './App.css';
import david from './assets/img/david.jpg';


class Strong extends Component {
  render() {
    return (
      <strong className="text--bold">{this.props.content}</strong>
    );
  }
}

class SkillsBlock extends Component {
  render() {
    return (
      <div className="skills-block">
        <h3>Intégration</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Librairies CSS <span>Bootstrap, MaterializeCSS</span></li>
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
              Apprenti en <Strong content="développement web"/>, j’aime
              réaliser des sites et des applications web
              interactives et modernes.
              Plutôt orienté <Strong content="Front-end"/>,
              je suis <Strong content="polyvalent"/> lors de leur création.
              Pour vous, je saurais à la fois me pencher
              sur la conception, pour réfléchir au
              développement à toutes les étapes d’un
              projet.
              Que ce soit sur la <Strong content="réflexion"/> sur l’<Strong content="expérience utilisateur" />,
              l’<Strong content="interface" /> et l’<Strong content="accessibilité" />, ou
              lors du <Strong content="développement back-end" /> et
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
              <SkillsBlock/>
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
