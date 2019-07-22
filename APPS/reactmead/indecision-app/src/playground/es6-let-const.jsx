var nameVar = 'Anastasia';
var nameVar = 'Andriy';
console.log('nameVar:', nameVar);

let nameLet = 'Anastasia';
nameLet = 'Alexandra';
console.log('nameLet', nameLet);

const nameConst = 'Andriy';
console.log('nameConst', nameConst);

// Block scope
var fullName = 'Anastasia Polukhin';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);
