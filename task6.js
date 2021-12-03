var readlineSync = require("readline-sync");
let productToChoose = 0;
let quantityProduct = 0;
let lisProducts = "This is the products list \n";
lisProducts += "1 PC 700 Euro \n";
lisProducts += "2 Telephone 300 Euro \n";
lisProducts += "3 Tablett 600 Euro";
let totalHt = 0;
let totalTTC = 0;
let priceProduct = 0;

console.log(lisProducts);

while (productToChoose < 1 || productToChoose > 3) {
  productToChoose = readlineSync.question("What's the product you want to buy?  ");
  switch (+productToChoose) {
    case 1:
      priceProduct = 700;
      break;
    case 2:
      priceProduct = 300;
      break;
    case 3:
      priceProduct = 600;
      break;
    default:
      console.log("error");
  }
}

while (quantityProduct <= 0) {
  quantityProduct = readlineSync.question("how many Products you want to buy?  ");
}

console.log("quantity is " + quantityProduct);

totalHt = priceProduct * quantityProduct;
totalTTC = totalHt + (totalHt * 20) / 100;

console.log("Total HT: " + totalHt + " Euro");
console.log("Total TTC: " + totalTTC + " Euro");
/* 
the user chooses a product to buy and enter the product id, 
he must choose a number between 1 and 3 or he repeats the operation.
then he chooses a quantity for the product and it should be not 0 and positive.
At the end he gets The Total HT price and Total TTC prcie.
*/
