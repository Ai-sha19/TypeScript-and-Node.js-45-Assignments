// Assignment # 37. Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//     console.log(`T-shirt Summary: Size - ${size}, Message - "${message}"`);
//   }

function make_shirt(size: string = "Large", message: string = "I love TypeScript") : void {
     
     console.log(`The size of the shirt is : ${size}`);
     console.log(`Message on shirt : ${message}`);
 }

// Making a large shirt with the default message
make_shirt();

// Making a medium shirt with the default message
make_shirt("Medium");

// Making a small shirt with a custom message
make_shirt("Small", "Future Software Developer"); 