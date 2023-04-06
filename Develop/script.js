//Arrays of possible characters to be generated
var nums = [0,1,2,3,4,5,6,7,8,9];
var specialChar = ["-","!", "#", "$", "%", "^", "&", "*", ";" , "<" , ">" , "?"];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

// variable declarations of user inputs
var userLength;
var userChoice = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Prompt which asks user how many characters they want password to be (8-128 chars)
function promptUser() {
  userChoice = [];
  userLength = (prompt("How many characters would you like your password to have?"));
    while (userLength < 8 || userLength > 128) {
      alert("Password must be a number between 8-128. Please try again")
       return promptUser();
    }
//confirm windows which ask user for password criteria
var userSpecialChar = confirm("Would you like special characters in your password?");
var userLowerCase = confirm("Would you like lowercase letters in your password?");
var userUpperCase = confirm("Would you like uppercase letters in your password?");
var userNum = confirm("Would you like numbers in your password?");

//loop that checks if all parameters are set to false
while(userSpecialChar === false && userLowerCase === false && userUpperCase === false && userNum === false) { 
  alert("Password must meet at least one of the parameters. Please try again.");
  userSpecialChar = confirm("Would you like special characters in your password?");
  userLowerCase = confirm("Would you like lowercase letters in your password?");
  userUpperCase = confirm("Would you like uppercase letters in your password?");
  userNum = confirm("Would you like numbers in your password?");
}
    //conditional statements which check for user input on prompts (true or false)
    if (userSpecialChar) {
       userChoice = userChoice.concat(specialChar);
}
    if (userLowerCase) {
    userChoice = userChoice.concat(lowerCase);
}
    if (userUpperCase) {
    userChoice = userChoice.concat(upperCase);
}
    if (userNum) {
    userChoice = userChoice.concat(nums); 
  }
  return true;
}
//function which loops through an iteration to generate random characters based on user confirmations
    function generatePassword() {
      var password = "";
      for(var i = 0; i < userLength; i++) {
        var randomChar = Math.floor(Math.random() * userChoice.length); //math function chooses random index in the arrays declared at top
        password = password + userChoice[randomChar];
      }
      return password;
    }

// Write password to the #password input
function writePassword() {
  var promptIsCorrect = promptUser();
  var passwordText = document.querySelector("#password");
  if(promptIsCorrect) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
    }
}