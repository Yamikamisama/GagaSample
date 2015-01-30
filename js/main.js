$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });
  $("#bio_link").hover(function(){
    $("#center_carousel").children().hide();
    $("#bio").fadeIn(2000);
  });
  $("#music_link").hover(function(){
    $("#center_carousel").children().hide();
    $("#music").fadeIn(2000);
  });
});
