//use Node to export calculatorModule from pingPong.js (backend file) to client-side (frontend file) - Calculator functions
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#ping-pong-add').submit(function() {
    // event.preventDefault();
    alert("hello");
    // var num1 = $('#num1').val();
    // var num2 = $('#num2').val();
    // var goal = num1 + num2;
    // var simpleCalculator = new Calculator("hot pink");
    // var output = simpleCalculator.pingPong(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
