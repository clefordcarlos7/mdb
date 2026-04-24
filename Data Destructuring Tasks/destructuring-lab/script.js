// Basic array destructuring
const numbers = [10, 20, 30, 40];

const [a, b, c] = numbers;
console.log("a:", a); // 10
console.log("b:", b); // 20
console.log("c:", c); // 30

// Skipping elements
const [first, , third] = numbers;
console.log("first:", first); // 10
console.log("third:", third); // 30

const person = {
    name: "John",
    age: 20,
    city: "Manila"
};

const { name, age } = person;
console.log("name:", name);
console.log("age:", age);

const student = {
    id: 1,
    info: {
        fullName: "juan",
        grades: [90, 85, 88]
    }
};

// Nested destructuring
const {
    info: {
        fullName,
        grades: [g1, g2]
    }
} = student;

console.log("Name:", fullName);
console.log("Grade1:", g1);

// Default values
const { section = "A" } = student;
console.log("Section:", section);

// Renaming variables
const { id: studentId } = student;
console.log("Student ID:", studentId);

// Object destructuring in function parameter
function displayUser({ name, age }) {
    console.log(`User: ${name}, Age: ${age}`);
}

displayUser({ name: "Anna", age: 22 });

// Array destructuring in function
function getCoordinates([x, y]) {
    console.log(`X: ${x}, Y: ${y}`);
}

getCoordinates([5, 10]);