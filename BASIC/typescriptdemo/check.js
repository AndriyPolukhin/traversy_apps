/*
function jobby() {
  return new Promise(((resolve, reject) => {
    reject();
  }));
}

const promise = jobby();

promise
  .then(() => {
    console.log('Success 1');
  })
  .then(() => {
    console.log('Success 2');
  })
  .then(() => {
    console.log('Success 3');
  })
  .catch(() => {
    console.log('Error 1');
  })
  .then(() => {
    console.log('Success 4');
  });
*/
/*
function job(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

const promiseTwo = job(true);

promiseTwo
  .then(function (data) {
    console.log(data);
    return job(false);
  })
  .catch(function (error) {
    console.log(error);
    return 'Error caught';
  })
  .then(function (data) {
    console.log(data);
    return job(true);
  })
  .catch(function (error) {
    console.log(error);
  });
  */

function jobdy(state) {
  return new Promise((resolve, reject) => {
    if (state) {
      resolve('success');
    } else {
      reject('error');
    }
  });
}

let promise = jobdy(true);

promise
  .then(data => {
    console.log(data);
    return jobdy(true);
  })
  .then(data => {
    if (data !== 'victory') {
      throw 'Defeat';
    }
    return jobdy(true);
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log(error);
    return jobdy(false);
  })
  .then(data => {
    console.log(data);
    return jobdy(true);
  })
  .catch(error => {
    console.log(error);
    return 'Error caught';
  })
  .then(data => {
    console.log(data);
    return new Error('test');
  })
  .then(data => {
    console.log('Success:', data.message);
  })
  .catch(data => {
    console.log('Error:', data.message);
  });