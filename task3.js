var readlineSync = require("readline-sync");
let login = "";
let password = "";
const arrUsers = [
  ["toto", "test1", "admin"],
  ["titi", "test2", "user"],
  ["tata", "test3", "user"],
];
const tries = 3;
let i = 0;
let remainTries;
let role = "";
do {
  login = readlineSync.question("enter your login  ");
  password = readlineSync.question("enter your password  ");
  role = isLogin(login, password);
  i++;
  remainTries = tries - i;

  if (role == "") console.log("the login or/and password are wrong, you still have " + remainTries + " times");
} while (role == "" && remainTries > 0);

if (remainTries == 0 && role == "") {
  console.log(" you have tried 3 times \n End Program");
} else {
  console.log("you are connected as " + role);
}

function isLogin(login, password) {
  for (let i = 0; i < arrUsers.length; i++) {
    if (arrUsers[i][0] == login && arrUsers[i][1] == password) {
      return arrUsers[i][2];
    }
  }
  return "";
}

/* 
the user tries 3 times to enter a login and password, if the data are true he gets a success message contain his role
otherwise the program asks again for data. if he makes 3 falses tries the program ends.

"Password in real world website shouldn't be saved this way and should be hashed"
*/
