$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
  });

  $("#bio_link").click(function(){
    $("#center_view").children().hide();
    $("#bio").fadeIn(1000);
  });

  $("#music_link").click(function(){
    $("#center_view").children().hide();
    $("#music").fadeIn(1000);
  });

  $("#video_link").click(function(){
    $("#center_view").children().hide();
    $("#video").fadeIn(1000);
  });

  $(".pictures_link").click(function(){
    $("#center_view").children().hide();
    $("#owl-demo").fadeIn(1000);
  });

  $(function() {
      var pull    = $('#pull');
        menu    = $('nav ul');
        menuHeight  = menu.height();

      $(pull).on('click', function(e) {
        e.preventDefault();
        menu.slideToggle();
      });

      $(window).resize(function(){
            var w = $(window).width();
            if(w > 320 && menu.is(':hidden')) {
              menu.removeAttr('style');
            }
        });
    });
});
