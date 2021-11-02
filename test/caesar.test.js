// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Stanley Cooper", () => {
    describe("Error handling", () => {
      it("should return false if the shift amount is 0", () => {
        const message = "False Return";
        const shift = 0;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is above 25", () => {
        const message = "False Return";
        const shift = 26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
  
      it("should return false if the shift amount is less than -25", () => {
        const message = "False Return";
        const shift = -26;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });

      it("should ignore capital letters", () => {
        const message = "CaPiTaL";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "dbqjubm";
  
        expect(actual).to.equal(expected);
      });

      it("should appropriately handle letters at the end of the alphabet", () => {
        const message = "zany zoos";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "aboz appt";
  
        expect(actual).to.equal(expected);
      });

      it("should leaves spaces and other symbols as is", () => {
        const message = "text box.txt";
        const shift = 1;
        const actual = caesar(message, shift);
        const expected = "ufyu cpy.uyu";
  
        expect(actual).to.equal(expected);
      });
    });
});
 