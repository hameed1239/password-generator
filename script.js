// Assignment Code
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
  return window.confirm ("Should the password contain uppercase characters?");
}

// include lowercase characters?
function includeLowercase(){
 return window.confirm ("Should the password contain lowercase characters?");
}

// include numbers characters?
function includeNumbers(){
  return window.confirm ("Should the password contain numbers?");
}

// include lowercase characters?
function includeSpecialChar(){
  return window.confirm ("Should the password contain special characters?");
}

//verify that atleast one criteria is true
function isValidCriteria(isUpper, isLower, isNum, isSpecial){
  if (isNum||isUpper||isLower||isSpecial){
    return true;
  }
  else{
    return false;
  }
}
//GET RANDOM NUMBER
function randomNumber(){
  return Math.floor(Math.random() * 10);
}

//Get random lowercase
function randomLowercase(){
  return lowercase.charAt(Math.floor(Math.random() * lowercase.length)+1)
}

//Get random uppercase
function randomUppercase(){
  return uppercase.charAt(Math.floor(Math.random() * uppercase.length)+1)
}

//Get random special character
function randomSpecialCharacter(){
  return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length) +1)
}


//get password criteria combination to randomize 
function getPasswordCombination(){
  var combo = 0;
  if (isUppercase){
    combo+=2;
  }
  if (isLowercase){
    combo+=1;
  }
  if (isNumbers){
    combo+=4;
  }
  if (isSpecialCharacter){
    combo+=8;
  }
  return combo;
}

function passwordGenerator(){
  switch (getPasswordCombination()){
    case 0: //it would never be called. 
      break;

    case 1: // Lowercase only
      for ( var i = 0; i < passwordLength; i++){
        randomPassword[i] = randomLowercase();
      }
      break;

    case 2: // uppercase only
    for ( var i = 0; i < passwordLength; i++){
      randomPassword[i] = randomUppercase();
    }
      break;

    case 3: // Lowercase and uppercase 
      break;

    case 4: // Numbers only
    for ( var i = 0; i < passwordLength; i++){
      randomPassword[i] = randomNumber();
    }
      break;

    case 5: // Numbers and Lowercase 
      break;

    case 6: // Numbers and uppercase 
      break;

    case 7: // Numbers, uppercase and lowercase
      break;

    case 8: // Special characters only
    for ( var i = 0; i < passwordLength; i++){
      randomPassword[i] = randomSpecialCharacter();
    }
      break;

    case 9: // Special characters and lowercase
      break;

    case 10: // special characters and uppercase 
      break;

    case 11: // special characters, uppercase, and lowercase
      break;

    case 12: // special characters, and numbers
      break;

    case 13: // Lowercase, numbers, and special characters 
      break;

    case 14: // Uppercase, numbers, and special characters
      break;

    case 15: // Lowercase, uppercase, numbers, and special characters 
      break;
    
  }
}

// Write password to the #password input
function writePassword() {

  getPasswordLength();
  isUppercase = includeUppercase();
  isLowercase = includeLowercase();
  isNumbers = includeNumbers();
  isSpecialCharacter = includeSpecialChar();
    
  // isValidCrite = isValidCriteria();
  if (isValidCriteria(isUppercase, isLowercase, isNumbers, isSpecialCharacter)){
    passwordCombination = getPasswordCombination();
    passwordGenerator();
    var passwordText = document.querySelector("#password");

    passwordText.value = `${passwordLength} ${isUppercase} ${isLowercase} ${isNumbers} ${isSpecialCharacter} ${passwordCombination} ${randomPassword}`;
    //passwordText.value = password;

  }
  else{
    window.alert("Paswword must contain atleast uppercase, lowercase, number or special characters");
  }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
