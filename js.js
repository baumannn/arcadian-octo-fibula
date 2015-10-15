
$( document ).ready(function() {


    $('#textarea1').keyup(function(event) {
        var code = (event.keyCode ? event.keyCode : event.which);
        if(code == 13){
            writeTweet(1234567, 'YOU', $('#textarea1').val());
            $('#textarea1').val('');
        }
    });

    function writeTweet (id, user, text) {



        //alert('si');
        $('#tweetCnt').prepend( '<div class="card white darken-1"><div class="card-content white-text"><table><tbody><tr><td><img id="image" width="80px" height="80px" src="http://www.vacul.org/extension/site/design/site//images/anonymous-user.png"></td><td style="width:100%;"><span class="card-title black-text" >' + user + '</span><p class="black-text">' + text + '</p><img src="tweet.png" ></td></tr></tbody></table></div></div>');

     // $('#tweetCnt').prepend('<div class="row"><div class="col s12 m6 offset-m3"><div class="card blue darken-1"><div class="card-content white-text"><span class="card-title">'+
    //        user +'</span><p>' + text + '</p></div> <div class="card-action"><a href="#">Reply</a><a href="#">Retweet</a></div></div></div></div>');
    }

    var interval = setInterval(writeTweet, 30000, 56789876, 'adadawd', 'AOINADOINF');

    var request = new XMLHttpRequest(), self = this;
   request.open('GET', '/tweets.php', true);
   request.onload = function() {

     // If everything is cool...
     if (request.status >= 200 && request.status < 400){

       JSON.parse(request.responseText).map(function (tweet) {writeTweet(tweet.id, tweet.user, tweet.text);});

     } else {



     }
   };

   // Fire!
   request.send();

});
