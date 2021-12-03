var readlineSync = require("readline-sync");
let sumToConvert = 0;
let currency = "";
let convertedVal = 0;
const DOLLAR = 1.22;
const ROUBLE = 91.14;
const YOUANS = 7.89;
const LIVRE = 0.89;

const pattern = /^\d+\.?\d+$/;
sumToConvert = readlineSync.question("enter the amount in Euro to convert: ");
do {
  if (pattern.test(sumToConvert) == false) {
    sumToConvert = readlineSync.question("enter a valid number: ");
  }
} while (pattern.test(sumToConvert) == false);

let text = "************************* \n";
text += "Dollar  \n";
text += "Rouble  \n";
text += "Youans  \n";
text += "Livre";
console.log(text);
do {
  currency = readlineSync.question("choose the currency to convert to: ");
  switch (currency) {
    case "Dollar":
      convertedVal = sumToConvert * DOLLAR;
      break;
    case "Rouble":
      convertedVal = sumToConvert * ROUBLE;
      break;
    case "Youans":
      convertedVal = sumToConvert * YOUANS;
      break;
    case "Livre":
      convertedVal = sumToConvert * LIVRE;
      break;
    default:
      console.log("enter the right currency to convert: ");
  }
} while (currency != "Dollar" && currency != "Rouble" && currency != "Youans" && currency != "Livre");

console.log(sumToConvert + " Euro = " + convertedVal.toFixed(2) + " " + currency);

/*
the user enters an amout in euro and chooses the currency to convert to Dollar, Rouble, Youans or Livre. 
if he choose another currency, the program ask again to repeat the operation
*/
