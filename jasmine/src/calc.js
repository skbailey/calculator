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

var expressionContainsOperation = function (expression, operation) {
  return expression.indexOf(operation) !== -1;
};

var isExpressionANumber = function(expression) {
  return !isNaN(expression);
};

var calculate = function (expression) {
  var operationFn;

  expressionValidator(expression);

  for (var operation of ORDERED_OPERATIONS) {
    while (expressionContainsOperation(expression, operation) && !isExpressionANumber(expression)) {
      expression = expression.replace(new RegExp("(\\-?\\d+(?:\\.\\d+)?)\\s*\\" + operation + "\\s*(\\-?\\d+(?:\\.\\d+)?)", "g"), function (match, operand1, operand2) {
        operationFn = OPERATIONS[Symbol.for(operation)];
        return operationFn(+operand1, +operand2);
      });
    }
  }

  return +expression;
};