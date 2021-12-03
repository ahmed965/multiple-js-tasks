var readlineSync = require("readline-sync");
const radios = readlineSync.question("enter a radius of a circle: ");
let choise = 0;

let menu = "***************Menu***************\n";
menu += "1: perimeter\n";
menu += "2: area";
console.log(menu);
do {
  choise = readlineSync.question("whats your choice: ");
  switch (+choise) {
    case 1:
      console.log("perimeter of the cicle = " + calculPerimeter(radios));
      break;
    case 2:
      console.log("area of the cicle = " + calculArea(radios));
      break;
  }
} while (choise != 1 && choise != 2);

function calculPerimeter(nbr) {
  return nbr * 2 * Math.PI;
}

function calculArea(nbr) {
  return nbr * nbr * Math.PI;
}

/* the user enters the radios of the circle then chooses to calculate perimeter or area of circle */
