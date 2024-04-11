// Assignment # 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Imran Khan", "Ali Muhammad Khan", "Yasmeen Rashid"];
// Modify the guest list to replace the guest who can't make it
guestList.splice(2, 1, 'Kamran Tessori');
// Add one new guest to the beginning of the array
guestList.unshift("Sir Zia Khan");
// Making a variable for storing a middle index of the array
let middleIndex = Math.floor(guestList.length / 2);
// Add one new guest to the middle of the array
guestList.splice(middleIndex, 0, 'Sir Ameen Alam ');
// Add one new guest at ending of the array
guestList.push('Imran Riaz Khan');
// Using while loop to remove guests from the list until only two guests remain
while (guestList.length > 2) {
    const removeGuest = guestList.pop();
}
// Removing the last two guests from the list. 
guestList.splice(0, 2);
// Print the empty list of array
console.log('Empty List: ', guestList);
// Print a message to the number of people inviting to the dinner
console.log(`Total number of guests are : ${guestList.length}`);
export {};
// // Working with the programs 14 to 18
// let guestList: string[] = ["Imran Khan", "Ali Muhammad Khan", "Yasmeen Rashid"];
// let newGuestList = guestList[2] = "Arif Alvi";
// guestList.unshift("Shah Mehmood Qureshi");
// guestList.splice(2, 0, "Murad Saeed");
// guestList.push("Rehana Dar");
// // Remove guests from the list until only two guests remain
// while (guestList.length > 2) {
//     guestList.pop();
// }
// // Remove the last two names from the list. This method is recommended in this question 
// guestList.splice(0, 2);
// // Print the empty list
// console.log(guestList);
// // Print a message to the number of people inviting to the dinner
// console.log(`Total number of guests are : ${guestList.length}`);
