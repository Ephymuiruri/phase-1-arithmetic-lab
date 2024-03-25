require ( './helpers.js' );

const chai = require('chai')
const expect = chai.expect;

describe('index.js', function() {
  describe('multiply', function() {
    it("is an equation whose multiplied results will equal 62", function() {
      expect(num1).to.be.a('number')
      expect(num2).to.be.a('number')
      expect(multiply).to.eq(62)
    });
  });
  describe('random', function() {
    it("generates a random integer greater than 0", function() {
      const randomNumber = random(); // Call the random function to get a random number
      expect(Number.isInteger(randomNumber)).to.be.true; // Check if the result is an integer
      expect(randomNumber).to.not.eq(0); // Check if the result is not equal to 0
    });
  });  
  describe('mod', function() {
    it("is an equation that calculates a remainder that is equal to 4", function() {
      const num3 = 4;
      const num4 = 5; // You can change this value as needed
      const result = mod(7, num4); // Call mod with specific parameters
      
      expect(result).to.eq(4); // Check if the result is equal to 4
    });
  });
  
  describe('max', function() {
    it("will return 20 as the highest number in the set", function() {
      expect(max()).to.eq(20)
    });
  });
});
