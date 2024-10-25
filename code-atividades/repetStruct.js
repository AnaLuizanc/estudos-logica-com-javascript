
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Type the student's name: ", function(name){
    rl.question("Type grade 1: ", function(input1){
        rl.question("Type grade 2: ", function(input2){
            rl.question("Type grade 3: ", function(input3){
                rl.question("Type grade 4: ", function(input4){
                    
                    let grade1 = parseFloat(input1);
                    let grade2 = parseFloat(input2);
                    let grade3 = parseFloat(input3);
                    let grade4 = parseFloat(input4);

                    const weight1 = 2;
                    const weight2 = 3;

                    let weightedAverage = ((weight1*(grade1+grade2) + weight2*(grade3+grade4)) / (2*(weight1+weight2)));

                    if (weightedAverage >= 60) {
                        console.log(name, "obteve a média", weightedAverage, "Situação: Aprovado.");
                    } else if(weightedAverage >= 20 && weightedAverage <=59.9){
                        console.log(name, "obteve", weightedAverage, "Situação: Recuperaçao.");
                    } else{
                        console.log(name, "obteve", weightedAverage, "Situação: Reprovado.");
                    }
                    
                    rl.close();
                });
            });
        });   
    });
});