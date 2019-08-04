import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink
} from 'react-router-dom';
import DocumentMeta from 'react-document-meta';

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



import contactContent from './content/contact';


import './App.css';

// text content
import skillsContent from './content/skills';
import aboutContent from './content/about';
import ProjectsArray from './content/projects';

import david from './assets/img/david.jpg';
import menu__icon from './assets/img/menu-icon.svg';
import loader from './assets/img/three-dots.svg';

const baseApiUrl = 'https://aqueous-river-46122.herokuapp.com/'; 






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
    const meta = {
      title: 'David Faby | Développeur Full-stack à Strasbourg',
      description: 'Développeur Full-stack, je suis un peu touche à tout. N\'hésitez pas à faire appel à moi pour tout projet web !',
    };
    
    return (
      <main className="content">
        <DocumentMeta {...meta} />
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
                <div className="grid grid--no-padding">
                  <div className="grid__column grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Intégration" skills={skills['integration']}/>
                  </div>
                  <div className="grid__column grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Développement web" skills={skills['development']}/>
                  </div>
                  <div className="grid__column grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Automatisation" skills={skills['automating']}/>
                  </div>
                  <div className="grid__column grid__column--12 grid__column--6--md grid__column--3--lg">
                    <SkillsBlock title="Interfaces" skills={skills['interfaces']}/>
                  </div>
                </div>
              </Article>

            </section>
            <div className="button-container">
              <Link to="/contact" className="button button--primary">{about.callToAction}</Link>
            </div>

          </main>
    );
  }
}





class ProjectsContent extends Component {
  constructor() {
    super();
    this.state = {
      projects: ProjectsArray
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
        <Article title={project.title} class="article article--project /*article--color-invert*/ article--space-bottom">
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
    const meta = {
      title: 'David Faby | Développeur Front-End à Strasbourg - Mes projets',
      description: 'Découvrez une sélection de mes projets. Retrouvez-les également sur https://github.com/daahvidfaby/.',
    };
    return (
      <main className="content">
        <DocumentMeta {...meta} />
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
  constructor() {
    super();
    this.state = {
      content: contactContent,
      dialogContent: '',
      dialogDisplay: false,
      success: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDialogClose = this.handleDialogClose.bind(this);
  }
  handleChange(e) {
    switch (e.target.name) {
      case 'firstname':
        this.setState({firstname: e.target.value});
        break;
      case 'lastname':
        this.setState({lastname: e.target.value});
        break;
      case 'email':
        this.setState({email: e.target.value});
        break;
      case 'message':
        this.setState({message: e.target.value});
        break;
      default:
        return false;
    }
  }
  handleSubmit() {

    this.setState(() => {
      return {loading : true}
    });

    const payload =  {
      'firstname': this.state.firstname,
      'lastname': this.state.lastname,
      'message': this.state.message,
      'email': this.state.email 
    };

    fetch(baseApiUrl + 'mail',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    }).then((result) => {
      return result.json();
    }).then((json) => {
      this.setState({
        success: json.success,
        dialogDisplay: true,
        dialogContent: json.message,
        loading: false,
     });
    });
  }
  handleDialogClose() {
    this.setState(() => {
      return { dialogDisplay: false };
    });
  }
  render() {
    const meta = {
      title: 'David Faby | Développeur Front-End à Strasbourg - Me contacter',
      description: 'Contactez-moi pour toute question ou tout projet web que vous souhaitez réaliser, je me ferais un plaisir de vous répondre.',
    };

    let buttonContent = "C'est parti !";

    if(this.state.loading === true) {
      buttonContent = (<img src={loader} />);
    }
    
    return (
      <main className="content">
        <DocumentMeta {...meta} />
        <ScrollToTopOnMount/>
            <section className="content-block">
                <Dialog success={this.state.success} display={this.state.dialogDisplay} handleClose={this.handleDialogClose}>{this.state.dialogContent}</Dialog>;
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
                  <div className="grid__column grid__column--12 grid__column--4--md  type-center--md">
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
                  <div className="grid__column grid__column--12 grid__column--4--md type-center--md">
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
                          <Field type="text" name="firstname" title="Nom" onChange={this.handleChange}/>
                          <Field type="text" name="lastname" title="Prénom" onChange={this.handleChange}/>
                          <Field type="text" name="email" title="E-mail" onChange={this.handleChange}/>
                          <Field type="textarea" name="message" title="Message" onChange={this.handleChange}/>
                      </ Article>
                      <div className="button-container">
                        <Button type="primary" onClick={this.handleSubmit}>{buttonContent}</Button>
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
          <h1 className="intro__title intro__title--close intro__title--code">Développeur<br/> Full-stack</h1>
        </div>
        <div className="intro__pattern grid__column--12 grid__column--6--md" style={{transform : "translateY("+this.state.translateTopPanel +"px)"}}></div>
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
  handlePanel(e) {
    if(this.state.display === true) {
      const _this = this;
      if(e.currentTarget.id === 'menubutton') {
         _this.state.panel.classList.remove('js-display');
      } else {
        setTimeout(function() {
        _this.state.panel.classList.remove('js-display');
        }, 500);
      }
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
          <a href="#" className="menu__button__link " onClick={this.handlePanel} id="menubutton">
            <img className="menu__button__icon" src={menu__icon} alt="Menu" />
            <div className="menu__button__text">Menu</div>
          </a>
        </div>
        <ul className={"menu__list " + this.state.panelClassHandler}>
          <li className="menu__list__item">
            <NavLink exact to="/" className="menu__list__link" activeClassName="active" onClick={this.handlePanel}>
              <span className="menu__list__link__text">Présentation</span>
             </NavLink>
          </li>
          <li className="menu__list__item">
            <NavLink to="/projects" className="menu__list__link" activeClassName="active" onClick={this.handlePanel}>
              <span className="menu__list__link__text">Projets</span>
             </NavLink>
          </li>
          <li className="menu__list__item">
            <NavLink to="/contact" className="menu__list__link" activeClassName="active" onClick={this.handlePanel}>
              <span className="menu__list__link__text">Contact</span>
            </NavLink>
          </li>
          <li className="menu__list__item">
            <a href="/cv-davidfaby.pdf" className="menu__list__link" activeClassName="active" onClick={this.handlePanel}>
              <span className="menu__list__link__text">CV</span>
            </a>
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
              <Route path="/projects" component={PageHeader}/>
              <Route path="/contact" component={PageHeader}/>

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
