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
import david from './assets/img/david.jpg';
import menu__icon from './assets/img/menu-icon.svg';
import slide1 from './assets/img/1.jpg';

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









class HomeContent extends Component {
  render() {
    return (
      <main className="content">
        <ScrollToTopOnMount/>
            <section className="content-block">
              <div className="grid grid--reverse--md">
                <div className="grid__column--12 grid__column--6--md">
                  <img src={david} alt="David Faby" className="content-block__image image--parallax"/>
                </div>
                <div className="grid__column--12 grid__column--6--md">
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


const projectsSlides = [
  {
    image: slide1,
    title : 'React Gmail',
    url : 'https://github.com/daahvidfaby/project-react',
    description: 'Lorem ipsum'
  },
  {
    image: '/2.png',
    title : 'Test',
    url : 'https://github.com/daahvidfaby/react-portfolio',
    description: 'Lorem ipsum 2'
  }
];


class ProjectsSlider extends Component {
  constructor() {
    super();
    this.state = {
      actualSlideNumber : 0,
    }
    this.goToSlide = this.goToSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
  }
  componentWillMount() {
    this.setState(() => {
      return { slide : this.getSlide(this.state.actualSlideNumber) };
    });
  }
  getSlide(slideNumber) {
    if(projectsSlides[slideNumber] === undefined) {
      return false;
    }
    return projectsSlides[slideNumber];
  }
  goToSlide(number) {
    console.log(number)
    this.setState(() => {
      return {
        actualSlideNumber : number
      }
    });
  }
  previousSlide() {
    let number;
    if(this.state.actualSlideNumber <= 0) {
      number = projectsSlides.length - 1;
    } else {
      number = this.state.actualSlideNumber - 1; 
    }
    this.goToSlide(number)
  }
  nextSlide() {
    let number;
    if(this.state.actualSlideNumber >= projectsSlides.length - 1) {
      number = 0;
    } else {
      number = this.state.actualSlideNumber + 1; 
    }
    console.log(number)
    
    this.goToSlide(number)
  }
  render() {
    const slide = this.getSlide(this.state.actualSlideNumber);
    return (
      <div className="slider">
        
        <Article class="grid article--color-invert article--space-bottom">

          <div className="slider__slide-container">
            <img src={slide.image} />
          </div>
          
          <div className="slider__controls">
          <Button type="icon" >
            <i className="fa fa-chevron-left" aria-hidden="true" onClick={ this.previousSlide }></i>
          </Button>
          <Button type="icon">
            <i className="fa fa-chevron-right" aria-hidden="true"  onClick={ this.nextSlide }></i>
          </Button>
          </div>
        
        </Article>
        
        <div className="button-container">
          <Button type="primary" location={slide.url}>Voir sur github</Button>
        </div>
        
        
        <Article title="Description" class="article--space-bottom">
        
          <p className="article__text">{slide.description}</p>
        
        </Article>
      </div>  
    );
  }
}



class ProjectsContent extends Component {
  render() {
    return (
      <main className="content">
        <ScrollToTopOnMount/>
            <section className="content-block">
                
             
                
                <ProjectsSlider/>


                
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
                  <div className="grid__column--12 grid__column--4--md type-center--md">
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
        if(window.innerWidth < 768 && this.state.location !== '/'){
          if(window.scrollY < window.innerHeight) {
            this.setParallaxProps();
          }
        }
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
