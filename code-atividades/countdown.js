
function countdown(){
    return new Promise((resolve) =>{

        for (let index = 10; index > 0; index--) {
            console.log(index);
        }
        
        console.log("\tHappy new year!!!!");
        setTimeout(resolve,900);
    });
}


const frames = [
    `
         *     .   .   *      * 
      *     *        *   .   *
        \\o/      \\o/      \\o/
         |        |        |
        / \\      / \\      / \\
    `,
    `
         .    *       *      .
        \\o/      \\o/       \\o/
         |        |         |
        / \\      / \\       / \\
      *       .      *       * 
    `,
    `
        *   \\o/      \\o/      *
         *    |        |    * 
        .    / \\      / \\    .
         *       *       *      
    `,
];
  
let i = 0;

function animate() {
    console.clear();
    console.log(`\x1b[3${(i % 6) + 1}m` + frames[i % frames.length] + "\x1b[0m"); // Alterna cores
i++;
setTimeout(animate, 500); // Atualiza a cada 500ms
}

countdown().then(animate);