import React, { Component } from 'react';
import './App.css';
import david from './assets/img/david.jpg';

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
              Apprenti en <strong className="text--bold">développement web</strong>, j’aime
              réaliser des sites et des applications web
              interactives et modernes.
              Plutôt orienté <strong className="text--bold">Front-end</strong>, je suis <strong className="text--bold">polyvalent</strong>
              lors de leur création.
              Pour vous, je saurais à la fois me pencher
              sur la conception, pour réfléchir au
              développement à toutes les étapes d’un
              projet.
              Que ce soit sur la <strong className="text--bold">réflexion</strong> sur l’<strong className="text--bold">expérience
              utilisateur</strong>, l’<strong className="text--bold">interface</strong> et l’<strong className="text--bold">accessibilité</strong>, ou
              lors du <strong className="text--bold">développement back-end</strong> et
              front-end, je saurais utiliser mes
              compétences pour mener à bien ce projet.
              Je sais m’intégrer à une équipe et à la fois
              travailler en autonomie.
              Ensemble, nous pourrons créer l’avenir de
              l’internet.
              </p>
            </article>
          </section>
          <section className="content-block content-block--dark">
            <article className="article">
              <h2 className="article__title">Compétences</h2>
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
