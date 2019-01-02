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


/**
 * RANDOM WITH GAUSSIAN DISTRIBUTION
 */

let randNum1 = (Math.random() + Math.random()) / 2;
console.log(randNum1);
let randNum2 = (Math.random() + Math.random() + Math.random()) / 3;
console.log(randNum2);
let randNum3 = (Math.random() + Math.random() + Math.random() + Math.random()) / 4;
console.log(randNum3);

// v is the number of times random is summed and should be over >= 1
// return a random number between 0-1 exclusive
const randomG = (v) => {
  let r = 0;
  for (let i = v; i > 0; i--) {
    r += Math.random();
  }
  return r / v;
}

console.log('Random G:', randomG(4))