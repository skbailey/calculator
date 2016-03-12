describe('expressionValidator', function(){
  describe('failed validations', function(){
    it("fails if expression is not a string", function(){
      var expression = /peas/;
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression is not a string");
    });

    it("fails if the expression is an empty string", function(){
      var expression = "";
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression is an empty string");
    });

    it("fails if the expression contains non-digit, non-operation characters", function(){
      var expression = "gq";
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression contains invalid characters");
    });

    it("fails if the expression starts with an operation", function () {
      // This is valid math, the assumption for this calculator is that operations are binary
      var expression = "+ 3 - 2";
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression starts with an operation");
    });

    it("fails if the expression ends with an operation", function () {
      var expression = "3 - 2 *";
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression ends with an operation");
    });

    it("fails if the expression contains two operands without an operation between them", function(){
      var expression = "3 2";
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression contains operands without an operation");
    });

    it("fails if the expression contains two operations without an operand between them", function(){
      var expression = "3 + - 4";
      expect(function() {
        expressionValidator(expression)
      }).toThrowError("Expression contains operations without operands");
    });
  });

  describe('successful validation', function(){
    it("passes when the input is a correctly formatted arithmetic expression", function(){
      var expression = "3 + 9 - 4";
      expect(function() {
        expressionValidator(expression)
      }).not.toThrowError('Expression is not valid');
    });
  });
});