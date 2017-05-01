$(document).ready(function(){
  var button = $('#sidebar a');
  var menu = $('#navigation');
  var toggle = false;
  
  
  button.click(function(){
    if(toggle == false){
      toggle = false;
      menu.css('transform', 'translate(0)');
      toggle = true;

    }
    else{
      menu.css('transform', 'translate(-81vw)');
      toggle = false;

    }
  });

});