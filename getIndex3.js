//Write a program `getIndex3.js` that prompts the user for an array then logs out the item at the 3rd index. If there are not four items 
//(i.e., if there is no index 3), it logs out the value at the last index

const prompt = require("prompt-sync")({sigint: true});


let arrayprompt = (prompt( "Enter an array using numbers seperated by spaces: "));

let arraynumb1 = arrayprompt[0];
let arraynumb2 = arrayprompt[1];
let arraynumb3 = arrayprompt[2];
let arraylength = arrayprompt.length; 

if (arraylength >= 2) {
    console.log("The third number in this array is: " + arraynumb3);
}
else {
    console.log("The second number in this array is: " + arraynumb2);
}