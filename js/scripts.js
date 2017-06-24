// Business Logic
var ball = []; // var initialArray = []; for boring old descriptive names
var volley = []; // var userInput = []; for boring old descriptive names
// I wanted to still be creative with the var names, I promise to use best practices from now on 8)
var service = (function() {

  for (var i = 1; i <= n; i++) {
    ball.push(i);
  }

  volley = ball.slice();
    for (var i = 0; i <= volley.length; i++) {
      if ((volley [i] % 3 === 0) && (volley [i] % 15 !== 0)) {  // first behavior spec
        volley [i] = "Ping!"
      } else if ((volley [i] % 5 === 0) && (volley [i] % 15 !== 0)) {  // second behavior spec
        volley [i] = "Pong!"
      } else if (volley [i] % 15 === 0) { // final behavior spec
        volley [i] = "PingPong!"
      }
    }
  $("#result").show();   

  volley.forEach(function(volley) {  // pushes the data to HTML for und user viewing
    $("#result ul").append("<li>" + volley + "</li>");
  })

})


// User Interface Logic
$(document).ready(function (){
  $("#gameForm form").submit(function (event) { //when you click submit it pulls the data from input and passes it into program
    event.preventDefault();
    n = $("input#number").val();
  service();
  })
});
