//`firstItemIsNumber.js`: prompts the user for an array 
//then logs out a boolean indicating whether or not the first item in the array is a number

const prompt = require("prompt-sync")({sigint: true});

let arrayprompt = JSON.parse(prompt( "Enter an array: "));
let firstnumb = arrayprompt[0];

if (typeof firstnumb === 'number' ){
    console.log("The first item in this array seems to be a number.");
}else if (typeof firstnumb != 'number' ){
    console.log("The first item in this array does not seem to be a number.");
}