// Assignment # 16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

// Starting the program from Excercise 15

let guestList: string[] = ["Imran Khan", "Ali Muhammad Khan", "Yasmeen Rashid"];

// Print statement about the guest who can't make it

console.log(`\nUnfortunately Mrs. ${guestList[2]} is not coming to the dinner.\n`);

// Modify the guest list to replace the guest who can't make it

guestList.splice(2, 1, 'Kamran Tessori');

// Message print for bigger table
console.log("Good News! We have found a bigger table for dinner.\n");

// Add one new guest to the beginning of the array
guestList.unshift("Sir Zia Khan");

// Add one new guest to the middle of the array
guestList.splice(guestList.length / 2, 0, "Sir Ameen Alam");

// Add one new guest at ending of the array
guestList.push('Imran Riaz Khan');

// Print a new set of invitation messages

console.log('Here is the new set of invitation messsage:\n ');

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} ,\nIt is my pleasure to invite your for dinner.\nThank you!\n`);
}
