(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//This function was not used on an object
// function pingPong(goal) {
//   var output = [];
//   for (var i = 1; i <= goal; i++) {
//     if (i % 15 === 0) {
//       output.push("ping-pong");
//     } else if (i % 3 === 0) {
//       output.push("ping");
//     } else if (i % 5 === 0) {
//       output.push("pong");
//     } else {
//       output.push(i);
//     }
//   }
//   return output;
// }

//For adding skin/color to calculator & incorporating pingPong() into a calculator

//create calculator object
function Calculator(skinName) {
  this.skin = skinName;
}

//create a method using 'prototype' - define it as a function by assigning = it as a function()
//now pingPong() needs to be used on a calculator object or an instance of a calculator
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else {
      output.push(i);
    }
  }
  return output;
};

//export the bluepint for our Calculator object by turning it into a Node module
exports.calculatorModule = Calculator;
//module = a group of JS functions and data that comprise some sort of functionality
//Calculator function and pingPong method have become part of this module

},{}],2:[function(require,module,exports){
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

},{"./../js/pingpong.js":1}]},{},[2]);
