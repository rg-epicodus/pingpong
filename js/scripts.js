// Business Logic

var pingPong = function(volley) {
  return false;
};













// User Interface Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var volley = parseInt($("input#userInput").val());
    var result = pingPong(volley);
    $("#result").text(result);
  });
});
