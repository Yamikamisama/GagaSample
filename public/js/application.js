$(document).ready(function() {


    //carousel

    var change_img_time = 4000,
        transition_speed = 400;

    var listItems = $("#items").children('li'),
        activeImageItems = $('#activeImages').children('li'),
        listLen = listItems.length,
        current,
        changeTimeout;

    function moveTo(newIndex) {

        var i = newIndex;

        if (newIndex == 'prev') {
            i = (current > 0) ? (current - 1) : (listLen - 1);
        }

        if (newIndex == 'next') {
            i = (current < listLen - 1) ? (current + 1) : 0;
        }

        activeImageItems.removeClass('active')
            .eq(i).addClass('active');

        listItems.fadeOut(transition_speed)
            .eq(i).fadeIn(transition_speed);

        current = i;

        //resets time interval if user clicks on slider activeImage; then begin automated slider
        clearTimeout(changeTimeout);
        changeTimeout = setTimeout(function() {
            moveTo('next');
        }, change_img_time);
    };

    // Event handlers
    $("#activeImages li").click(function() {
        var i = $('#activeImages li').index(this);
        moveTo(i);
    });

    $("#prev").click(function() {
        moveTo('prev');
    });

    $("#next").click(function() {
        moveTo('next');
    });

    //initialize slider on load
    moveTo('next');







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