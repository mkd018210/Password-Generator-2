// Assignment code here
var generateBtn = document.querySelector("#generate");


 var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var upperCase = ["A", "B,", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
 var specialCharacters = ["!", "@", "#", "$", "%", "&", "*"];


// Get references to the #generate element
function generatePassword () {

    var pool = []
    var passwordlength = window.prompt("Password must me between 8 & 128 characters");
    //if(passwordLength < 8 || passwordLength > 128){}
    //if(passwordLength not a number){}
    var upperCaseLetters = window.confirm("Do you want to use upper case letters");
    //if(CONDITION){LOGIC}
    //else if (CONDITION){LOGIC}
    //else{CATCH ALL LOGIC}
    if(upperCaseLetters === true){
        pool = pool.concat(upperCase)
    }
 
    var lowerCaseLetters = window.confirm("Do you want to use lower case letters?");
    if(lowerCaseLetters === true){
        pool = pool.concat(lowerCase)
    }
    
    var numberCharacters = window.confirm("Do you want to use numbers?");
    if(numberCharacters === true){
        pool = pool.concat(numbers)
    }
    var specialCharactersUse = window.confirm("Do you want to use special characters?");
    if(specialCharactersUse === true){
        pool = pool.concat(specialCharacters)
    }
    console.log(pool)
    for(var i=0; i < pool.length; i++) {
       
        console.log("Pick your characters" + pool[i]);
      }
    console.log(pool.length);

    

    return "Random Password"
  
}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
