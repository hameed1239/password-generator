// Variables
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var passwordCombination = 0;
var isUppercase = false;
var isLowercase = false;
var isNumbers = false;
var isSpecialCharacter = false;
var isValidCrite = false;
var lowercase = `abcdefghijklmnopqrstuvwxyz`;
var uppercase = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
var specialCharacters = '`~!@#$%^&*()_-+={}[]|?${}/\\';
var randomPassword = [];
var passwordText = document.getElementById("password");
// Get desired password length: returns password Length
function getPasswordLength() {
  do {
    passwordLength = parseInt(window.prompt("Enter desired password length between 8 and 128"));
    if (isNaN(passwordLength) === true) { //break out of loop if user clicks cancel
      break;
    }
  } while (!isValidNum(passwordLength));
}
//verify type of input is number and it is between 8 and 128
function isValidNum(num) {
  if (typeof num === 'number' && num >= 8 && num <= 128) {
    //  console.log("true");
    return true;
  }
  else {
    // console.log("false");
    return false;
  }
}
//Confirm if user wants uppercase characters in the generated password
function includeUppercase() {
  return window.confirm("Should the password contain uppercase characters?");
}
// Confirm if user wants lowercase characters in the generated password
function includeLowercase() {
  return window.confirm("Should the password contain lowercase characters?");
}
// Confirm if user wants numbers in the generated password
function includeNumbers() {
  return window.confirm("Should the password contain numbers?");
}
// Confirm if user wants special characters in the generated password
function includeSpecialChar() {
  return window.confirm("Should the password contain special characters?");
}
//verify that atleast one criteria is true
function isValidCriteria(isUpper, isLower, isNum, isSpecial) {
  if (isNum || isUpper || isLower || isSpecial) {
    return true;
  }
  else {
    return false;
  }
}
//GET RANDOM NUMBER
function randomNumber() {
  return Math.floor(Math.random() * 10);
}
//Get random lowercase
function randomLowercase() {
  return lowercase.charAt(Math.floor(Math.random() * lowercase.length) + 1)
}
//Get random uppercase
function randomUppercase() {
  return uppercase.charAt(Math.floor(Math.random() * uppercase.length) + 1)
}
//Get random special character
function randomSpecialCharacter() {
  return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length) + 1)
}
//get unique number to identify the combination of password criteria requested by the user 
function getPasswordCombination() {
  var combo = 0;
  if (isUppercase) {// if uppercase is requested, add 2 to combo
    combo += 2;
  }
  if (isLowercase) {// if lowercase is requested, add 1 to combo
    combo += 1;
  }
  if (isNumbers) {// if number is requested, add 4 to combo
    combo += 4;
  }
  if (isSpecialCharacter) {// if special character is requested, add 8 to combo
    combo += 8;
  }
  return combo;
}
//generate password depending on what criteria is requested
function passwordGenerator() {
  switch (getPasswordCombination()) {
    case 0: //it would never be called but just incase. 
      break;
    case 1: // Lowercase only
      for (var i = 0; i < passwordLength; i++) {
        randomPassword[i] = randomLowercase();
      }
      break;
    case 2: // uppercase only
      for (var i = 0; i < passwordLength; i++) {
        randomPassword[i] = randomUppercase();
      }
      break;
    case 3: // Lowercase and uppercase 
      for (var i = 0; i < passwordLength; i++) {
        // Force assignments because randomnumber generator might never generate the required number needed to trigger all conditions in the randomized assignment 
        if (i === 3) {
          randomPassword[i] = randomLowercase();
        }
        else if (i === 7) {
          randomPassword[i] = randomUppercase();
        }
        else { // Randomized assignment
          if (Math.floor(Math.random() * 2) === 1) {
            randomPassword[i] = randomLowercase();
          }
          else {
            randomPassword[i] = randomUppercase();
          }
        }
      }
      break;
    case 4: // Numbers only
      for (var i = 0; i < passwordLength; i++) {
        randomPassword[i] = randomNumber();
      }
      break;
    case 5: // Numbers and Lowercase 
      for (var i = 0; i < passwordLength; i++) {
        if (i === 2) {// Force assignments
          randomPassword[i] = randomLowercase();
        }
        else if (i === 6) {
          randomPassword[i] = randomUppercase();
        }
        else { // Randomized assignment
        if (Math.floor(Math.random() * 2) === 1) {
          randomPassword[i] = randomNumber();
        }
        else {
          randomPassword[i] = randomLowercase();
        }
      }
    }
      break;
    case 6: // Numbers and uppercase 
      for (var i = 0; i < passwordLength; i++) {
        if (i === 1) {// Force assignments
          randomPassword[i] = randomNumber();
        }
        else if (i === 4) {
          randomPassword[i] = randomUppercase();
        }
        else { // Randomized assignment
        if (Math.floor(Math.random() * 2) === 1) {
          randomPassword[i] = randomNumber();
        }
        else {
          randomPassword[i] = randomUppercase();
        }
      }
    }
      break;

    case 7: // Numbers, uppercase and lowercase
      for (var i = 0; i < passwordLength; i++) {
        if (i === 2) {// Force assignments
          randomPassword[i] = randomLowercase();
        }
        else if (i === 7) {
          randomPassword[i] = randomUppercase();
        }
        else if (i === 3){
          randomPassword[i] = randomNumber();
        }
        else { // Randomized assignment
        var x = Math.floor(Math.random() * 3);
        if (x === 0) {
          randomPassword[i] = randomNumber();
        }
        else if (x = 1) {
          randomPassword[i] = randomUppercase();
        }
        else {
          randomPassword[i] = randomLowercase();
        }
      }
    }
      break;
    case 8: // Special characters only
      for (var i = 0; i < passwordLength; i++) {
        randomPassword[i] = randomSpecialCharacter();
      }
      break;
    case 9: // Special characters and lowercase
      for (var i = 0; i < passwordLength; i++) {
        if (i === 2) {// Force assignments
          randomPassword[i] = randomSpecialCharacter();
        }
        else if (i === 6) {
          randomPassword[i] = randomLowercase();
        }
        else { // Randomized assignment
        if (Math.floor(Math.random() * 2) === 1) {
          randomPassword[i] = randomSpecialCharacter();
        }
        else {
          randomPassword[i] = randomLowercase();
        }
      }
    }
      break;
    case 10: // special characters and uppercase 
      for (var i = 0; i < passwordLength; i++) {
        if (i === 1) {// Force assignments
          randomPassword[i] = randomSpecialCharacter();
        }
        else if (i === 4) {
          randomPassword[i] = randomUppercase();
        }
        else { // Randomized assignment
        if (Math.floor(Math.random() * 2) === 1) {
          randomPassword[i] = randomUppercase();
        }
        else {
          randomPassword[i] = randomSpecialCharacter();
        }
      }
    }
      break;
    case 11: // special characters, uppercase, and lowercase
      for (var i = 0; i < passwordLength; i++) {
        if (i === 2) {// Force assignments
          randomPassword[i] = randomLowercase();
        }
        else if (i === 5) {
          randomPassword[i] = randomUppercase();
        }
        else if (i === 8){
          randomPassword[i] = randomSpecialCharacter();
        }
        else { // Randomized assignment
        var x = Math.floor(Math.random() * 3);
        if (x === 0) {
          randomPassword[i] = randomSpecialCharacter();
        }
        else if (x === 1) {
          randomPassword[i] = randomUppercase();
        }
        else {
          randomPassword[i] = randomLowercase();
        }
      }
    }
      break;
    case 12: // special characters, and numbers
      for (var i = 0; i < passwordLength; i++) {
        if (i === 3) {// Force assignments
          randomPassword[i] = randomNumber();
        }
        else if (i === 5) {
          randomPassword[i] = randomSpecialCharacter();
        }
        else { // Randomized assignment
        if (Math.floor(Math.random() * 2) === 1) {
          randomPassword[i] = randomNumber();
        }
        else {
          randomPassword[i] = randomSpecialCharacter();
        }
      }
    }
      break;
    case 13: // Lowercase, numbers, and special characters 
      for (var i = 0; i < passwordLength; i++) {
        if (i === 2) {// Force assignments
          randomPassword[i] = randomLowercase();
        }
        else if (i === 7) {
          randomPassword[i] = randomSpecialCharacter();
        }
        else if (i === 3){
          randomPassword[i] = randomNumber();
        }
        else { // Randomized assignment
        var x = Math.floor(Math.random() * 3);
        if (x === 0) {
          randomPassword[i] = randomNumber();
        }
        else if (x === 1) {
          randomPassword[i] = randomSpecialCharacter();
        }
        else {
          randomPassword[i] = randomLowercase();
        }
      }
    }
      break;

    case 14: // Uppercase, numbers, and special characters
      for (var i = 0; i < passwordLength; i++) {
        if (i === 2) {// Force assignments
          randomPassword[i] = randomSpecialCharacter();
        }
        else if (i === 3) {
          randomPassword[i] = randomUppercase();
        }
        else if (i === 8){
          randomPassword[i] = randomNumber();
        }
        else { // Randomized assignment
        var x = Math.floor(Math.random() * 3);
        if (x === 0) {
          randomPassword[i] = randomNumber();
        }
        else if (x === 1) {
          randomPassword[i] = randomUppercase();
        }
        else {
          randomPassword[i] = randomSpecialCharacter();
        }
      }
    }
      break;
    case 15: // Lowercase, uppercase, numbers, and special characters 
      for (var i = 0; i < passwordLength; i++) {
        var x = Math.floor(Math.random() * 4);
        if (i === 1) {// Force Assignments
          randomPassword[i] = randomNumber();
        }
        else if (i === 3) {
          randomPassword[i] = randomLowercase();
        }
        else if (i === 5) {
          randomPassword[i] = randomSpecialCharacter();
        }
        else if (i === 7) {
          randomPassword[i] = randomUppercase();
        }
        else {// Randomized assignment
          if (x === 0) {
            randomPassword[i] = randomNumber();
          }
          else if (x === 1) {
            randomPassword[i] = randomUppercase();
          }
          else if (x === 2) {
            randomPassword[i] = randomLowercase();
          }
          else {
            randomPassword[i] = randomSpecialCharacter();
          }
        }
      }
      break;

  }
}
// Write password to the #password input
function writePassword() {
  getPasswordLength();
  if (isNaN(passwordLength) === true) {//if user clicks cancel Quit the generator
    alert("You have quit the generator");
  }
  else {// Continue to the generation process
    isUppercase = includeUppercase();
    isLowercase = includeLowercase();
    isNumbers = includeNumbers();
    isSpecialCharacter = includeSpecialChar();
    if (isValidCriteria(isUppercase, isLowercase, isNumbers, isSpecialCharacter)) {//check if atleast one of the password criteria is true
      passwordCombination = getPasswordCombination();
      passwordGenerator();
      passwordText.value = `${randomPassword.join("")}`;
    }
    else {// quit generator and alert user
      window.alert("Paswword must contain atleast uppercase, lowercase, number or special characters");
    }
  }
}
//clear textArea and reset password Array
function clearTextArea() {
  randomPassword = [];
  passwordText.value = "";
}
// Add event listener to generate button
generateBtn.addEventListener("click", clearTextArea);
generateBtn.addEventListener("click", writePassword);

