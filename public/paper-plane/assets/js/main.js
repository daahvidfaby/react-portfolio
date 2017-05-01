$(document).ready(function(){
  $('#ptpmu4').css('position','relative');
  $('#skin').change(function(){
    sessionStorage.setItem('paper_plane_color', $(this).val());
  });

  $.getJSON('assets/php/scoreList.php', function(data) {
    $.each(data, function(key, val){
      $('.score table').append('<tr><td>'+ key +'</td><td>'+ val.pseudo +'</td><td>'+ val.score +'</td>')
    });
  });
});
