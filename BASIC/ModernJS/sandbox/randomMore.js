/**
 * Get Random between two numbers
 */

const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

console.log(randomBetween(23, 32))

// Random between(0, 10)
console.log(Math.floor(Math.random() * 11));

// Random between(1, 10)
console.log(Math.floor(Math.random() * 10) + 1);

// Random between(5, 20)
console.log(Math.floor(Math.random() * 16) + 5);

// Random between(-10, -2)
console.log(Math.floor(Math.random() * 9) - 10);