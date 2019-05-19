// const fs = require('fs');

// const book = {
//   title: 'Ego is my Enemy',
//   author: 'Ryan Holiday'
// };

// const bookJson = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJson);

// Returns a buffer
// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJson = dataBuffer.toString();
// const data = JSON.parse(dataJson);

// console.log(dataJson);
// console.log(data);

//
// Challenge: Work with JSON and the file system
//
// 1. Load and parse the JSON data
// 2. Change the name and age property using your info
// 3. Stringify the changed object and overwrite the original data
// 4. Test your work by viewing data in the JSON  file
const fs = require('fs');

const dataBuffer = fs.readFileSync('1-json.json');
const dataJson = dataBuffer.toString();
let data = JSON.parse(dataJson);

const updates = {
  name: 'White Hole',
  planet: 'The Universe',
  age: 33
};

data = updates;

const dataString = JSON.stringify(data);
fs.writeFileSync('1-json.json', dataString);

console.log(dataString);
