// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var isUppercase = false;
var isLowercase = false;
var isNumbers = false;
var specialCharacter = false;

// Write password to the #password input
function writePassword() {
 
  getPasswordLength();
  includeUppercase();
  includeLowercase();
  includeNumbers();
  includeSpecialChar();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = `${passwordLength}  ${isUppercase} ${isLowercase} ${isNumbers} ${specialCharacter}`;
  passwordText.value = password;
}
//check typeof data
function checkTypeof(data){
  return typeof data;
}

 // Get desired password length: returns password Length
function getPasswordLength(){
 
  do {
    passwordLength = parseInt(window.prompt ("Enter desired password length between 8 and 128"));
   }while (!isValidNum(passwordLength));
   
}// end get password length


function isValidNum (num){
   //check is input is a number
   if (typeof num === 'number' && num >=8 && num <= 128 ){
    //  console.log("true");
    return true;
   }
   else{
    // console.log("false");
     return false;
   }
}// end input checker

function includeUppercase(){
  isUppercase = window.confirm ("Should the password contain uppercase characters?");
}

// include lowercase characters?
function includeLowercase(){
  isLowercase = window.confirm ("Should the password contain lowercase characters?");
}

// include numbers characters?
function includeNumbers(){
  isNumbers = window.confirm ("Should the password contain numbers?");
}

// include lowercase characters?
function includeSpecialChar(){
  specialCharacter = window.confirm ("Should the password contain special characters?");
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordView(){
  document.getElementById("").innerHTML = "hameed";
}