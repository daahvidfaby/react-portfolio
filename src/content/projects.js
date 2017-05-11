import movieTracker from '../assets/img/projects/movie-tracker.jpg';
import reactMail from '../assets/img/projects/react-mail.jpg';
import reactWatch from '../assets/img/projects/react-watch.jpg';
import paperPlane from '../assets/img/projects/paper-plane.jpg';


export default [
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
    image: reactWatch,
    title : 'React Watch',
    url : '/react-watch',
    description: 'Premier projet réalisé avec ReactJS. Seules les aiguilles de la montre se mettent à jour grâce à la fonction setState(), principe de base du framework.',
    buttonText: 'Voir la démo'
  },
  {
    image: paperPlane,
    title : 'Paper Plane',
    url : '/paper-plane',
    description: 'Lorem ipsum lqskdjqsljd qslkd qslkdj qslkj dqslkj qdskl',
    buttonText: 'Voir la démo'
  },
];