//`isLongList.js`: prompts the user for an array 
//then logs out a boolean indicating whether the array's length is at least 10

const prompt = require("prompt-sync")({sigint: true});

let arrayprompt = (prompt( "Enter an array using numbers seperated by spaces: "));
    let totalarray = arrayprompt.length;

    if (totalarray >= 10 ){
        console.log( "This array is at least 10 items long.");
    }
        else {
            console.log("This array is not 10 items long.");
        }