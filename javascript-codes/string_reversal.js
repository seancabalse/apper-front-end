const prompt = require('prompt-sync')();

// VERSION 1
const reverse = string => {
    return string.split("").reverse().join("");
}

//VERSION 2
const reverseUsingMap = string => {
    let strLength = string.length;
    let newStrArr = [];
    let index = 1;
    const reversedArr = string.split("").map(char => {
        newStrArr[strLength-index] = char;
        index++;
    })
    return newStrArr.join("");
}


// Define function to ask for input here
let input = (prompt("Enter string to reverse: "));
console.log(reverse(input));
console.log(reverseUsingMap(input));