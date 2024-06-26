// Assignment # 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

import { log } from "console";

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

console.log("Tests for equality and inequality with strings:");
let myName: string = "Aisha";

// Equality
console.log(myName == "Aisha");    //true 
console.log(myName === "aisha");   //false

// Inequality
console.log(myName !== "aisha");   //true
console.log(myName !== "Aisha");   //false

console.log('Test using the lower case function:');
console.log("CAR".toLowerCase() == "car");   //true
console.log("CAR".toLowerCase() === "Car");   //false

console.log("Numerical tests:");
let num1: number = 10;
let num2: number = 15;

console.log(num1 === num2);   //false
console.log(num1 !== num2);   //true
console.log(num1 > num2);     //false
console.log(num1 < num2);     //true
console.log(num2 <= num2);    //true
console.log(num1 >= num2);    //false


console.log("Test using 'and' and 'or' operators:");
const number1: number = 10;
const number2: number = 5;

console.log(number1 > 9 && number2 < 5);   //false
console.log(number1 > 9 && number2 === 5);   //true
console.log(number1 > 9 || number2 < 5);   //true
console.log(number1 < 9 || number2 < 0);   //false
 
console.log("Test whether an item is in an array:");
let cities: string[] = ["karachi", "lahore", "islamabad", "multan"];
console.log(cities.includes("karachi"));   //true

console.log("Test whether an item is not in an array:");
let color: string[] = ["red", "blue", "green", "pink"];
console.log(color.includes("Red"));   //false