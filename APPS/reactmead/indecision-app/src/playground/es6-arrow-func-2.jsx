const user = {
  name: 'Andriy',
  cities: ['Kiev', 'Odessa', 'Hamburg'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' lived in ' + city);
  }
};

// console.log(user.printPlacesLived());

// Challenge area:

const multiplier = {
  numbers: [3, 7, 11],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map(num => num * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
