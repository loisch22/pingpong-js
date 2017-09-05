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
  $('#add').click(function(event) {
    event.preventDefault();
    alert("adding");
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var goal = num1 + num2;
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#sub').click(function(event) {
    event.preventDefault();
    alert("subtracting");
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var goal = num1 - num2;
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#multiply').click(function(event) {
    event.preventDefault();
    alert("multiplying");
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var goal = num1 * num2;
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#divide').click(function(event) {
    event.preventDefault();
    alert("dividing");
    var num1 = parseInt($('#num1').val());
    var num2 = parseInt($('#num2').val());
    var goal = num1 / num2;
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
  $('#clear').click(function(event) {
    event.preventDefault();
    alert("clearing");
    $('#solution').empty();
  });
});

$(document).ready(function() {
  $('#signup').submit(function(event) {
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});
