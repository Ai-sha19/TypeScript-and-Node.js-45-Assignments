// Assignment # 18. Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

import { log } from "console";

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

// Making the array of place to visit and prints it's original order
let placesToVisit: string[] = ['Dubai', 'Istanbol', 'Norway', 'China', 'Paris'];
console.log('\nOriginal Order:' ,placesToVisit);

// Print the array in Alphabetical Order without modifying the actual list.
console.log("\nAlphabetical Order:", [...placesToVisit].sort());

// Show that the array is still in it's original order
console.log('\nOriginal Order after sorting:', placesToVisit);

// Print the array in reverse alphabetical order without changing the original list
console.log("\nReverse Alphabetical Order:", [...placesToVisit].sort().reverse());

// Show that the array is still in it's original order
console.log('\nOriginal Order after sorting:', placesToVisit);

// Reverse the order of the list and print the array to show that its order has changed.
console.log('\nOriginal Array Reversed Order:', placesToVisit.reverse());

// Reverse the order of the list again to bring it back to the original order
console.log('\nBack to Original Order:', placesToVisit.reverse());

// Print the array to show that it's order has been changed in Alphabetical Order now
console.log('\nSorted in Alphabetical Order:', placesToVisit.sort());

// Print the array again in reverse alphabetical order to show that its order has changed.
console.log('\nOriginal Array Reverse Alphabetical Order:', placesToVisit.reverse());
