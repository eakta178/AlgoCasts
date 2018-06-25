// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return anagramPrep(stringA) === anagramPrep(stringB);
  function anagramPrep(str) {
    return str
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
  }
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//     let patt1 = /\w/g;
//     let stringAChar = stringA.match(patt1);
//     let stringBChar = stringB.match(patt1);

//     const charA = {};
//     const charB = {};

//     for (let el of stringAChar) {
//       charA[el] = charA[el] + 1 || 1;
//     }
//     for (let el of stringBChar) {
//       charB[el] = charB[el] + 1 || 1;
//     }
//     if (Object.keys(charA).length !== Object.keys(charB).length) {
//       return false;
//     } else {
//       for (let el in charA) {
//         if (charA[el] === charB[el]) {
//           console.log(charA);
//           console.log(charB);
//           return true;
//         } else {
//           return false;
//         }
//       }
//     }
//   }
