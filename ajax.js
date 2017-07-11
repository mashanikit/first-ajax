document.addEventListener("DOMContentLoaded", function() {


// DECLARE VARIABLES
var button = document.getElementById('req_root');
var pingPong = document.getElementById('ping_pong');

// REGISTER EVENT HANDLERS
button.addEventListener( 'click', function() {
  console.log('requested root');

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'text',
    }).done(function (responseData) {
  //Here in the callback, we have a variable called responseData
  //that holds the content of the server's response,
  //in this case, a simple string
});
  });

  pingPong.addEventListener ('click', function() {

    var pingSection = document.getElementById('step3456');

    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/ping',
      method: 'GET',
      dataType: 'text',
    }).done(function (responseData){
      console.log( responseData );
      pingSection.append( responseData );
    }).fail(function () {
  //In this callback, everyone panic! Our request has failed!
  //Quickly, apologize to the user and try to fix it!
      var error = "So sorry, I'll try harder next time";
      console.log(error);
      pingSection.append(error);
    }).always(function() {
      var message = "Hey, the request is finished!";
      console.log(message);
    });
  });

  var countButton = document.getElementById('count');
  countButton.addEventListener('click', function(){

    var countSection = document.getElementById('step7');

    $.ajax({
      url:'http://first-ajax-api.herokuapp.com/count',
      method:'GET',
      dataType:'text',
    }).done(function(responseData){
      console.log(responseData);
      countSection.append(responseData);
    });

  });
});
