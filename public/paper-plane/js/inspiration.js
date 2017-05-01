$(document).ready(function(){

var actualDataDesc;
var allInspirDesc = $('.cell p')   
    
$('.cell > a').click(function(e){ 
    e.preventDefault(e);
    var dataDesc = $(this).attr('data-name');
    var inspirDesc = $('p[data-name="'+dataDesc+'"]');
    if (actualDataDesc!=dataDesc){
      actualDataDesc = dataDesc;
      allInspirDesc.slideUp(900);
      inspirDesc.slideToggle(700);
    }
    else{
      inspirDesc.slideToggle();
    }
});



});