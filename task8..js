var readlineSync = require("readline-sync");
const arrletter = ["m", "a", "l", "b", "c", "d", "e", "f", "j", "k"];
let word = "_";
const letter = generateLetter();

word = readlineSync.question("enter word start with " + letter + " ");
while (tolowerCase(word[0]) !== letter) {
  if (tolowerCase(word[0]) !== letter) {
    word = readlineSync.question("the word must start with " + letter + " try again ");
  }
}

console.log("correct");
function generateLetter() {
  return arrletter[Math.floor(Math.random() * 10)];
}
function tolowerCase(str) {
  return str.toLowerCase();
}

/*
the program generates a random letter and the user must enter a word start with this letter or he repeats the try
*/
