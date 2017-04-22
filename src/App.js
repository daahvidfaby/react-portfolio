import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import PageHeader from './components/PageHeader';
import Article from './components/Article';
import Form from './components/Form';
import Strong from './components/Strong';
import Logo from './components/Logo';
import Button from './components/Button';
import Dialog from './components/Dialog';
import Field from './components/Field';
import SkillsBlock from './components/SkillsBlock';
import ScrollToTopOnMount from './components/ScrollToTopOnMount';

import './App.css';

// text content
import skillsContent from './content/skills';
import aboutContent from './content/about';

import david from './assets/img/david.jpg';
import menu__icon from './assets/img/menu-icon.svg';
import slide1 from './assets/img/1.jpg';
import slide2 from './assets/img/2.jpg';
import movieTracker from './assets/img/projects/movie-tracker.jpg';
import reactMail from './assets/img/projects/react-mail.jpg';






class HomeContent extends Component {
  constructor() {
    super();
    this.state = {
      about: aboutContent,
      skills: skillsContent
    }
  }
  createMarkup(text) { return {__html: text}; };
  render() {
    const about = this.state.about;
    const skills = this.state.skills;
    
    return (
      <main className="content">
        <ScrollToTopOnMount/>
            <section className="content-block">
              <div className="grid grid--reverse--md">
                <div className="grid__column--12 grid__column--6--md">
                  <img src={david} alt="David Faby" className="content-block__image image--parallax"/>
                </div>
                <div className="grid__column--12 grid__column--6--md">
                  <Article title={about.title}>
                    {about.text.map((text, index) => { return ( <p className="article__text" key={index} dangerouslySetInnerHTML={ this.createMarkup(text) }></p>) })}
                  </Article>
                </div>
              </div>
            </section>
            <section className="content-block">
              <Article title="Compétences" class="grid article--color-invert article--space-bottom">
                <div className="grid">
                  <div className="grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Intégration" skills={skills['integration']}/>
                  </div>
                  <div className="grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Développement web" skills={skills['development']}/>
                  </div>
                  <div className="grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Automatisation" skills={skills['automating']}/>
                  </div>
                  <div className="grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Interfaces" skills={skills['interfaces']}/>
                  </div>
                </div>
              </Article>

            </section>
            <div className="button-container">
              <Button location="/contact" type="primary">Contactez-moi !</Button>
            </div>

          </main>
    );
  }
}



const projects = [
  {
    image: movieTracker,
    title : 'Movie Tracker',
    url : '/movie-tracker',
    buttonText: 'Voir la démo',
    description: "Lors d'un mini-projet de fin de module nous avons du réaliser par groupe de deux une web app imitant le comportement d'un site d'informations sur des films ou des séries, au choix. Il a fallu s'occuper du design et de tout le développement, le tout accédant aux informations au format JSON depuis l'API OMDB. J'ai utilisé le framework CSS : Materialize css. Le tout devait être en version mobile, je vous conseille donc de réduire la taille de l'écran."
  },
  {
    image: reactMail,
    title : 'React Gmail',
    url : 'https://react-mail.netlify.com/',
    buttonText: 'Voir la démo',
    description: "Projet à réaliser obligatoirement avec le framework ReactJS. C'est un client gmail utilisant l'API de google en Javascript pour obtenir les différentes informations de la personne se connectant ainsi que ses e-mails. Aucune donnée n'est sauvegardée donc n'ayez pas peur de donner l'autorisation à accéder à votre compte pour la démo."
  },
  {
    image: slide1,
    title : 'React Gmail',
    url : 'https://github.com/daahvidfaby/project-react',
    description: 'Lorem ipsum'
  },
  {
    image: slide2,
    title : 'Test',
    url : 'https://github.com/daahvidfaby/react-portfolio',
    description: 'Lorem ipsum 2'
  },
    {
    image: slide1,
    title : 'React Gmail',
    url : 'https://github.com/daahvidfaby/project-react',
    description: 'Lorem ipsum'
  }
];

class ProjectsContent extends Component {
  constructor() {
    super();
    this.state = {
      projects: projects
    }
  }
  getProjects(projects) {
    return projects.map((project, key) => {
      return this.renderProject(project, key)
    });
  }
  renderProject(project, key) {
    return(
      <div className="project" key={key} className="grid__column grid__column--12 grid__column--6--md grid__column--4--lg">
        <Article title={project.title} class="article--color-invert article--space-bottom">
          <div className="article__img">
            <img src={project.image} />
          </div>
            <p className="article__text">{project.description}</p>
        </Article>
        <div className="button-container">
          <Button type="primary" location={project.url}> {project.buttonText} </Button>
        </div>
      </div>
    );
  }
  render() {
    return (
      <main className="content">
        <ScrollToTopOnMount/>
            <section className="content-block">
              <div className="grid">
                {this.getProjects(this.state.projects)}
              </div>
            </section>

          </main>
    );
  }
}


class ContactContent extends Component {
  render() {
    return (
      <main className="content">
        <ScrollToTopOnMount/>
            <section className="content-block">
                <div className="grid">
                  <div className="grid__column grid__column--12 grid__column--4--md type-center--md">
                    <Article title="Adresse">
                      <div className="article__text">
                        <Strong>75, Rue d'Ostwald</Strong>
                      </div>
                      <div className="article__text">
                        <Strong>67200 Strasbourg</Strong>
                      </div>
                    </ Article>
                  </div>
                  <div className="grid__column--12 grid__column--4--md  type-center--md">
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
                  </div>
                  <div className="grid__column--12 grid__column--4--md type-center--md">
                    <Article title="Par mail">
                      <div className="article__text">
                        <Strong>david.faby29@gmail.com</Strong>
                      </div>
                    </ Article>
                  </div>
                </div>
                <div className="grid grid--justify-center margin-xs margin-y">
                  <div className="grid__column--12 grid__column--8--md grid__column--6--lg">
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
                  </div>
                </div>
            </section>

          </main>
    );
  }
}



class HomeIntro extends Component {
  constructor() {
    super();
    this.state = {
      translateTopPanel: 0
    };
    this.setParallaxProps = this.setParallaxProps.bind(this);
    this.startAnimation = this.startAnimation.bind(this);
  }
  componentDidMount() {
    this.startAnimation();
  }
  componentWillUnmount() {
    this.stopAnimation();
  }
  startAnimation() {
    if(window.scrollY < window.innerHeight) {
      /*this.setParallaxProps();*/
      this.setState(() => {
      return { animationInterval : setInterval(this.setParallaxProps, 10) };
    });
    }
  }
  stopAnimation() {
    clearInterval(this.state.animationInterval);
  }
  setParallaxProps() {
    window.requestAnimationFrame(() => {
      this.setState(() => {
        return  {
          translateTopPanel: ((window.scrollY * - 1) /1.8)
        };
      });
    });
  }
  render() {
    return (
      <section className="intro grid">
        <div className="intro__text grid__column--12 grid__column--6--md">
          <p className="intro__text__paragraph  intro__text__paragraph--primary">Bonjour !</p>
          <p className="intro__text__paragraph"><span className="intro__text__paragraph--light">Je suis</span> David Faby,</p>
          <h1 className="intro__title intro__title--close intro__title--code">Développeur<br/> Front-end</h1>
        </div>
        <div className="intro__pattern grid__column--12 grid__column--6--md" style={{top : this.state.translateTopPanel +"px"}}></div>
      </section>
    );
  }
}


class Menu extends Component {
  constructor() {
      super();
      this.state = {
          panelClassHandler: 'js-panel-handler',
      }
      this.handlePanel = this.handlePanel.bind(this);
  }
  componentDidMount() {
     if(this.state.panel === undefined) {
      const panel = document.querySelector('.' + this.state.panelClassHandler);
      this.setState(() => {
        return { 'panel' : panel };
      })
    }
  }
  handlePanel() {
    if(this.state.display === true) {
      this.state.panel.classList.remove('js-display');
      this.setState(() => {
        return { 'display' :  false };
      });
    } else {
      this.state.panel.classList.add('js-display');
      this.setState(() => {
        return { 'display' :  true };
      });
    }
  }
  render() {
    return (

      <nav className="menu">
        <div className="menu__button">
          <a href="#" className="menu__button__link " onClick={this.handlePanel}>
            <img className="menu__button__icon" src={menu__icon} alt="Menu" />
            <div className="menu__button__text">Menu</div>
          </a>
        </div>
        <ul className={"menu__list " + this.state.panelClassHandler}>
          <li className="menu__list__item">
            <Link to="/" className="menu__list__link" onClick={this.handlePanel}>Présentation</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/projects" className="menu__list__link" onClick={this.handlePanel}>Projets</Link>
          </li>
          <li className="menu__list__item">
            <Link to="/contact" className="menu__list__link" onClick={this.handlePanel}>Contact</Link>
          </li>
        </ul>
      </nav>

    );
  }
}


class Portfolio extends Component {
  render() {
    return (

      <Router>
        <div className="wrapper">
          <header className="header">
            <Logo />
            <Menu changeRouteHandler={this.changeRouteHandler}/>
          </header>

            <ParallaxFront>

              <Route exact path="/" component={HomeIntro}/>
              <Route path="/:page" component={PageHeader}/>

            </ParallaxFront>

            <ParallaxBack>
              <Route exact path="/" component={HomeContent} />
              <Route path="/projects" component={ProjectsContent} />
              <Route path="/contact" component={ContactContent} />
            </ParallaxBack>


        </div>
      </Router>
    );
  }
}

class ParallaxBack extends Component {
render() {
    return(
      <div className="parallax__layer parallax__layer--back">
        { this.props.children }
      </div>
    );
  }
}

class ParallaxFront extends Component {
  constructor() {
      super();
      this.state = {
        translateTopPanel: 0
      };
      this.setParallaxProps = this.setParallaxProps.bind(this);
      this.startAnimation = this.startAnimation.bind(this);
    }
    componentDidMount() {
      this.setState(() => {
        return { animationInterval : setInterval(this.startAnimation, 10) };
      });
    }
    componentWillUnmount() {
      clearInterval(this.state.animationInterval);
    }
    startAnimation() {
        if((window.innerWidth > 768 && window.location.pathname === '/') || (window.scrollY > window.innerHeight)) {
          return false;
        }

        this.setParallaxProps();
    }
    setParallaxProps() {
      window.requestAnimationFrame(() => {
        this.setState(() => {
          return  {
            translateTopPanel: ((window.scrollY * - 1) /3.7)
          };
        });
      });
    }
  render() {
      return(
        <div className="wrapper parallax__layer parallax__layer--front" style={{top : this.state.translateTopPanel +"px"}}>
          { this.props.children }
        </div>
      );
  }
}


export default Portfolio;
