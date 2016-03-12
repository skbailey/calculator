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

describe("calculate", function () {
  describe('simple operations', function(){
    it("adds two numbers", function(){
      var sum = calculate("1 + 5");
      expect(sum).toEqual(6);
    });

    it("divides two numbers", function(){
      var quotient = calculate("1 / 5");
      expect(quotient).toEqual(0.2);
    });
  });
});