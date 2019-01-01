/**
 * ROUNDING
 */

// ROUNDING
let a = Math.round(2.3);
let b = Math.round(2.7);
let c = Math.round(2.5);

console.log(a, b, c);

c = Math.round(-2.7);
console.log(c);
c = Math.round(-2.5);
console.log(c);

// Rounding Up
a = Math.ceil(2.3);
b = Math.ceil(2.7);
c = Math.ceil(-1.1);
console.log(a, b, c);

// Rounding down
a = Math.floor(2.3);
b = Math.floor(2.7);
c = Math.floor(-1.1);
console.log(a, b, c);

// Truncating
console.log(2.3 | 0);
console.log(-2.3 | 0);
console.log(NaN | 0);

console.log(Math.trunc(2.3));
console.log(Math.trunc(-2.3));
console.log(Math.trunc(2147483648.1));
console.log(Math.trunc(-2147483648.1));
console.log(Math.trunc(NaN));

// Rounding to decimal places
// Math.floor, Math.ceil(), and Math.round() can be used to round to a number of decimal places

// To round to 2 decimal places:

let myNum = 2 / 3;
console.log(myNum);
let multiplier = 100;
a = Math.round(myNum * multiplier) / multiplier;
b = Math.ceil(myNum * multiplier) / multiplier;
c = Math.floor(myNum * multiplier) / multiplier;

console.log(a, b, c);

// You can also round to a number of digits:
myNum = 10000 / 3;
console.log(myNum);
multiplier = 1 / 100;
a = Math.round(myNum * multiplier) / multiplier;
b = Math.ceil(myNum * multiplier) / multiplier;
c = Math.floor(myNum * multiplier) / multiplier;
console.log(a, b, c);

// value is the value to round
// places if positive the number of decimal places to round to
// places if negative the number of digits to round to
function roundTo(value, places) {
  let power = Math.pow(10, places);
  console.log(Math.round(value * power) / power);
  return Math.round(value * power) / power;
}

myNum = 10000 / 3;
roundTo(myNum, 2);
roundTo(myNum, 0);
roundTo(myNum, -2);

function ceilTo(value, places) {
  let power = Math.pow(10, places);
  return Math.ceil(value * power) / power;
}

function floorTo(value, places) {
  let power = Math.pow(10, places);
  return Math.floor(value * power) / power;
}

