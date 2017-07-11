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
    dataType: 'HTML',
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
      dataType: 'HTML',
    }).done(function (responseData){
      console.log( responseData );
      pingSection.append( responseData );

    });
  })


});
