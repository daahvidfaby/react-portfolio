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
          <li class="tab-current"><a href="#">1. Récapitulatif</a></li>
          <li><a href="#">2. Réservation</a></li>
          <li><a href="#">3. Paiement</a></li>
        </ul>
      </div>
      <div class="reserv-wrapper recapitulation clearfix">
        <h3>Nom du séjour</h3>
        <div class="recap-info clearfix">
          <ul class="fl">
            <li><span class="info-title">Nombre de personnes :</span>
                <?php echo $_POST['nb-voyageurs']; ?>
            </li>
            <li><span class="info-title">Date d'arrivée :</span>
                <?php echo $_POST['date-arrivee']; ?>  
            </li>
            <li><span class="info-title">Date de départ :</span>
                <?php echo $_POST['date-depart']; ?>   
            </li>
          </ul>
          <ul class="fr">
            <li><span class="info-title">Adresse du séjour :</span></li>
            <li><?php echo $_POST['nom-ville'].', Espagne'; ?></li>
          </ul>
        </div>
        <div class="recap-valid clearfix">
          <form method="post" action="reservation.php">
            <?php echo '<input type="hidden" value="'.$_POST['nb-voyageurs'].'" name="nb-voyageurs">'; ?> 
            <?php echo '<input type="hidden" value="'.$_POST['date-arrivee'].'" name="date-arrivee">'; ?> 
            <?php echo '<input type="hidden" value="'.$_POST['date-depart'].'" name="date-depart">'; ?> 
            
            <input type="submit" class="btn fr" value="Aller à la réservation">
          </form>
        </div>
        
        <div class="recap-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47221.68230737847!2d3.2501824400062125!3d42.29228691466892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12ba6f16c8a4e2e1%3A0x400fae021a46710!2zQ2FkYXF1w6lzLCBHw6lyb25lLCBFc3BhZ25l!5e0!3m2!1sfr!2sfr!4v1446135630467" frameborder="0" style="border:0" allowfullscreen></iframe>
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