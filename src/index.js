$(function(){
  console.log('DOM IS READY');
  $.ajax({
    url: "src/bball.json"
  }).done(function(content) {
    console.log('DONE!', content);
    $( this ).addClass( "done" );
    for ( player in content ) {
      console.log('player loading');
      var newPlayer = $("<li></li>");
      newPlayer.html(player + ':' + content[player].Position + "<br> PPG: " + content[player].PPG + "<br> RPG: " + content[player].RPG + "<br> APG: " + content[player].APG + "<br> Years Active: " + content[player].Years.join(', '))
      $('#playerlist').append(newPlayer);
    }

  });

})
