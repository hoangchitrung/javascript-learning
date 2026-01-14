// Part 1: SOLVE EQUATIONS (Logic if/else)
const a = 5;
const b = 10;

console.log(`Solve equation: ${a}x + ${b} = 0`);

if (a === 0) {
    if (b === 0) {
        console.log("The equation has many roots");
    }
    else {
        console.log("The equation has no root");
    }
} else {
    const result = -b / a;
    console.log(`Result = ${result}`);
}

// Part 2: NULL SAFETY same
let test1 = null; // in js we can assign null to variable

// Operator ?? (Nullish Coalescing)
console.log(`Current User ${test1 ?? "Guest"}`);

test1 = "Trung Hutech";
console.log(`Current User: ${test1}`);

