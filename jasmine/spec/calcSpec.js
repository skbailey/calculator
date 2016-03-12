"use strict";

describe("ORDERED_OPERATIONS", function () {
  it("follows the PEMDAS rule for simple arithmetic", function(){
    expect(ORDERED_OPERATIONS).toEqual(["*", "/", "+", "-"]);
  });
});

describe("OPERATIONS", function () {
  it("defines addition", function(){
    var add = OPERATIONS[Symbol.for("+")];
    expect(add(3, 5)).toEqual(8);
  });

  it("defines subtraction", function(){
    var subtract = OPERATIONS[Symbol.for("-")];
    expect(subtract(3, 5)).toEqual(-2);
  });

  it("defines division", function(){
    var divide = OPERATIONS[Symbol.for("/")];
    expect(divide(3, 5)).toEqual(0.6);
  });

  it("defines multiplication", function(){
    var multiply = OPERATIONS[Symbol.for("*")];
    expect(multiply(3, 5)).toEqual(15);
  });
});

describe('calculation helpers', function(){
  describe('expressionContainsOperation', function(){
    it('returns true if an expression contains an operation', function(){
      expect(expressionContainsOperation("3 + 2", "+")).toEqual(true);
    });

    it('returns false if an expression does not contain an operation', function(){
      expect(expressionContainsOperation("3 + 2", "-")).toEqual(false);
    });
  });

  describe('isExpressionANumber', function(){
    it('return true if an expression is a number', function(){
      expect(isExpressionANumber(5)).toBe(true);
    });

    it('return false if an expression is not a number', function(){
      expect(isExpressionANumber('g')).toBe(false);
    });
  });
});

describe("calculate", function () {
  describe('simple operations', function(){
    it("adds two numbers", function(){
      var sum = calculate("1 + 5");
      expect(sum).toEqual(6);
    });

    it("subtracts two numbers", function(){
      var difference = calculate("1.4 - 5");
      expect(difference).toEqual(-3.6);
    });

    it("divides two numbers", function(){
      var quotient = calculate("1 / 5");
      expect(quotient).toEqual(0.2);
    });

    it("multiplies two numbers", function(){
      var product = calculate("1 * -5");
      expect(product).toEqual(-5);
    });
  });

  describe('compound operations', function(){
    describe("single type", function(){
      it('evaluates addition', function(){
        var sum = calculate("3 + 4 + 5");
        expect(sum).toEqual(12);
      });

      it('evaluates multiplication', function(){
        var product = calculate("3 * 7 * 4");
        expect(product).toEqual(84);
      });

      it('evaluates subtraction', function(){
        var difference = calculate("2 - 4 - 6");
        expect(difference).toEqual(-8);
      });

      it('evaluates division', function () {
        var quotient = calculate("12 / 4 / 3");
        expect(quotient).toEqual(1);
      });
    });

    describe("mixed type", function(){
      var result;

      it("evaluates 3 operands by order of operations", function(){
        result = 4 - 2 * 7;
        expect(calculate("4 - 2 * 7")).toEqual(result);
      });

      it("evaluates 4 operands by order of operations", function(){
        result = 0 / 4 - 2 * 7;
        expect(calculate("0 / 4 - 2 * 7")).toEqual(result);
      });

      describe("negative numbers", function() {
        it("evaluates 3 operands by order of operations", function(){
          result = 4 - 22 * -7;
          expect(calculate("4 - 22 * -7")).toEqual(result);
        });

        it("evaluates 4 operands by order of operations", function(){
          result = 4 - 2 * -7 * 2;
          expect(calculate("4 - 2 * -7 * 2")).toEqual(result);
        });
      });
    });
  });

  it("obeys infinity", function() {
    expect(calculate("1 / 0")).toEqual(Infinity);
  });
});