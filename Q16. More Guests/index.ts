// 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// guest list
let list: string[] = ["Asad", "Ammar", "Ali"];

// found a bigger dinner table.
console.log("My dining table has expanded, and so has the possibility for laughter and shared moments.");

// Add one new guest to the beginning of the list
list.unshift("Saad");

// Add one new guest to the middle of the list
list.splice(2,0,"kamran");

// add one new guest to the end of your list
list.push("Zaroon");

console.log("New Invitation Messages:");
for (const guest of list) {
    console.log(`Dear ${guest}, I would be honored to have you join me for dinner.`);
}