/*1.3. Lesson - Alerts and debugging*/

/*Inspector
let x = Math.random();
if (x > 0.5) {
    console.log("Hello, it's nice to see you here.");
}
else {
    console.log(x);
}
*/

/* Alerts
let x = Math.random();
if (x > 0.5) {
    alert("Hello, it's nice to see you here.");
}
else {
    alert(x);
}
*/

/* Prompt
let x = prompt("Please pass the number between 0 and 1", "0.5");
if (x > 0.5) {
    alert("Hello, it's nice to see you here.");
}
else {
    alert(x);
}
*/

/* Introduction to arrays
const my_array = [item1, item2, item3];

const my_array = [];
my_array[0] = "The First item";
my_array[1] = "The Second item";
my_array[2] = "The Third item";
my_array[3] = "The Fourth item";
console.log(my_array);
console.log(my_array[0]);

console.log(my_array.length); //4

const my_array = [];
my_array[0] = "The First item";
my_array[1] = "The Second item";
my_array[2] = "The Third item";
my_array[3] = "The Fourth item";
my_array[0] = "The new First item";
my_array[my_array.length - 1] = "The new Last item";
console.log(my_array);
*/

/* Adding and removing elements from an array
const my_array = [];
my_array[0] = "The First item";
my_array[1] = "The Second item";
my_array[2] = "The Third item";
my_array[3] = "The Fourth item";
my_array[10] = "The Last item";
console.log(my_array);
console.log(my_array[4]);

const my_array = [1,2,3,4];
my_array.push(10); /// [1, 2, 3, 4, 10]
my_array.unshift(11); // [11, 1, 2, 3, 4, 10]
my_array.push(12); // [11, 1, 2, 3, 4, 10, 12]
console.log(my_array); // [11, 1, 2, 3, 4, 10, 12]

const my_array = [1,2,3,4];
my_array.pop(); /// [1, 2, 3]
my_array.shift(); // [2, 3]
my_array.pop(); // [2]
console.log(my_array); // [2]
*/

/*
const name = prompt("What's your name?");
const surname = prompt("What's your surname?");
const age = parseInt(prompt("What's your age?"));
const array = [name, surname, age];
console.log(array);
*/

/* Other array methods
const my_array = ["Hey", "Hi", "Hello"];
console.log(my_array.toString()); //Hey,Hi,Hello

const my_array = ["Hey", "Hi", "Hello"];
console.log(my_array.join(" - ")); //Hey - Hi - Hello

const text = "Hello, it's nice to see you here.";
const words = text.split(" ");
console.log(words); //['Hello,', "it's", 'nice', 'to', 'see', 'you', 'here.']

const arr1 = [1, 2, 3, 4];
const arr2 = [11, 12, 13];
const arr3 = [5, 6, 7];
const final = arr1.concat(arr2, arr3);
console.log(final); //[1, 2, 3, 4, 11, 12, 13, 5, 6, 7]

const arr1 = [1, 2, 3, 4];
const arr2 = [11, 12, 13];
const arr3 = [5, 6, 7];
const final = [...arr1, ...arr2, ...arr3];
console.log(final); //[1, 2, 3, 4, 11, 12, 13, 5, 6, 7]

/* Splicing and slicing
const numbers = [1,2,3,4,5,6];
const newNumbers = numbers.slice(1,3);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers); // [2, 3]

const numbers = [1,2,3,4,5,6];
const newNumbers = numbers.slice(-3);
console.log(numbers); // [1, 2, 3, 4, 5, 6]
console.log(newNumbers); // [4, 5, 6]

const numbers = [1,2,3,4,5,6];
numbers.splice(2,1,7,8);
console.log(numbers); // [1, 2, 7, 8, 4, 5, 6]

/* Iterator methods
function myFunction(value) {
  return value * 2;
}

function callback(value, index, array) {
    return console.log("value: ", value, "index: ", index);
}

const numbers = [1,2,3,4,5,6];
numbers.forEach(callback);
function callback(value, index, array) {
    return console.log("value: ", value, "index: ", index);
}

const numbers = [1,2,3,4,5,6];
const newNumbers = numbers.map(myFunction);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(newNumbers); //[2, 4, 6, 8, 10, 12]
function myFunction(value) {
    return value * 2;
}

const numbers = [1,2,3,4,5,6];
const even = numbers.filter(isEven);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(even); //[2, 4, 6]
function isEven(value) {
    return value % 2 == 0;
}

const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce(add);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(sum); //21
function add(total, value) {
    return total + value;
}

const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((total, value) => total + value);
console.log(numbers); //[1, 2, 3, 4, 5, 6]
console.log(sum); //21
*/

const colors =[];

// Use promts to get color names fro the user
const color1 = prompt("Enter the name of the first color");
const color2 = prompt("Enter the name of the second color");
const color3 = prompt("Enter the name of the third color");

// Push the color names into the array
colors.push(color1, color2, color3);

// Convert color names to uppercase using map()
const uppercaseColors = colors.map(function(color){ 
return color.toUpperCase();
});

// Print the uppercase color names
console.log("Colors in capital letters:");
console.log(uppercaseColors[0]);
console.log(uppercaseColors[1]);
console.log(uppercaseColors[2]);