// Assignment # 15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
// Starting the program from Excercise 14
let guestList = ["Imran Khan", "Ali Muhammad Khan", "Yasmeen Rashid"];
// Print statement about the guest who can't make it
console.log(`\nUnfortunately Mrs. ${guestList[2]} is not coming to the dinner.`);
// Modify the guest list to replace the guest who can't make it
guestList.splice(2, 1, 'Kamran Tessori');
// Print a second set of invitation messages
console.log("\nNew Invitation List : \n");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]} ,\nIt is my pleasure to invite you for dinner.\nThank you!\n`);
}
export {};
