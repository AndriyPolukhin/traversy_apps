/*
function job(delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('Resolving', delay);
      resolve('done ' + delay);
    }, delay);
  });
}

let promise = Promise.all([job(1000), job(2000), job(500), job(1500)]);

promise
  .then(data => {
    console.log('All done');
    data.forEach(text => {
      console.log(text);
    });
  });

  */
let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 300, 'p4');
});

let p5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1.catch(() => {}), p2.catch(() => {}), p3.catch(() => {}), p4.catch(() => {}), p5.catch(() => {})]);

promise
  .then(data => {
    data.forEach(data => {
      console.log(data);
    });
  })
  .catch(error => {
    console.error('error', error);
  });