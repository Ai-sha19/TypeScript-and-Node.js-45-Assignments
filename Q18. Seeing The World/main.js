// 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has changed.
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
// Store five places i'd like to visit in an array
let placesToVisit = ["Makkah", " Madina ", " Dubai ", " Palestine ", " Kashmir "];
// Print the array in its original order
console.log(`\n Original Order: ${placesToVisit}`);
// Print the array in alphabetical order without modifying the actual list.
console.log("\nAlphabetical Order:");
console.log(placesToVisit.slice().sort());
// Print the array to show it's still in its original order
console.log(`\n Original order after sorting: ${placesToVisit}`);
// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse());
// Print the array again to show it's still in its original order
console.log(`\n Original order after sorting: ${placesToVisit}`);
// Reverse the order of the list and print the array to show that its order has changed.
placesToVisit.reverse();
console.log(`\n Reversed Order: ${placesToVisit}`);
// Reverse the order of the list again to bring it back to the original order
placesToVisit.reverse();
console.log(`\n Back to original order: ${placesToVisit}`);
// Sort the array in alphabetical order and print the array to show that its order has been changed
placesToVisit.sort();
console.log(`\nSorted in Alphabetical Order: ${placesToVisit}`);
// Sort the array in reverse alphabetical order & print the list to show that its order has changed.
placesToVisit.sort().reverse();
console.log(`\nSorted in Reverse Alphabetical Order: ${placesToVisit}`);
export {};
