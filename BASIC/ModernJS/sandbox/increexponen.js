/**
 * INCREMENTING
 */

// Postfix
let a = 5,
  b = a++,
  c = a;

console.log(a, b, c);

// Prefix
a = 5,
  b = ++a,
  c = a;

console.log(a, b, c);


/**
 * EXPONENTIATION (MATH>POW() OR **)
 */

a = 2,
  b = 3,
  c = Math.pow(a, b);

console.log(a, b, c);

// es7
a = 2,
  b = 3,
  c = a ** b;
console.log(a, b, c);

// Use Math.pow to find the nth root of a number.
let v, n, d;
Math.pow(v, 1 / n); // where v is any positive real number
// and n is any positive integer

a = 16;
b = Math.pow(a, 1 / 2); // return the square root of 16 = 4
c = Math.pow(a, 1 / 3); // return cubed root of 16 = 2.519...
d = Math.pow(a, 1 / 4); // return 4th root of 16 = 2

console.log(a, b, c, d);