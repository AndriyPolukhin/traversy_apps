/*
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('hello world');
  }, 2000);
});

promise.then(function (data) {
  console.log(data);
});
*/
/*
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('hello world');
  }, 2000);
});

promise.then(function (data) {
  console.log(data + ' 1');
});

promise.then(function (data) {
  console.log(data + ' 2');
});

promise.then(function (data) {
  console.log(data + ' 3');
});
*/
/*
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('We are all going to live real cool!');
  }, 2000);
});

promise.then(function success(data) {
  console.log(data);
}, function error(data) {
  console.error(data);
});
*/

/*
const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject('The technology is real cool here!');
  }, 2000);
});

promise.then(function success(data) {
  console.log(data + ' 1');
}, function error(data) {
  console.error(data + ' 1');
});

promise.then(function success(data) {
  console.log(data + ' 2');
}, function error(data) {
  console.error(data + ' 2');
});

promise.then(function success(data) {
  console.log(data + ' 3');
}, function error(data) {
  console.error(data + ' 3');
});
*/

const promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve('hello world 1');
    resolve('hello world 2');
    resolve('hello world 3');
    resolve('hello world 4');
  }, 1000);
});

promise.then(function success(data) {
  console.log(data);
});