// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var isUppercase;
var isLowercase;
var isNumbers;
var specialCharacter;

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  password = "hameed";
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Get desired password length
function getPasswordLemgth(){
  window.prompt ("Choose password length 8-128");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function passwordView(){
  document.getElementById("").innerHTML = "hameed";
}