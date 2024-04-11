// Assignment # 14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
// Guest list of three people
let guestList = ["Imran Khan", "Ali Muhammad Khan", "Yasmeen Rashid"];
// Printing invitation messages to each person
for (let i = 0; i < guestList.length; i++) {
    console.log(`\nDear ${guestList[i]},\nIt is my pleasure to invite you for dinner.\nThank you!\n`);
}
export {};
