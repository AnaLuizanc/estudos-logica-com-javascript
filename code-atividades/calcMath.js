
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type a number: ", function(input1){
    rl.question("Type another number: ", function(input2){
        
        let number1 = parseInt(input1);
        let number2 = parseInt(input2);
        
        console.log("O antecessor do número", number1, "é", number1-1);
        console.log("Seu sucessor é", number1+1);
        console.log("O dobro é", number1*2, ",o triplo é", number1*3, "e a raiz quadrada é", Math.sqrt(number1));
        
        console.log("A média de", number1, "e", number2, "é", (number2+number1)/2);
    
        rl.close();
    });
});