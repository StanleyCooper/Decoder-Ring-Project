// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  // Our polybius
  const polybiusArray = [
    ["a", "f",     "l", "q", "v"],
    ["b", "g",     "m", "r", "w"],
    ["c", "h",     "n", "s", "x"],
    ["d", "(i/j)", "o", "t", "y"],
    ["e", "k",     "p", "u", "z"]
  ];
  
  // Function to check if input in odd
  function isOdd(input) { return input % 2;};

  /////////////////////
  // ENCODE FUNCTION //
  /////////////////////
  function polybiusEncode(input) {
    // Establish our result
    let result = "";

    // Loop for each input
    for (let char in input) {
      let letter = input[char];
      let code = letter.charCodeAt(0);
      // Check if our letter is an i or a j
      if (letter === "i" || letter === "j")  {
        result += "42";
      } else {
        // Check if character is a space
        if (code !== 32) {
          // Find coordinates of given letter
          // Loop for x coordinate
          CoordinateLoops:
          for (let x = 0; x < 5; x++) {
            // Loop for y coordinate
            for (let y = 0; y < 5; y++) {
              // Check for a match
              if (letter === polybiusArray[x][y]) {
                result += x + 1;
                result += y + 1;
                break CoordinateLoops;
              }
            }
          }
        } else {
          // add space to our result
          result += " ";
        }   
      }
    }
    return result;
  }

  /////////////////////
  // DECODE FUNCTION //
  /////////////////////
  function polybiusDecode(input) {
    // Establish our result
    let result = "";
    // Loop through the numbers
    for (let i = 0; i < input.length; i++) {
       // Check that the current indexed input character is not a space
       if (input.charCodeAt(i) !== 32) {
         //grab our coordinates
         let x = input[i] - 1;
         i++; // Add to grab second # in the pair
         let y = input[i] - 1;
         // push into our result
         result += polybiusArray[x][y];
       } else {
         // add space to our result
         result += " ";
       }
    }
    return result;
  }

  function polybius(input, encode = true) {
    // If encoding
    if (encode === true) {
      result = polybiusEncode(input);
      return result;
    }

    // If decoding
    if (encode === false) {
      // Check if input is an odd number
      let numbers = input.split(" ").join("").length;
      if (isOdd(numbers)) return false;
      // Run decoding function and return
      result = polybiusDecode(input);
      return result;
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
