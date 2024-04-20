// Assignment # 17. Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

// Starting the program from Excercise 16
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

console.log('Here is the new set of invitation:\n ');

for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} ,\nIt is my pleasure to invite your for dinner.\nThank you!\n`);
}

// Inform that only two guets can be invited for dinner
console.log("\nUnfortunately, the new dinner table won't arrive on time, so I can only invite two guests for dinner\n");


// Using while loop to remove guests from the list until only two guests remain
while (guestList.length > 2) {
    const removeGuest = guestList.pop();
    console.log(`Sorry Mr. ${removeGuest}, I can't invite you to dinner.`);
}

// Print invitations to the remaining two guests
console.log(`\nInvitation to the last 2 Guests:`);
guestList.forEach(lastTwo => {
    console.log(`Luckily ${lastTwo}, you are still invited to dinner.`);
});

// Removing the last two guests from the list. 
guestList.splice(0, guestList.length);

// Print the empty list of array
console.log('Empty List: ', guestList);


















