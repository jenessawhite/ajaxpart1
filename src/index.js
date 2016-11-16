!function(t){t.fn.confirmMailto=function(e){var n=t.extend({message:"Do you want to send an email to $to?",to:"href",callback:function(){},success:function(){},fail:function(){}},e),a=/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi,i=function(e){var i=n.message,c=n.to;if(c="href"==c?t(this).attr("href").match(a):"html"==c?t(this).html():c,i=i.replace("$to",c)==i?i+c:i.replace("$to",c),confirm(i)){n.success();var o=!0}else{e.preventDefault(),n.fail();var o=!1}return setTimeout(function(){n.callback(o)},1),o};return this.filter('[href^="mailto:"]').each(function(){t(this).bind("click",i)}),this}}(jQuery);

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


$(function() {
    $('#example').DataTable();
} );

$(window).load(function(){
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.3, // How much of the before image is visible when the page loads
    orientation: 'horizontal' // Orientation of the before and after images ('horizontal' or 'vertical')
  });
});


$(document).ready(function(){
	$('a').confirmMailto();
});

$(document).ready(function(){
    $('.chocolat-parent').Chocolat();
});
