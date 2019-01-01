/**
 * ARITHMETIC (MATH)
 */

/**
 * I. CONSTANTS
 */


console.log('CONSTANTS:');

console.log(Math.E); // natural logarithm e
console.log(Math.LN10); // natural logarithm of 10
console.log(Math.LN2); // natural logarithm of 2
console.log(Math.LOG10E);// Base 10 logarithm of e
console.log(Math.LOG2E); // Base 2 logarithm of e
console.log(Math.PI); // Pi:the ratio of circle circumference to diameter (π)
console.log(Math.SQRT1_2); // Square root of 1/2
console.log(Math.SQRT2); // Square root of 2
console.log(Number.EPSILON); //Difference between one and the smallest value greater than one representable as a Number
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Infinity);

console.log('REMAINDER');

console.log(42 % 10);
console.log(42 % -10);
console.log(-42 % 10);
console.log(-42 % -10);
console.log(-40 % 10);
console.log(40 % 10);

// 1. Test if an integer is (not) divisible by another number:
let x = 4;
console.log(x % 4 === 0);  // true if x is divisible by 4
console.log(x % 2 === 0); // true if x is even number
console.log(x % 2 != 0) // true if x is odd number

// 2. Implement cyclic increment/decrement of value within [0, n) interval
/*
let n = 5; //given n
let i = 0;
function inc() {
  i = (i + 1) % n;
}
while (true) {
  inc();
  // update somethin with i
}

let n = 4;
let i = 0;
function delta(d) {
  i = (i + d + n) % n;
}
*/
// USING modulus to obtain the fractional part of a number
var myNum = 10 / 4;
var fraction = myNum % 1;
console.log(fraction);
myNum = -20 / 7;
fraction = myNum % 1;

console.log(fraction);