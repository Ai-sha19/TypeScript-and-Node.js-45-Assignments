// Assignment # 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

import { log } from "console";

// Array of magician's names

let magicianNames: string[] = ["Shin Lim", "Harry Houdini", "Criss Angel", "David Copperfield"];
console.log('Magician Names:');

// Pass the array to a function

function show_magicians(names: string[]): void {
       for (let i = 0; i < names.length; i++) {
              console.log(names[i]);
       }
}

// Calling the function 
show_magicians(magicianNames);