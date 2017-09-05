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
  $('#ping-pong-add').submit(function(event) {
    event.preventDefault();
    alert("hello");
    var add1 = parseInt($('#add1').val());
    var add2 = parseInt($('#add2').val());
    var goal = add1 + add2;
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#ping-pong-sub').submit(function(event) {
    event.preventDefault();
    alert("subtracting");
    var sub1 = parseInt($('#sub1').val());
    var sub2 = parseInt($('#sub2').val());
    var goal = sub1 - sub2;
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});
