$(document).ready(function() {

    // var  xmlhttp = new XMLHttpRequest();
    // var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
    // xmlhttp.open('GET',url,true);
    // xmlhttp.setRequestHeader('Authorization','OAuth oauth_consumer_key="HdFdA3C3pzTBzbHvPMPw", oauth_nonce="4148fa6e3dca3c3d22a8315dfb4ea5bb", oauth_signature="uDZP2scUz6FUKwFie4FtCtJfdNE%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp= "1359955650", oauth_token, "1127121421-aPHZHQ5BCUoqfHER2UYhQYUEm0zPEMr9xJYizXl", oauth_version="1.0"');
    // xmlhttp.send();


//     function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     xhr.open(method, url, true);
//     xhr.setRequestHeader('Access-Control-Allow-Origin', "http://localhost:9292");
//     xhr.withCredentials = true;
//     xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="HdFdA3C3pzTBzbHvPMPw", oauth_nonce="4148fa6e3dca3c3d22a8315dfb4ea5bb", oauth_signature="uDZP2scUz6FUKwFie4FtCtJfdNE%3D", oauth_signature_method="HMAC-SHA1", oauth_timestamp= "1359955650", oauth_token, "1127121421-aPHZHQ5BCUoqfHER2UYhQYUEm0zPEMr9xJYizXl", oauth_version="1.0"');
//     xhr.send()
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match('<title>(.*)?</title>')[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // setting the URL for twitter
//   var url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';

//   var xhr = createCORSRequest('GET', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert('Response from CORS request to ' + url + ': ' + title);
//   };

//   xhr.onerror = function() {
//     alert('Not Working, Look in console for errors');
//   };


// }

// makeCorsRequest();

  $("#carousel").owlCarousel({

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
    $("#carousel").fadeIn(1000);
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




