// Assignment # 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

// Array of favorite fruits
const favourite_fruits: string[] = ["Mango", "banana", "grapes"];


// check for certain fruits using independent if statements
if (favourite_fruits.includes("Mango")) {
    console.log("I really like mangos!")
}

if (favourite_fruits.includes("banana")) {
    console.log("I really like bananas!")
}

if (favourite_fruits.includes("grapes")) {
    console.log("I really like grapes!")
}

if (favourite_fruits.includes("orange")) {
    console.log("I really like oranges!")
}

if (favourite_fruits.includes("strawberry")) {
    console.log("I really like strawberries!")
}