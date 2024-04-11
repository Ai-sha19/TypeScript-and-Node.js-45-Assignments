// Assignment # 21. They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

// Define a TypeScript object representing student information
type student = {Name: string, rollNo: number, City: string, Center: string, Course: string}

let studentBio: student = {
    Name: "Aisha Iqbal",
    rollNo: 193272, 
    City: "Karachi",
    Center: "Governor House Karachi",
    Course: "Artificial Intelligence"
};

// Print the student object
console.log(studentBio);