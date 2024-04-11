// Assignment # 24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
var myName = "Aisha";
console.log(myName == "Aisha"); //true 
console.log(myName !== "aisha"); //true     
// Test using the lower case function
var upperCaseString = "AISHA";
var lowerCaseString = "aisha";
console.log(upperCaseString.toLowerCase() === lowerCaseString); //true
// Numerical tests
var num1 = 10;
var num2 = 15;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num2 <= num2); //true
console.log(num1 >= num2); //false
// Test using "and" and "or" operators
var number1 = 10;
var number2 = 5;
console.log(number1 > 9 && number2 < 5); //false
console.log(number1 > 9 || number2 < 5); //true
// Test whether an item is in an array
var cities = ["karachi", "lahore", "islamabad", "multan"];
console.log(cities.includes("karachi")); //true
// Test whether an item is not in an array
var color = ["red", "blue", "green", "pink"];
console.log(color.includes("Red")); //false
