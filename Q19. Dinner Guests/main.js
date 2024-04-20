// Assignment # 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var guestList = ["Imran Khan", "Ali Muhammad Khan", "Yasmeen Rashid"];
// Modify the guest list to replace the guest who can't make it
guestList.splice(2, 1, 'Kamran Tessori');
// Add one new guest to the beginning of the array
guestList.unshift("Sir Zia Khan");
// Add one new guest to the middle of the array
guestList.splice(guestList.length / 2, 0, 'Sir Ameen Alam ');
// Add one new guest at ending of the array
guestList.push('Imran Riaz Khan');
// Using while loop to remove guests from the list until only two guests remain
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
}
// Removing the last two guests from the list and print the empty array
guestList.splice(0, guestList.length);
console.log('Empty guest list:', guestList);
// Print a message to the number of people inviting to the dinner
console.log("Total number of guests are : ".concat(guestList.length));
