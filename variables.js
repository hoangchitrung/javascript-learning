// Variables
// with let the variable can be change
let carName;
carName = "Volvo";
// with const value will be constant can't be change
const carName1 = "Valve";

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

console.log("Result = " + total);

// Examples of let, const
const pi = 3.14;
let person = "John Doe";
let answer = "Yes I Am";

// Can declared many variables in one statement
let person1 = "John Cone",
  age = 21,
  born = 2004;

// if the start is String then it concatenated
let x = "5" + 2 + 3;
// if the start is number then it will calculate and then concat with the String
let y = 2 + 3 + "5";

console.log(x);
console.log(y);

// Constants Arrays
// This is the correct way to add value into const arrays
// You can't reassign a constants arrays
const terrariaBoss = ["Devourer Of God", "Profended Goddess", "Yharon"];
console.log("Terraria Boss Before: " + terrariaBoss);
// You can change the element in the arrays
terrariaBoss[0] = ["Dragonfolly"];
console.log("Terraria Boss after remove D.O.G: " + terrariaBoss);
// You can add an element
terrariaBoss.push("Storm Weaver");
console.log("Add more boss: " + terrariaBoss);

const murasama = { type: "Melee", color: "Red" };
console.log(
  "Murasama is a " +
    murasama.type +
    " weapon and is has color of " +
    murasama.color
);
murasama.type = "True Melee";
console.log(
  "Murasama is a " +
    murasama.type +
    " weapon and is has color of " +
    murasama.color
);

murasama.unlock = "Devourer Of God";
console.log("You will get murasama unlock when you defeat " + murasama.unlock);

// using type to find out the type of variable
console.log(typeof murasama);
