// Business Logic
var ball = [];
var ping = "Ping!";
var pong = "Pong!";
var both = "Ping Pong!";
var miss = "Miss!!";
var pingPong = function(volley) {
  if ((volley % 3 === 0) && (volley % 15 !== 0)) {
    return ping;
  } else if ((volley % 5 === 0) && (volley % 15 !== 0)) {
    return pong;
  } else if ((volley % 3 === 0) && (volley % 5 === 0)) {
    return both;
  } else {
    return miss;
  }
};









// User Interface Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();
    var volley = parseInt($("input#userInput").val());
    var result = pingPong(volley);
    $("#result").append("<p>" + result + "</p>");
  });
});
