// Object property
const name = 'Andriy';
const userAge = 33;

const user = {
  name,
  age: userAge,
  location: 'Kiyv'
};

console.log(user);

// Obect destructuring
const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.5
};

// const { label: productLabel, stock, rating = 5 } = product;

// console.log(productLabel);
// console.log(stock);
// console.log(rating);

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock);
};

transaction('order', product);
