const prompt = require('prompt-sync')();

const onlyVowelsOf = string => {
    let regex = /^[aeiou]/gi;
    let vowelsOnly = string.split('').filter(char => {
        if(regex.test(char)) return char
        });
    return vowelsOnly.join("");
}


let input = (prompt("Enter word: "));
console.log(onlyVowelsOf(input));