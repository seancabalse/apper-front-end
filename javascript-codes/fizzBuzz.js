
const prompt = require('prompt-sync')();

function fizzBuzz(number){
    let ctr = 1;
    while (ctr <= number){
        if (ctr%3 == 0){
            let string = "Fizz"
            if (ctr%5 == 0){
                string = string + "Buzz"
            } 
            console.log(string)
        } else if (ctr%5 == 0){
            console.log("Buzz")
        } else {
            console.log(ctr)
        }
        ctr++;
    }
}



let input = (prompt("Enter the number: "));

let number = parseInt(input);
if (isNaN(number)){
    console.log("Invalid input");
    process.exit(1)
}
console.log(number);
if (number < 0 || number > 100){
    console.log("Invalid number. Please enter number from 1-100.");
    process.exit(1)
}

fizzBuzz(number);



    


