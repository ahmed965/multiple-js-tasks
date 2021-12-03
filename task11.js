var readlineSync = require("readline-sync");
let nbr;
do {
  nbr = readlineSync.question("Enter an even number and divided by 3: ");
  console.log(nbr);
  if (nbr % 3 != 0) console.log("the number " + nbr + " is not divided by 3");
  if (nbr % 2 != 0) console.log("the number " + nbr + " is not even");
} while (nbr % 3 != 0 || nbr % 2 != 0);
console.log("the number " + nbr + " is even and divided by 3");

/*
 the user must enter an even number and divided by 3 else he gets an error message
untill he finds the right answer.
*/
