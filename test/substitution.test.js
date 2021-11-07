// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution() submission tests written by Stanley Cooper", () => {
  describe("error handling", () => {
    it("should return false if the given alphabet is not exactly 26 characters long", () => {
      const message = "false";
      const actual = substitution(message, "nottwentysix");
      expect(actual).to.be.false;
    });

    it("should return false if the given alphabet substitution has duplicate characters", () => {
      const message = "message";
      const alphabet = "samesamesamesamesamesame11";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });
  });

  describe("encoding a message", () => {
    it("should encode a message correctly by using the given substitution alphabet", () => {
      const message = "encoded";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "kgmcoko";

      expect(actual).to.equal(expected);
    });

    it("should ignore capitals", () => {
      const message = "Encoded";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "kgmcoko";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "Encoded Message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "kgmcoko ykrrpik";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by using the given substitution alphabet", () => {
      const message = "okmcoko";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "decoded";

      expect(actual).to.equal(expected);
    });

    it("should ignore capitals", () => {
      const message = "Okmcoko";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "decoded";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "okmcoko ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "decoded message";

      expect(actual).to.equal(expected);
    });
  });
});
