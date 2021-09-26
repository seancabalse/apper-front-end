const prompt = require('prompt-sync')();


const isPalendrome = string => {
    if (string.split("").reverse().join("") === string) return true
    return false;
}

let input = (prompt("Enter word: "));
console.log(isPalendrome(input));