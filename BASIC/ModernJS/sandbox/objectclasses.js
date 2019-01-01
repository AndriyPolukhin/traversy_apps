/**
 * Find an object class
 */


//We want this function to take the sum of the numbers passed to it
//It can be called as sum(1, 2, 3) or sum([1, 2, 3]) and should give 6

function sum(...arguments) {
  if (arguments.length === 1) {
    const [firstArg] = arguments;
    if (firstArg instanceof Array) {
      return sum(...firstArg)
    }
  }
  return arguments.reduce((a, b) => a + b)
}

console.log(sum(1, 2, 3));
console.log(sum([1, 2, 3]));
console.log(sum(4));

// Note that primitive values are not considered instances of any class:
console.log(2 instanceof Number);
console.log('abc' instanceof String);
console.log(true instanceof Boolean);
console.log(Symbol() instanceof Symbol);

// Whereas instanceof also catches instances of subclasses,
// using obj.constructor does not
console.log([] instanceof Object, [] instanceof Array);
console.log([].contructor === Object, [].constructor === Array);

function isNumber(value) {
  // null.constructor and undefined.constructor throw an error when accessed
  if (value === null || value === undefined) return false;
  return value.constructor === Number
}

console.log(isNumber(null), isNumber(undefined));
console.log(isNumber('abc'), isNumber([]), isNumber(() => 1));
console.log(isNumber(0), isNumber(Number('10.1')), isNumber(NaN));


// Getting object type by constructor name
console.log(Object.prototype.toString.call("String"));
console.log(Object.prototype.toString.call(42));
console.log(Object.prototype.toString.call(true));
console.log(Object.prototype.toString.call(Object()));
console.log(Object.prototype.toString.call({}));
console.log(Object.prototype.toString.call(function () { }));
console.log(Object.prototype.toString.call(new Date(2019, 01, 01)));
console.log(Object.prototype.toString.call(new RegExp()));
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(null));
console.log(Object.prototype.toString.call(undefined));
console.log(Object.prototype.toString.call(Error()));