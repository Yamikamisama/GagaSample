$(document).ready(function() {

  $("#owl-demo").owlCarousel({

      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      responsiveClass:true,
      responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

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
    $("#pictures_link").click(function(){
    $("#center_view").children().hide();
    $("#owl-demo").fadeIn(1000);
  });
});
