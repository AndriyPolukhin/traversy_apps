/**
 * SOME REFRESHERS OF ES6
 */

// CONST & LET | Block level scoping
// let name = 'Andriy';
// let test;

// name = 'Anastasia';

const person = {
  name: 'Andriy',
  age: '33'
}

person.name = 'Anastasia';
const nums = [1, 2, 3, 4];
nums.push(5);


// ARROW FUNCITONS || EVERYWHERE
// function sayHello() {
//   console.log('Hello there');
// }

const sayHello = (name) => console.log(`Hello there ${name}`);

// sayHello('Andriy');


// FOREACH || Loop Through an array
const fruits = ['Apples', 'Oranges', 'Grapes'];

// fruits.forEach((fruit, index) => console.log(fruit, index));

// MAP || Return a changed array, loop through lists
const singleFruit = fruits.map((fruit) => fruit.slice(0, -1).toUpperCase());
// console.log(singleFruit);

// FILTER || return an array to filter the state. use in redux state management
const people = [
  { id: 1, name: 'Andriy' },
  { id: 2, name: 'Anastasia' },
  { id: 3, name: 'Alexandra' },
];

const people2 = people.filter(person => person.id !== 3);
// console.log(people2);


// SPREAD
const arr = [1, 2, 3, 4];
const arr2 = [...arr, 5];
const arr3 = [...arr.filter(num => num !== 2)];


const persona = {
  name: 'Andriy',
  age: 33
}

const newPersona = {
  ...persona,
  email: 'andriy.polukhin@gmail.com'
}


// DESTRUCTURING
const profile = {
  name: 'Andriy Polukhin',
  address: {
    street: 'Rosengaten',
    city: 'Hamburg'
  },
  hobbies: ['movies', 'guitar', 'dancing']
}

const { name, hobbies, address } = profile;
const { street, city } = profile.address;



// CLASSES
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello, my name is ${this.name} and I'm ${this.age} old`
  }
}

const person1 = new Person('Andriy', 33);
const person2 = new Person('Anastasia', 29);


// SUBCLASSES
class Customer extends Person {
  constructor(name, age, balance) {
    super(name, age);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes ${this.balance}.00`;
  }
}

const customer1 = new Customer('Andriy', 33, 1450000);
console.log(customer1.info());


// MODULES

// // file 1 (file1.js)
// export const named = 'Andriy';
// export const numbers = [12, 3, 4];

// export default Person;

// // file 2 (file2.js)
// import { named, numbers } from './file1';
// import Person from './file1';

// console.log(named);