
const { realpath } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type an integer number: ", function(input){

    let number = parseInt(input);

    if(number > 0){
        let divisors = new Array(2);
        let counter = 0;
        for(let i=1; i<=number; i++){
            if(number%i == 0){
                divisors.push(i);
                counter++;
            }
        }
        
        if(counter == 2){
            console.log(number,"é primo e seus divisores são:", divisors);
        }
        else
        console.log(number,"não é primo e seus divisores são:", divisors);
    }

    rl.close();
});