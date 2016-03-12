"use strict";

var expressionValidator = function(expression) {
  var expressionContainsInvalidCharsRegex = /[^0-9+-/*\s.]/g;
  var expressionStartsWithOperation = /^[+-/*]/g;
  var expressionEndsWithOperation = /[+-/*]$/g;
  var expressionContainsOperandsWithoutOperation = /-?\d+(\.\d+)?[^+-/*]-?\d+(\.\d+)?/g;
  var expressionContainsOperationsWithoutOperand = /[+-/*]\s*([+/*]|-(?!\d+))/;

  if (typeof expression !== "string") {
    throw new Error("Expression is not a string");
  }

  if (expression === "") {
    throw new Error("Expression is an empty string");
  }

  if (expressionContainsInvalidCharsRegex.test(expression)) {
    throw new Error("Expression contains invalid characters");
  }

  if (expressionStartsWithOperation.test(expression)) {
    throw new Error("Expression starts with an operation");
  }

  if (expressionEndsWithOperation.test(expression)) {
    throw new Error("Expression ends with an operation");
  }

  if (expressionContainsOperandsWithoutOperation.test(expression)) {
    console.log(expression)
    throw new Error("Expression contains operands without an operation");
  }

  if (expressionContainsOperationsWithoutOperand.test(expression)) {
    throw new Error("Expression contains operations without operands");
  }
};