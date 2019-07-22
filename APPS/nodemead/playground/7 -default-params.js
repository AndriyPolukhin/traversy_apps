const greet = (name = 'Friend', age) => {
  console.log(`Hello ${name}, your ${age} old`);
};

greet('Andriy', 33);
greet();
