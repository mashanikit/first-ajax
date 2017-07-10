document.addEventListener("DOMContentLoaded", function() {


// DECLARE VARIABLES
var button = document.getElementById('req_root');

// REGISTER EVENT HANDLERS
button.addEventListener( 'click', function() {
  console.log('requested root');

  $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/',
    method: 'GET',
    dataType: 'HTML',
    });
  });
});
