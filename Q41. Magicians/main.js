// Assignment # 41. Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
// Array of magician's names
var magicianNames = ["Shin Lim", "Harry Houdini", "Criss Angel", "David Copperfield"];
console.log('Magician Names:');
// Pass the array to a function
function show_magicians(names) {
    for (var i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
// Calling the function 
show_magicians(magicianNames);
