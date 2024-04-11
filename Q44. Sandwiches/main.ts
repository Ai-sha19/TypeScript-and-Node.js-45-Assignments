// Assignment # 44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

// Function to print the sandwich summary

function sandwichItems(items: string[]): void {
    console.log('\nYour sandwich will have:');
    for (let item of items) {
        console.log('- ' + item);
    }
    console.log("Enjoy your sandwich!\n");
}


// Calling the function three times with different number of arguments

sandwichItems(["Ham", "Cheese", "Mashrooms", "Lettuce"]);
sandwichItems(["Salad", "Chicken", "Onion"]);
sandwichItems(["Tomato", "Chicken", "Mayonnaise", "Cheese"]);

