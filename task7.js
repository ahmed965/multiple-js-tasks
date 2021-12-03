var readlineSync = require("readline-sync");
let sum = 0;
let avg = 0;
let nbr = 0;
let i;
for (i = 1; i <= 3; i++) {
  do {
    nbr = readlineSync.question("enter the " + i + " number: ");
  } while (nbr > 20 || nbr < 0);
  sum += parseInt(nbr);
}
avg = sum / 3;
console.log("the sum of the numbers is " + sum);
console.log("the average of the numbers is " + avg.toFixed(2));
/*
the user enter 3 numbers between 0 and 20 and the program calculate the average of the numbers.
if the number is greater than 20 or less than 0 he will be asked to reapeat again.

for example:
enter the 1 number 6
enter the 2 number 7
enter the 3 number 8
the sum of the numbers is 21
the average of the numbers is 7
*/
