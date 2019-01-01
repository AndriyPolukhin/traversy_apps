/**
 * RANDOM
 */

let a = Math.random();
// console.log(a);

function getRandom() {
  return Math.random();
}

getRandom();

// Random in Range
getRandomArbitrary = (min, max) => {
  let a = Math.random() * (max - min) + min;
  console.log(a);
  return a;
}

getRandomArbitrary(2, 6);

getRandomInt = (min, max) => {
  let a = Math.floor(Math.random() * (max - min) + min);
  console.log(a);
  return a;
}

getRandomInt(3, 117);

getRandomIntInclusive = (min, max) => {
  let a = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(a);
  return a;
}

getRandomIntInclusive(3, 117);



/**
 * Addition
 */

a = 9,
  b = 3,
  c = 8,
  d = a + b + c;
console.log(a, b, c, d);

console.log(null + null);
console.log(null + undefined);
console.log(null + {});
console.log(null + '');

console.log("123" + 1);

console.log(true + 1);
console.log(false + 5);
console.log(null + 1);
console.log(undefined + 1);

console.log(true + '1');
console.log(false + 'bar');









