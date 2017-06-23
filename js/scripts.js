// Business Logic
var ball = [];
var volley = [];

var service = (function() {

  for (var i = 1; i <= n; i++) {
    ball.push(i);
  }

  volley = ball.slice();
    for (var i = 0; i <= volley.length; i++) {
      if (volley [i] % 3 === 0) {
        volley [i] = "Ping!"
      } else if (volley [i] % 5 === 0) {
        volley [i] = "Pong!"
      }
    }
  $("#result").show();

  volley.forEach(function(volley) {
    $("#result h1").append("<p>" + volley + "</p>");
  })

})


// User Interface Logic
$(document).ready(function (){
  $("#gameForm form").submit(function (event) {
    event.preventDefault();
    n = $("input#number").val();
  service();
  })
});
