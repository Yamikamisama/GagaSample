$(document).ready(function() {

    //////////////////
    //   Carousel   //
    //////////////////

    var listItems = $("#items").children('li'),
        activeImageItems = $('#selector').children('li'),
        listLength = listItems.length,
        current,
        changeTimeout;

    function move(newIndex) {

        var i = newIndex;

        if (newIndex == 'next') {
            i = (current < listLength - 1) ? (current + 1) : 0;
        }

        activeImageItems.removeClass('active').eq(i).addClass('active');
        listItems.fadeOut(400).eq(i).fadeIn(400);

        current = i;

        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(function() {
            move('next');
        }, 4000);
    };

    // Allow circle to be clicked
    $("#selector li").click(function() {
        var i = $('#selector li').index(this);
        move(i);
    });

    //Start Carousel
    move('next');


////////////////////
///   LEFT NAV   ///
////////////////////

    $("#bio_link").click(function() {
        $("#center_view").children().hide();
        $("#bio").fadeIn(1000);
    });

    $("#music_link").click(function() {
        $("#center_view").children().hide();
        $("#music").fadeIn(1000);
    });

    $("#video_link").click(function() {
        $("#center_view").children().hide();
        $("#video").fadeIn(1000);
    });

    $(".pictures_link").click(function() {
        $("#center_view").children().hide();
        $("#carousel").fadeIn(1000);
    });

});

////////////////////
///   CORS Try   ///
////////////////////

// var  xmlhttp = new XMLHttpRequest();
// var url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
// xmlhttp.open('GET',url,true);
// xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="HIDDEN", oauth_nonce="HIDDEN", oauth_signature="HIDDEN", oauth_signature_method="HIDDEN", oauth_timestamp= "HIDDEN", oauth_token, "HIDDEN", oauth_version="1.0"');
// xmlhttp.send();


//     function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     xhr.open(method, url, true);
//     xhr.setRequestHeader('Access-Control-Allow-Origin', "http://localhost:9292");
//     xhr.withCredentials = true;
//     xhr.setRequestHeader('Authorization','OAuth oauth_consumer_key="HIDDEN", oauth_nonce="HIDDEN", oauth_signature="HIDDEN", oauth_signature_method="HIDDEN", oauth_timestamp= "HIDDEN", oauth_token, "HIDDEN", oauth_version="1.0"');
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