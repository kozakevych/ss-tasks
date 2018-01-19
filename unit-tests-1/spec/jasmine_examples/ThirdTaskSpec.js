describe("Task 3", function() {

  var methods = require('../../main');

  //task3
  var maxSumDivisors = methods.maxSumDivisors;
  var divisorSumCounter = methods.divisorSumCounter;
  var sumFinder = methods.sumFinder;

  describe("Calling main function should find biggest sum divisors natural number for provided in argument value.", function() {
    
    it("returns message containing biggest natural number and max sum divisors", function() {
      expect(maxSumDivisors(1000)).toBe("The natural number is 960 and its divisors sum is 3048");
    // });

    it("returns error message if NaN argument was provided", function() {
      expect(maxSumDivisors("One thousand")).toBe("Please provide number argument");
    });

    it("returns error message if no arguments provided", function() {
      expect(maxSumDivisors()).toBe("Please provide number argument");
    });

  });

  describe("Calling inner function takes argument from main function (maxSumDivisors), finds biggest sum of divisors and ", function() {
    
    it("returns sum", function() {
      expect(divisorSumCounter(1000)).toBe(2340);
    });
    
    // should i check string and no args cases ?
    it("returns error if", function() {
      expect(divisorSumCounter("string")).toBe("Please provide number argument");
    });

  });
  describe("Function sumFinder takes range as argument finds biggest number, sum of it divisors and returns info about it.", function() {
    
    it("Finding sum returns", function() {
      expect(sumFinder(1000)).toEqual([960, 3048]);
    });

  });
})
})