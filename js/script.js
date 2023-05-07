// Assignment code here 
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberList = "0123456789";
var specialList = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"; 

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//FUNCTION THAT RANDOMLY PICKS WHAT IS INCLUDED IN THE PASSWORD
function randomInt(min, max) {
    if(!max) {
        max = min
        min = 0 
    }
    var rand = Math.random()
    return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
}

//FUNCTION THAT VERIFIES THE USER MEETS THE PASSWORD CRITERIA
function generatePassword() {
    var userInput = prompt ("Choose a password between 8-128 characters") 
   
    var passwordLength = parseInt(userInput)
    
    if (isNaN(passwordLength)) {
        alert("Please enter a NUMBER") 
        return
    }

    if (passwordLength < 8 || passwordLength > 128) {
        alert("Password has to be between 8-128 characters!") 
        return
    }

    //IF STATEMENT THAT VERIFIES WHAT THE USER WANTS IN THEIR PASSWORD
    var optionsCart = []
    var userWantsNumbers = confirm("Would you like numbers in this password?") 
    var userWantsSpecialCharacters = confirm("Would you like special characters in this password?") 
    var userWantsUppercase = confirm("Would you like uppercase letters in this password?")
    var userWantsLowercase = confirm("Would you like lowercase letters in this password?")
       
    if (userWantsNumbers === true) {
        optionsCart.push(numberList)
    }

    if (userWantsSpecialCharacters === true) {
        optionsCart.push(specialList)
    }

    if (userWantsUppercase === true) {
        optionsCart.push(uppercaseList)
    }

    if (userWantsLowercase === true) { 
        optionsCart.push(lowercaseList)
    }

    if (optionsCart.length === 0) {
        optionsCart.push(lowercaseList) 
    }

    var generatedPassword = ""
    for (var i = 0; i < passwordLength; i++) {
        var randomList = getRandomItem(optionsCart)
        var randomChar = getRandomItem(randomList)
        generatedPassword += randomChar
    }
    return generatedPassword 
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




