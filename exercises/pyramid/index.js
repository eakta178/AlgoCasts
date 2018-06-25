// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, res = "") {
  if (row === n) {
    return;
  }
  if (res.length === 2 * n - 1) {
    console.log(res);
    return pyramid(n, row + 1);
  }
  const midIndex = Math.floor((2 * n - 1) / 2);

  if (midIndex - row <= res.length && midIndex + row >= res.length) {
    res += "#";
  } else {
    res += " ";
  }

  pyramid(n, row, res);
}

module.exports = pyramid;

// function pyramid(n) {
//     const midIndex = Math.floor((2 * n - 1) / 2);
//     for (let i = 0; i < n; i++) {
//       let res = "";
//       for (let j = 0; j < 2 * n - 1; j++) {
//         if (midIndex - i <= j && midIndex + i >= j) {
//           res += "#";
//         } else {
//           res += " ";
//         }
//       }
//       console.log(res);
//     }
//   }
