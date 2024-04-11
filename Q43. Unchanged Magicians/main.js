// Assignment # 43. Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicianNames = ["Shin Lim", "Harry Houdini", "Criss Angel", "David Copperfield"];
function copyArray(arr) {
    return [...arr];
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `The Great ${magicians[i]}`;
    }
}
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
const copyMagicianArray = copyArray(magicianNames);
make_great(copyMagicianArray);
console.log('\nThis is my original array:');
show_magicians(magicianNames);
console.log('\nThis is my modified copy of the array:');
show_magicians(copyMagicianArray);
export {};
