describe("Task 1", function() {

  var methods = require('../../main');
  
  //task 1
  var checkThree = methods.checkThree;

  describe("function of first task checks if provided argument in square contains 3:", function() {
    
    it("should check if 2 in square is 4 and it doesn't contain 3", function() {

      expect(checkThree(2)).toBe(`Squared number for 2 is: 4. No, squared number doesn\'t contain 3`);
  
    });
    it("should check if 6 goes true", function() {

      expect(checkThree(6)).toBe(`Squared number for 6 is: 36. Yes, squared number contains 3`);

    });

  });

});
