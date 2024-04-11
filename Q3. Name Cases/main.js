"use strict";
// Assignment # 3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Storing a person name in a variable
let personName = "aIsHa iQbAl";
// for lowercase :
console.log(`Name in Lowercase: ${personName.toLowerCase()}`);
// for uppercase :
console.log(`Name in Uppercase: ${personName.toUpperCase()}`);
// for titlecase :
let step1 = personName.split(' ');
let step2 = step1.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
let step3 = step2.join(' ');
console.log(`Name is titlecase: ${step3}`);
