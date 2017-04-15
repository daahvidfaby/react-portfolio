$(document).ready(function(){
  
  // On détecte les paramètres de type GET dans la barre d'adresse
    $.urlParam = function(name){
          var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
          if (results==null){
            return null;
          }
          else{
            return results[1] || 0;
          }
        }
    
    // On récupère le paramètre name, lié au nom de la saga sur laquelle on a cliqué

        var name = $.urlParam('name');
  
    // Si le paramètre name est bien rempli et n'est pas nul
        
        if($.urlParam('name') !== null){
          
    // On se connecte au fichier json du dossier data, dans lequel sont enregistrés les différentes titres de film liés à une saga
        
        $.getJSON( "data/main.json", 
          function( data ) {
          
    // On récupère le nombre de films de la saga, pour pouvoir les parcourir avec une boucle for
            var episodeLength = data[name].episodeName.length;
            for(i=0; i< episodeLength; i++){
              
    // Pour chaque film, on se connecte au site omdbapi pour récupérer les données de ce film au format JSON
    // La recherche s'effectue avec le nom exact du film, nous avons ajouté le paramètre type=movie pour être sûr de bien arriver sur les informations d'un film
    // Et non d'un jeu vidéo par exemple
              
              $.getJSON( "http://www.omdbapi.com/?type=movie&t="+data[name].episodeName[i],
                function( json ) {
                
    // On extrait les données dont on a besoin dans différentes variables
                
                  var year = json.Year;
                  var country = json.Country;
                
    // Les serveurs imdb refusant la connexion depuis un autre serveur, les images des différents films ont été téléchargées, et portent comme nom l'id du film sur IMDB
    // Il est donc facile de récupérer leur chemin
                  var poster = 'img/'+json.imdbID+'.jpg';
                  var title = json.Title;
                  var plot = json.Plot;
                  var actors = json.Actors
                  var rating = json.imdbRating;
                  var id = json. imdbID;
                
    // Ensuite on affiche le tout avec la mise en forme qu'il faut en HTML et CSS, en fonction des variables enregistrées                 
                  
                  $('<div class="card">'+
                      '<div class="card-image waves-effect waves-block waves-light">'+
                        '<img class="activator" src="'+poster+'">'+
                      '</div>'+
                      '<div class="card-content">'+
                        '<div class="card-title activator grey-text text-darken-4">'+title+
                          '<div class="right"><i class="fa fa-angle-double-up"></i></div>'+
                        '</div>'+
                      '</div>'+
                      '<div class="card-reveal">'+
                        '<div class="card-title grey-text text-darken-4">'+title+' ('+year+')'+
                          '<div class="reveal-button"><i class="material-icons">close</i></div>'+
                        '</div>'+
                          '<h5></h5>'+
                          '<p>Country : '+country+'</p>'+
                          '<p>Actors : '+actors+'</p>'+
                          '<p class="flow-text">'+plot+'</p>'+
                          '<p class="right ratingPosition"><i class="fa fa-star fa-4x orange-text ratingPosition__star"></i><span class="ratingPosition__number white-text">'+rating+'</span></p>'+
                        '<div class="socialShare">'+
    // On affiche un bouton twitter qui permet de partager le nom du film et son lien menant à la fiche du film sur IMDB
                          '<a href="https://twitter.com/share" class="twitter-share-button"{count} data-url="http://www.imdb.com/title/'+id+'/" data-text="'+title+'">Tweet</a><script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?\'http\':\'https\';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\'://platform.twitter.com/widgets.js\';fjs.parentNode.insertBefore(js,fjs);}}(document, \'script\', \'twitter-wjs\');</script>'+
                        '</div>'+
                      '</div>'+
      // Tout le code est envoyé dans la section principale de la page index
                    '</div>').appendTo('.js-mainSection');
              });
            }
        });
      }
  
      // Sinon si aucun film n'est sélectionné (donc le paramètre name inexistant)
      // On affiche le bouton de sélection de films
  else{
      $(  '<div class="card">'+
            '<div class="section row">'+
              '<div class="center-align">No Film to display</div>'+
                '<div class="section">'+
                  '<a class="dropdown-button btn col s10 push-s1 orange darken-1" href="#" data-activates="dropdown1">Select one</a>'+
                  '<ul id="dropdown1" class="dropdown-content">'+
                    '<li><a href="index.html?name=batman" class="orange-text">Batman</a></li>'+
                    '<li class="divider"></li>'+
                    '<li><a href="index.html?name=starwars" class="orange-text">Star Wars</a></li>'+
                    '<li class="divider"></li>'+
                    '<li><a href="index.html?name=harrypotter" class="orange-text">Harry Potter</a></li>'+
                  '</ul>'+
                '</div>'+
              '</div>'+
            '</div>').appendTo('.js-mainSection');
    
  }
        

});

