// PART 3: LOOP & RANDOM
const randomInteger = (max) => {
    return Math.floor(Math.random() * max);
};

const targetNumber = randomInteger(100);
console.log(`Random Number ${targetNumber}`);

// Random guessing game
console.log("Start Guessing");

for (let i = 0; i < 5; i++) {
    let myGuess = randomInteger(100);

    // process.stdout.write(); Use this when I want to not breakdown the line
    console.log(`Number ${i} : Guess ${myGuess} `);

    if (myGuess === targetNumber) {
        console.log("Correct");

    } else if (myGuess < targetNumber) {
        console.log("Too low");

    } else {
        console.log("Too high");

    }
}