
// CHALLENGE 1: FIND DUPLICATES IN A LIST


// Approach: Use two Sets.
// One Set keeps track of numbers we have seen.
// If a number is seen again, we add it to duplicates.

const numbers = [2, 5, 7, 2, 8, 5, 9, 2];

const seen = new Set();
const duplicates = new Set();

for (const number of numbers) {
    if (seen.has(number)) {
        duplicates.add(number);
    } else {
        seen.add(number);
    }
}

console.log("Challenge 1 - Duplicates:", [...duplicates]);

// CHALLENGE 2: COUNT FELLOWS WHO SCORED ABOVE X
// Approach: Use filter() to select fellows whose score
// is greater than the given score X, then count them.

const fellows = [
    { name: "John", score: 75 },
    { name: "Mary", score: 60 },
    { name: "Peter", score: 85 },
    { name: "Alice", score: 90 },
    { name: "Mark", score: 55 }
];

const x = 70;

const aboveX = fellows.filter(fellow => fellow.score > x);

console.log(
    "Challenge 2 - Fellows above " + x + ":",
    aboveX.length
);


// CHALLENGE 3: GROUP ITEMS BY CATEGORY

// Approach: Use an object to store each category.
// For every product, create the category if it doesn't exist,
// then add the product name to that category.

const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Phone", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Shoes", category: "Clothing" },
    { name: "Book", category: "Education" }
];

const groupedProducts = {};

for (const product of products) {
    if (!groupedProducts[product.category]) {
        groupedProducts[product.category] = [];
    }

    groupedProducts[product.category].push(product.name);
}

console.log("Challenge 3 - Products grouped by category:");
console.log(groupedProducts);

// CHALLENGE 4: FIND THE HIGHEST-SCORING FELLOW


// Approach: Start with the first fellow as the highest scorer.
// Compare every other fellow's score with the current highest score.
// Replace it when a higher score is found.

const students = [
    { name: "John", score: 72 },
    { name: "Mary", score: 88 },
    { name: "Peter", score: 95 },
    { name: "Alice", score: 81 }
];

let highest = students[0];

for (const student of students) {
    if (student.score > highest.score) {
        highest = student;
    }
}

console.log(
    "Challenge 4 - Highest scorer:",
    highest.name + " with " + highest.score
);