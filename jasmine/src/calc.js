"use strict";
// PEMDAS - Parentheses Exponents Multiplication Division Addition Subtraction

var OPERATIONS = {};
var ORDERED_OPERATIONS = ["*", "/", "+", "-"];

OPERATIONS[Symbol.for("+")] = function(a, b) {
  return a + b;
};

OPERATIONS[Symbol.for("-")] = function(a, b) {
  return a - b;
};

OPERATIONS[Symbol.for("*")] = function(a, b) {
  return a * b;
};

OPERATIONS[Symbol.for("/")] = function(a, b) {
  return a / b;
};


var calculate = function (expression) {
  var operationFn;

  for (var operation of ORDERED_OPERATIONS) {
    expression = expression.replace(new RegExp("(\\d)\\s*\\" + operation + "\\s*(\\d)", "g"), function (match, operand1, operand2) {
      operationFn = OPERATIONS[Symbol.for(operation)];
      return operationFn(+operand1, +operand2);
    });
  }

  return +expression;
};

var arithmeticExpression = "9 * 6 + 1 / 4"
var result = calculate(arithmeticExpression);
console.log("The result of the calculation should be", 9 * 6 + 1 / 4, result);
