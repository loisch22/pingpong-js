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
