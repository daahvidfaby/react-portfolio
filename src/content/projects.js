import movieTracker from '../assets/img/projects/movie-tracker.jpg';
import reactMail from '../assets/img/projects/react-mail.jpg';
import reactWatch from '../assets/img/projects/react-watch.jpg';
import paperPlane from '../assets/img/projects/paper-plane.jpg';


export default [
  {
    image: reactMail,
    title : 'React Gmail',
    url : 'https://react-mail.netlify.com/',
    buttonText: 'Voir la démo',
    description: "Projet libre à réaliser obligatoirement avec le framework ReactJS. C'est un client gmail utilisant l'API de google en Javascript pour obtenir les différentes informations de l'utilisateur se connectant ainsi que ses e-mails. Aucune donnée n'est sauvegardée donc n'ayez pas peur de donner l'autorisation à accéder à votre compte pour la démo."
  },
  {
    image: movieTracker,
    title : 'Movie Tracker',
    url : '/movie-tracker',
    buttonText: 'Voir la démo',
    description: "Lors d'un mini-projet de fin de module j'ai du réaliser une web app imitant le comportement d'un site d'informations sur des films ou des séries (type IMDB, Allociné, ...), au choix. Il a fallu s'occuper du design et de tout le développement. J'ai décidé de récupérer les informations au format JSON depuis la base de données OMDB, qui délivre une API. J'ai utilisé le framework CSS : Materialize css. Le tout devait être en version mobile, je vous conseille donc de réduire la taille de l'écran."
  },
  {
    image: reactWatch,
    title : 'React Watch',
    url : '/react-watch',
    description: 'Premier projet réalisé avec ReactJS. Seules les aiguilles de la montre se mettent à jour grâce à la fonction setState(), principe de base du framework. La montre et les aiguilles ont été crées en SVG, permettant un rendu optimal quelque soit la taille à afficher.',
    buttonText: 'Voir la démo'
  },
  {
    image: paperPlane,
    title : 'Paper Plane',
    url : '/paper-plane',
    description: 'Paper Plane est un jeu développé en HTML5 et Javascript. Réalisé à l\'aide de la librairie PhaserJS, on y retrouve un personnage qui avance le long d\'un décor généré aléatoirement. Il faut avancer le plus loin possible, tout en récupérant des bonus pour augmenter le score.',
    buttonText: 'Voir la démo'
  },
];