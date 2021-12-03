var readlineSync = require("readline-sync");
const sizeSquare = readlineSync.question("what's the size of square ");
console.log(sizeSquare);

let squareContent = "";
let firstLine = "";

for (let j = 0; j < sizeSquare; j++) {
  firstLine = firstLine + "**";
}
console.log(firstLine);

for (let j = 0; j < sizeSquare; j++) {
  if (j == 0) {
    squareContent += "**";
  } else if (j == sizeSquare - 1) {
    squareContent += "**";
  } else {
    squareContent += "  ";
  }
}
for (let i = 0; i < sizeSquare - 2; i++) {
  console.log(squareContent);
}

console.log(firstLine);

/*

the user enters a number for the size of a square and the program should draw the square like the example below.
the number of rows should be the same as the number the user entred.
the columns shoud be twice the rows.

what' the size of square 5
5
**********
**      **
**      **
**      **
**********

*/
