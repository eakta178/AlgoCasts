// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const result = str.toLowerCase().match(/[aeiou]/gi);
  return result ? result.length : 0;
}

module.exports = vowels;

// function vowels(str) {
//     const vowel = ["a", "e", "i", "o", "u"];
//     let count = 0;
//     for (let el of vowel) {
//       let re = new RegExp(el, "g");
//       let result = str.toLowerCase().match(re);
//       if (result === null) {
//         count = 0;
//       } else {
//         count += result.length;
//       }
//     }

//     return count;
//   }
