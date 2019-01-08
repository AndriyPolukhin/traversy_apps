// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     console.time('count');
//     setTimeout(() => resolve(`Hello from Promise`), 3000);
//   });
//   const error = true;
//   if (!error) {
//     const res = await promise;
//     console.timeEnd('count');
//     return res;
//   } else {
//     await Promise.reject(new Error(`Something went wrong`));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err))

async function getUsers() {
  // await the response of the fetch call
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  // only proceed once its resolved
  const data = await response.json();
  // only proceed once second promise is resolved
  return data;
}

getUsers()
  .then(users => console.log(users))