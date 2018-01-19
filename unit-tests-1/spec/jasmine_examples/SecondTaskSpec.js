describe("Task 2", function() {

  var methods = require('../../main');
  
  //task2
  var reverseNumber = methods.reverseNumber;

  describe("calling this function should return ", function() {
    
    it("reversed number", function() {
      expect(reverseNumber(1995)).toBe(5991);
    });

    it("reversed number", function() {
      expect(reverseNumber(1412488004)).toBe(4008842141);
    });

    it("error message for any NaN types", function() {
      expect(reverseNumber("monday is great")).toBe("Please provide number in argument");
    });
    
    it("convert string to number if possible", function() {
      expect(reverseNumber("1995")).toBe(5991);
    });

    it("error message if no params", function() {
      expect(reverseNumber()).toBe("Please provide number in argument");
    });
  });


});
