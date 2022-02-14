1. //Write a program, `getFirstItemFrom.js` that prompts the user for an array, then logs out the first item in that array

const prompt = require("prompt-sync")({sigint: true});

let arrayprompt = (prompt( "Enter an array using numbers seperated by spaces: "));

    let arrayfirst = arrayprompt[0];
    console.log("The first number in this array is: " + arrayfirst );


