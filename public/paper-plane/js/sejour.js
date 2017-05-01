$(document).ready(function(){
        
    $.getJSON( 'json/sejour.json', function(data) {
  
        $.urlParam = function(name){
          var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
          if (results==null){
            return null;
          }
          else{
            return results[1] || 0;
          }
        }

        var numSejour = $.urlParam('num-sejour');
        if (numSejour == null){
          alert("Ce sÃ©jour n'existe pas");
          history.back();
        }
        else{
          $('#nom-ville').append(data.sejour[numSejour].nomVille);
          $('#nom-ville-hidden').attr('value', data.sejour[numSejour].nomVille);
          $('#description-ville').append(data.sejour[numSejour].descriptionVille);
          $('#nom-sejour').append(data.sejour[numSejour].nomSejour);
          $('#description-sejour').append(data.sejour[numSejour].descriptionSejour);
          $('#slider-sejour').append('<img src="'+data.sejour[numSejour].slider+'" alt="Image '+data.sejour[numSejour].nomSejour+'">');
          $('#image-ville').append('<img src="'+data.sejour[numSejour].imageVille+'" alt="">');
          $('#note-utilisateur').append(data.sejour[numSejour].noteUtilisateurs);
          $('#prix-sejour').append(data.sejour[numSejour].prix+' €');
        }   
    });

});