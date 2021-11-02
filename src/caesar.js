// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /////////////////////
  // ENCODE FUNCTION //
  /////////////////////
  function encodeCaesar(input, shift) {
    // Create our result to return
    let result = "";

    // Loop through our input and convert to new character
    for (let i = 0; i < input.length; i++) {

      // grab the character code of currently indexed character
      let characterCode = input.toLowerCase().charCodeAt(i);

      // Check if character isn't a space or symbol
      if (characterCode > 64) {
        // shift the character by amount given
        characterCode += shift;
    
        // Check that the code is not greater than 122, or less than 97
        if (characterCode > 122) characterCode -= 26;
        if (characterCode < 97) characterCode += 26;
      }

      // return to a character and push ito our result
      let newCharacter = String.fromCharCode(characterCode);
      result += newCharacter;
    } 
    return result;
  }

  /////////////////////
  // DECODE FUNCTION //
  /////////////////////
  function decodeCaesar(input, shift) {
    // Create our result to return
    let result = "";

    // Loop through our input and convert to new character
    for (let i = 0; i < input.length; i++) {

      // grab the character code of currently indexed character
      let characterCode = input.toLowerCase().charCodeAt(i);

      // Check if character isn't a space or symbol
      if (characterCode > 64) {
        // shift the character by amount given
        characterCode -= shift;
    
        // Check that the code is not greater than 122, or less than 97
        if (characterCode > 122) characterCode -= 26;
        if (characterCode < 97) characterCode += 26;
      }

      // return to a character and push ito our result
      let newCharacter = String.fromCharCode(characterCode);
      result += newCharacter;
    } 
    return result;
  }

  function caesar(input, shift, encode = true) {
    // Check for incorrect shift inputs
    if (shift === 0 || shift > 25 || shift < -25) return false;

    // Are we encoding
    if (encode === true) {

      // Run the encoding function
      const result = encodeCaesar(input, shift);
      return result;

    }
     
    // Are we decoding
    if (encode === false) {

      // Run the decoding function
      const result = decodeCaesar(input, shift);
      return result;

    }
  }
    

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
