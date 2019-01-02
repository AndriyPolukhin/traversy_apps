/**
 * BITWISE OPERATORS
 */

// Number Parity Check

const isEven = n => n % 2 === 0;
const isOdd = n => (isEven(n) === false);
console.log(isOdd(1));

const Effective = n => (n & 1) ? console.log('Odd') : console.log('Even');
Effective(1);

// Swapping two integer values without additional memoru allocation
let a = 11, b = 22;
a = a ^ b;
b = a ^ b;
a = a ^ b;
console.log("a = " + a + "; b = " + b);// a is now 22 and b is now 11

/**
 * BITWISE SHIFTING
 */

console.log(
  5 << 2,
  20 >> 2,
  -5 >> 3,
  -30 >>> 2
)













