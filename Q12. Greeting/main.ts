// Assignment # 12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Friends name in an array
let names: string[] = ["Naeema", "Afshan", "Misbah", "Khushi"];

// Printing personalized greeting message for each person
for(let message of names){
    console.log(`Hello ${message}, Have a great day!`);
}