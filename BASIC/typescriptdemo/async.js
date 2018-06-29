/*
// Ex. 1
setTimeout(function () {
  console.log('I am asynchronous message');
}, 1000);
console.log('I am a synchronous message');

// Ex. 2
setTimeout(function () {
  console.log('I am an asynchronous message');
});
console.log('Test 1');
for (let i = 0; i < 10000; ++i) {
  doSomeStuff();
}
console.log('Test 2');
function doSomeStuff() {
  return 1 + 1;
}

// Ex. 3
let counter = 0;
let timer = setInterval(function () {
  console.log('I am an asynchronouse message');
  counter += 1;
  if (counter >= 5) {
    clearInterval(timer);
  }
}, 1000);
console.log('I am synchronous message');


// Ex. 4
let fs = require('fs');
fs.readFile('test.txt', 'utf8', function (error, data) {
  if (error) {
    throw error;
  }
  console.log("Asynchronous message. Content of test.txt", data);
});
console.log('Synchronous message');

// Ex. 5
let fs = require('fs');
console.log('1');

fs.readFile('test.txt', 'utf-8', function (error, data) {
  if (error) {
    throw error;
  }
  console.log('2');
});

console.log('3');
*/

function job(callback1, callback2) {
  callback1();

  callback2();
  callback2();
  callback2();
}

module.exports = job;