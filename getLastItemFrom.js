//Write a program, `getLastItemFrom.js` that prompts the user for an array, then logs out the last item from that array
const prompt = require("prompt-sync")({sigint: true});

let arrayprompt = (prompt( "Enter an array using numbers seperated by spaces: "));
    let arraylength = arrayprompt.length;
    let lastnumb = arrayprompt[arraylength -1]

        console.log("The last number in this array is: " + lastnumb );