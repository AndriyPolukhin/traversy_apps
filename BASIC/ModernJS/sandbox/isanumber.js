/**
 * BUILT-IN CONSTANTS
 */

// console.log(null == undefined,null === undefined,typeof null);

const a = null;
// console.log(a === null);

/**
 *  window.isNaN();
 * */

console.log('Is NaN a number:', isNaN(NaN));
console.log('Is 1 not a number:', isNaN(1));
console.log('Is -2e-4 not a number:', isNaN(-2e-4));
console.log('Is Infinity not a number:', isNaN(Infinity));
console.log('Is true not a number:', isNaN(true));
console.log('Is true not a number:', isNaN(true));

console.log('Is "" not a number:', isNaN(""));
console.log('Is "" not a number:', isNaN(""));
console.log('Is " " not a number:', isNaN(" "));
console.log('Is " " not a number:', isNaN(" "));
console.log('Is "45.3" not a number:', isNaN("45.3"));
console.log('Is "45.3" not a number:', isNaN("45.3"));
console.log('Is "1.2e3" not a number:', isNaN("1.2e3"));
console.log('Is "1.2e3" not a number:', isNaN("1.2e3"));
console.log('Is "Infinity" not a number:', isNaN("Infinity"));
console.log('Is "Infinity" not a number:', isNaN("Infinity"));
console.log('Is new Date not a number:', isNaN(new Date));
console.log('Is new Date not a number:', isNaN(new Date));
console.log('Is "10$" not a number:', isNaN("10$"));
console.log('Is "10$" not a number:', isNaN("10$"));
console.log('Is "hello" not a number:', isNaN("hello"));
console.log('Is "hello" not a number:', isNaN("hello"));
console.log('Is undefined not a number:', isNaN(undefined));
console.log('Is undefined not a number:', isNaN(undefined));
console.log('Is  not a number:', isNaN());
console.log('Is function(){} not a number:', isNaN(function () { }));
console.log('Is {} not a number:', isNaN({}));
console.log('Is [1,2] not a number:', isNaN([1, 2]));
console.log('Is Number.isNaN() not a number:', Number.isNaN());