const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Stanley Cooper", () => {
    describe("encoding tests:", () => {
        it("should output into a string", () => {
            const message = "string";
            const actual = polybius(message);

            expect(actual).to.be.a.string;
         });

        it("should convert both i and j to a 42", () => {
            const message = "jinkies";
            const actual = polybius(message);
            const expected = "42423352425134";
  
            expect(actual).to.equal(expected);
         });
  
        it("should ignore spaces", () => {
            const message = "my space";
            const actual = polybius(message);
            const expected = "2345 3453113151";
  
            expect(actual).to.equal(expected);
        });

        it("should ignore capitals", () => {
            const message = "My Space";
            const actual = polybius(message);
            const expected = "2345 3453113151";

            expect(actual).to.equal(expected);
        })
    });
  
    describe("decoding a message", () => {
        it("should return false if the # of characters, excluding spaces, is odd", () => {
            const message = "123";
            const actual = polybius(message, false);

            expect(actual).to.be.false;
        });
      
        it("should convert a 42 to (i/j)", () => {
            const message = "42423352425134";
            const actual = polybius(message, false);
            const expected = "(i/j)(i/j)nk(i/j)es";
  
            expect(actual).to.equal(expected);
        });
  
        it("should ignore spaces", () => {
            const message = "2345 3453113151";
            const actual = polybius(message, false);
            const expected = "my space";
  
            expect(actual).to.equal(expected);
        });
    });
  });
  
