// JavaScript (JS) is a high-level, interpreted programming language primarily used to make web pages interactive and dynamic.
// Why JavaScript is Important
// Runs in all modern browsers
// Core technology of the web (HTML + CSS + JS)
// Used for:
    // Frontend (React, Vue, Angular)
    // Backend (Node.js)
    // Mobile apps (React Native)
    // Desktop apps (Electron)

// JavaScript vs Java
    // JavaScript is NOT Java
    // JavaScript is dynamically typed
    // JavaScript runs in browsers

// How JavaScript Works 
    // JavaScript is:
    // Interpreted (executed line by line)
    // Single-threaded
    // Event-driven

// Where JavaScript Runs
    // Browser (Chrome, Firefox)
    // Server (Node.js)

// Writing JavaScript
console.log("Hello, JavaScript!");

// Variables and Data Types
// Declaring Variables
// Keyword	Scope	Reassign	Use
// var	Function	Yes	Old JS (avoid)
// let	Block	Yes	Recommended
// const	Block	No	Constants

// Data Types
// string - "Hello"
// number - 10, 3.14
// bigint - 123n
// boolean - true 
// undefined - let x;
// null - let y = null;
// symbol - Symbol("id")
// null vs undefined

// let a = null;      // intentional - Gán chủ động
// let b;             // undefined - Chưa gán



// const name = "Alice";// string
// let score = 9.5;       // number
// let isPass = true;     // boolean
// let data = null;       // null
// let x;                 // undefined
// console.log(typeof(x))

// Reference Types (Objects)
// Object	{}
// Array	[]
// Function	function()
// Date	new Date()
// Map / Set	new Map()

const student = {
  name: "Han",
  age: 22
};

const skills = ["JS", "Python"];
console.log(student.name)

//Operators
// Arithmetic Operators 
let a = 10, b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// Comparison Operators
5 == "5"; // true
5 === "5"; // false (strict)

// Logical Operators - && - AND; ||  - OR; !  NOT

let x1 = true;
let y1 = false;

x1 && y1; // false
x1 || y1; // true
!x1; // false

// Control Structures
// If / Else
let score = 80;
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// Switch
let role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "user":
    console.log("Limited access");
    break;
  default:
    console.log("Guest");
}


// Ternary Operator - Hay su dung trong UI 
// const status = isLogin ? "Logout" : "Login";


// Loop 
// for
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// while
let i = 0;
while (i < 3) {
  i++;
}

// do...while
let password;
do {
    console.log("Runs once");
} while (false);

// Modern Loops - for...of (Array)
const subjects = ["JS", "HTML", "CSS"];

for (const subject of subjects) {
  console.log(subject);
}

//for...in (Object) - Dùng cho object
const user = { name: "Han", age: 22 };

for (const key in user) {
  console.log(key, user[key]);
}


// Array Control Methods
const users = [
  { id: 1, name: "Han", age: 22, role: "user", salary: 500 },
  { id: 2, name: "Minh", age: 17, role: "user", salary: 300 },
  { id: 3, name: "Lan", age: 25, role: "admin", salary: 1000 },
  { id: 4, name: "Tan", age: 30, role: "user", salary: 800 }
];

// forEach()
// users.forEach(user => {
//   console.log(user.name);
// });

// map()
const names = users.map(user => user.name);
console.log(names)

// filter()
const adults = users.filter(user => user.age >= 18);
console.log(adults)


// Functions
// Function Declaration - Hoisted (gọi trước khai báo vẫn chạy)
function add(a, b) {
    return a + b;
}

// Function Expression - Không hoisted
const multiply = function(a, b) {
    return a * b;
};

// Arrow Functions
const subtract = (a, b) => a - b;

function greet(name = "Guest") {
  console.log(`Hello ${name}`);
}

greet();       // Hello Guest
greet("Han"); // Hello Han

//Array
const fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Apple


const arr1 = [];                 // empty array
const arr2 = [1, 2, 3];          // numbers
const arr3 = ["JS", 10, true];   // mixed types

console.log(arr3);
console.log(fruits.length); // 3

// Add to END
fruits.push("Orange");
console.log(fruits);

// Remove from END
fruits.pop();
console.log(fruits);

// Add to START
fruits.unshift("Strawberry");
console.log(fruits);

// Remove from START
fruits.shift();
console.log(fruits);

// for loop
for (let i = 0; i < fruits.length; i++) {
  console.log("for:", fruits[i]);
}

// for...of (recommended)
for (const fruit of fruits) {
  console.log("for...of:", fruit);
}

// forEach (no return)
fruits.forEach((fruit, index) => {
  console.log(`forEach ${index}: ${fruit}`);
});

// map - transform array 
const upperFruits = fruits.map(fruit => {
  return fruit.toUpperCase();
});
console.log("map:", upperFruits);

// filter
const numbers = [10, 5, 20, 3, 8];
const greaterThanTen = numbers.filter(num => num > 10);
console.log("filter:", greaterThanTen);

// find one element
const firstSmall = numbers.find(num => num < 10);
console.log("find:", firstSmall);

// Objects
// - Object dùng để lưu data theo dạng key : value
// - Rất phổ biến trong web (API, user, product, config)

const data = {
  name: "Han",
  age: 22,
  isAdmin: false
};

console.log(user);

// Dot notation (recommended)
console.log(data.name);

// Bracket notation (dynamic key)
console.log(data["age"]);

const key = "isAdmin";
console.log(data[key]);


// Add
data.email = "hanh@gmail.com";

// Update
data.age = 23;

// Delete
delete data.isAdmin;

console.log(data);


const ppl = {
  name: "Lan",
  age: 20,
  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

ppl.sayHello();


// this refers to the object calling the method
const person = {
  name: "Minh",
  greet: function () {
    console.log(this.name);
  }
};

person.greet();

//nested object
const product = {
  name: "Laptop",
  price: 1500,
  specs: {
    cpu: "Intel i7",
    ram: "16GB"
  }
};

console.log(product.specs.ram);

// spread operator
const newUser = {
  ...ppl,
  age: 30,
  country: "Vietnam"
};

console.log(newUser);


