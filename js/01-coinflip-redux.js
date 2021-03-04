let coinFlip;
let flipNum = Number(prompt('Enter a number of coin flips')); 

for (let a = 1; a <= flipNum; a++) {
    coinFlip = Math.round(Math.random());
    if (coinFlip === 0) {
        console.log("Heads");
    } else if (coinFlip === 1) {
        console.log("Tails");
    }
}