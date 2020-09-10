// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Character Arrays

var char = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var num = '0123456789';
var sym = '!@#$%^&*=-_';


// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

function generatePassword() {

    //Create password character array

    var passLength = prompt("How long do you want your password to be?");

    var useLowerCase = confirm("Do you want to include lowercase characters?");
    var useUpperCase = confirm("Do you want to include uppercase characters?");
    var useNumeric = confirm("Do you want to include numeric characters?");
    var useSpecial = confirm("Do you want to include special characters?");
}