// Assignment # 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array of magician's names
let magicianNames = ["Shin Lim", "Harry Houdini", "Criss Angel", "David Copperfield"];
// Pass the array to a function
console.log('Magician Names:');
function show_magicians(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Calling the function 
show_magicians(magicianNames);
export {};
