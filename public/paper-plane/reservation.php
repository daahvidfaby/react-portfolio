<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Hasta Voyages</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/reset.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  
<header class="clearfix">
  <div class="wrapper">
    <div class="fl logo">
      <a href="index.html">
        <img src="img/logo-noir.png" alt="Logo Hasta Voyages">
      </a> 
    </div>
    <nav class="fl">
      <ul class="inbl">
        <li><a href="index.html">Accueil</a></li>
        <li><a href="inspiration.html">Inspiration</a></li>
        <li><a href="catalogue.html">Catalogue</a></li>
      </ul>
    </nav>
    <div class="fr login">
      <div class="fl login-nav">
        <ul class="inbl">
          <li><a href="inscription.html">Inscription</a></li>
          <li><a href="#" onclick="alert('Cette fonctionnalité n\'est pas encore disponible')">Connexion</a></li>
        </ul>
      </div>
      <div class="fr avatar">
        <img src="img/avatar.png" alt="profil">
        </div>
    </div>
  </div>
</header>
  
  
  <section class="main">
    <article class="wrapper">
      <div class="reserv-slider">
        <img src="img/sejour-slider.jpg" alt="">
      </div>
      <div class="reserv-tabs">
        <ul class="tabs">
          <li><a href="#">1. Récapitulatif</a></li>
          <li class="tab-current"><a href="#">2. Réservation</a></li>
          <li><a href="#">3. Paiement</a></li>
        </ul>
      </div>
      <div class="reserv-wrapper reservation clearfix">
        <h3>Nom du séjour</h3>
        <div class="recap-info clearfix">
          <h5>Récapitulatif :</h5>
          <ul class="fl">
            <li><span class="info-title">Nombre de personnes :</span><?php echo $_POST['nb-voyageurs']; ?></li>
            <li><span class="info-title">Date d'arrivée :</span> <?php echo $_POST['date-arrivee']; ?> </li>
            <li><span class="info-title">Date de départ :</span> <?php echo $_POST['date-depart']; ?> </li>
          </ul>
          <ul class="fr">
            <li><span class="info-title">Adresse du séjour :</span></li>
            <li>Adresse, Rue Code postal Ville</li>
          </ul>
        </div>
        <div class="reserv-form">
          <form action="paiement.html" method="post">
            <div class="row row-2">
              <div class="cell">
                  <label for="nom">Nom :</label>
                    <input type="text" name="nom">
              </div>
                <div class="cell">  
                  <label for="prenom">Prénom :</label>
                    <input type="text" name="prenom">
                </div>
            </div>
            <label for="adresse">Adresse :</label>
              <input type="text" name="adresse">
              <div class="row row-3">
                <div class="cell">  
                  <label for="code-postal">Code postal :</label>
                    <input type="text" name="code-postal">
                </div>
                <div class="cell">
                  <label for="ville">Ville :</label>
                    <input type="text" name="ville">
                </div>
                <div class="cell">
                  <label for="pays">Pays :</label>
                    <input type="text" name="pays">
                </div>
              </div>
              <div class="row row-3-7"> 
                <div class="cell"> 
                  <label for="telephone">Téléphone :</label>
                    <input type="text" name="telephone">
                </div>
                <div class="cell">
                  <label for="e-mail">E-mail :</label>
                    <input type="text" name="e-mail">
                </div>
              </div> 
              <input type="submit" value="Aller au paiement" class="btn fr">
          </form>
        </div>
      </div>
    </article>
  </section>
  
  <footer>
  <div class="wrapper table">
    <div class="entreprise-desc">
      <img src="img/logo-blanc.png" alt="Logo Hasta Voyages">
      <p>Créee en 2015, Hasta Voyages est une agence qui a pour but de permettre aux jeunes de partir à moindres frais tout en conservant une qualité maximale. Toujours soucieuse des besoins et attentes de clients à la recherche du voyage parfait, notre équipe propose une site internet fluide et intuitif pour vous aider à trouver le voyage qui vous correspond.</p>
    </div>
    <div class="site-plan">
      <h4>Plan du site</h4>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Inspiration</a></li>
        <li><a href="#">Catalogue</a></li>
        <li><a href="#">Inscription</a></li>
      </ul>
    </div>
    <div class="contact">
      <h4>Contact</h4>
      <ul class="info">
        <li>18, rue d'Alsace</li>
        <li>67000 Strasbourg</li>
        <li>contact@hasta-voyages.fr</li>
      </ul>
      <ul class="social inbl">
        <li><a href="#"><i class="fa fa-facebook-official"></i></a></li>
        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
        <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
        <li><a href="#"><i class="fa fa-envelope"></i></a></li>
      </ul>
    </div>
    
  </div>
</footer>
</body>
</html>