var generateBtn = document.querySelector("#generate");

var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerNum = [ "0","1","2","3","4","5","6","7","8","9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value= password
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  var charLength = prompt("How many characters");
  var whichCase = confirm("Uppercase letters?");
  var num = confirm("Numbers in your password?");
  
  // Creates a local variable for the password 
  let password = '';

  console.log(charLength);
  console.log(whichCase);
  console.log(num);

  // Uppercase and numbers?
  if(num === true && whichCase === true){
    for(var i = 0; i <charLength; i++){

      charPick = upperNum[Math.floor(Math.random()*upperNum.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);

    }
  }  
//Uppercase but no numbers?
    else if(num != true && whichCase === true){
      for(var i = 0; i <charLength; i++){

      charPick = upperChars[Math.floor(Math.random()*upperChars.length)];
      console.log(charPick);
      password = password.toString()+charPick.toString();
      console.log(password);

    }
  }
//Numbers no uppercase?
    else if(num === true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characterNum[Math.floor(Math.random()*characterNum.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);       
      }

    }
    else if(num != true && whichCase != true){
      for(var i = 0; i <charLength; i++){

        charPick = characters[Math.floor(Math.random()*characters.length)];
        console.log(charPick);
        password = password.toString()+charPick.toString();
        console.log(password);
  } 
    }
    return password;
}
