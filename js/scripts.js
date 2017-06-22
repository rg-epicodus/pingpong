// Business Logic
var ball = [];
var ping = "Ping!";
var pong = "Pong!";
var both = "Ping Pong!";
var miss = "Miss!!";
var pingPong = function(volley) {
  if (volley % 3 === 0) {
    return ping;
  } else if (volley % 5 === 0) {
    return pong;
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
    $("#result").text(result);
  });
});
