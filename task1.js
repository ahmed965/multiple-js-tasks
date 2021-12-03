var readlineSync = require("readline-sync");
const nbrSteps = readlineSync.question("How many steps to draw: ");

let designSteps = "";
let space = "";
for (i = 1; i <= nbrSteps; i++) {
  space += "  ";
}
for (i = 1; i <= nbrSteps; i++) {
  space = space.substring(2);
  designSteps += space + "_/ \n";
}
console.log(designSteps);

/* 
the user enters the number of steps he wants and the prorgram draws it.
for example: if the user enters 5 steps the result will be:
          _/ 
        _/
      _/
    _/
  _/
*/
