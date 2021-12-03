var readlineSync = require("readline-sync");
const nbr = Math.floor(Math.random() * 101);
//console.log("random number is " + nbr);
let solution;
do {
  solution = readlineSync.question("enter the right number between 0 and 100: ");
  if (solution < nbr && solution >= 0) {
    console.log("the number is too small");
  } else if (solution > 100 || solution < 0) {
    console.log("the number must be between 0 and 100");
  } else {
    console.log("the number is too big");
  }
} while (solution != nbr);
console.log("you have found the right number");
/*
the user must find the random number between 0 and 100 else he gets an error message
*/
