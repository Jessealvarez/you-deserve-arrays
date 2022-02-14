const prompt = require('prompt-sync')();

let prompty = JSON.parse(prompt("Enter a series of words and hit Enter: "));

let thirditem = prompty[2];
let secondChar = thirditem[1];

if (typeof thirditem === 'string'){
    console.log(secondChar)
}else if (typeof thirditem != 'string'){
    console.log( "Error!");
}

//prompts the user for an array then logs the second character in the third item in the array. 
//If the third item is not a string, log an error instead