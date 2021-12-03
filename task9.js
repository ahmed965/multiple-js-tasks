var readlineSync = require("readline-sync");
const nbr1 = Math.floor(Math.random() * 100 + 1);
const nbr2 = Math.floor(Math.random() * 100 + 1);
let result = 0;
let yourSolution = 0;
const arrOperation = ["+", "-", "/", "*"];
let i = 0;
const operation = arrOperation[Math.floor(Math.random() * 4)];
console.log("whats the answer of: \n " + nbr1 + "" + operation + "" + nbr2 + "=");

do {
  i++;
  yourSolution = i > 1 ? readlineSync.question("false answer try again: ") : readlineSync.question("what's your answer for the operation: ");
  switch (operation) {
    case "+":
      result = nbr1 + nbr2;
      break;
    case "-":
      result = nbr1 - nbr2;
      break;
    case "*":
      result = nbr1 * nbr2;
      break;
    case "/":
      result = nbr1 / nbr2;
      break;
  }
} while (result != yourSolution);
const timeOrTimes = i > 1 ? "times" : "time";
console.log("congratulation you have tried " + i + " " + timeOrTimes + " to find the right answer");

/* 
the program render a random oparation for two numbers between 0 and 100.
the user should find the solution, if he gives a wrong answer he will be asked to try again till he finds the result.
then the program show a congratulation message with the number of tries.
*/
