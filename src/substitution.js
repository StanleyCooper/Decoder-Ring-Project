// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  // Basic Alphabet Array
  let standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
  let standardArray = standardAlphabet.split("");

  // Function to check if all characters in a string are unique
  function isUnique(str) {
    return new Set(str).size == str.length;
  }

  /////////////////////
  // ENCODE FUNCTION //         // a is 96 on the ASCII Chart
  /////////////////////         // z is 122 on the ASCII Chart
  function subEncode(input, alphabet) {
    let result = "";
    // Turn new substitute alphabet into an array
    let newAlphabet = alphabet.split("");
    
    // Loop through our input and convert to new alphabet
    for (let char in input) {
      const character = input[char];
      // Check for a space
      if (character.charCodeAt(0) !== 32) {
        // grab character ASCII code
        const newPosition = character.charCodeAt(0) - 97;
        // Switch current character to new alphabet
        result += newAlphabet[newPosition];
      } else {
        // Add space to our result
        result += " ";
      }
    }
    return result;
  }

  /////////////////////
  // DECODE FUNCTION //
  /////////////////////
  function subDecode(input, alphabet) {
    let result = "";
    // Turn our substitute alphabet into an array
    let newAlphabet = alphabet.split("");
    // Loop through our input 
    for (let chars in input) {
      const character = input[chars];
      // grab the character code of currently indexed character
      let characterCode = character.charCodeAt(0);
      // Check for a space
      if (characterCode !== 32) {
        // find that character position in our new alphabet
        for (let i = 0; i < newAlphabet.length; i++) {
          if (character === newAlphabet[i]) {
            const newCharacter = standardAlphabet[i];
            result += newCharacter;
          }
        }
      } else {
        // fill in the space
        result += " ";
      }
    }
    // return our result
    return result;
  }
      
    function substitution(input, alphabet = 0, encode = true) {
    // Check if the given substitution is 26 characters long
    if (alphabet.length === 26 && isUnique(alphabet)) {
      // Check is we are encoding
      if (encode === true) {
        const result = subEncode(input, alphabet);
        return result;
      }
      // Check if we are decoding
      if (encode === false) {
        const result = subDecode(input, alphabet);
        return result;
      }
    } else {
      return false;
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
