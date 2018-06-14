// JS NUGGETS
// Array iteration: 8 methods

// 1. forEach()
[1, 2, 3].forEach(function (item, index) {
    console.log(index + ':' + item);
});

// 2. map()
const three = [1, 2, 3];
const doubled = three.map(item => item * 2);
console.log(doubled);

// 3. filter()
const ints = [1, 2, 3];
const evens = ints.filter(item => item % 2 === 0);
console.log(evens);

// 4. reduce()
const sum = [1, 2, 3].reduce(function (result, item) {
    return result + item;
}, 0);
console.log(sum);

// 5. some()
const hasNegativeNumbers = [1, 2, 3, -1, 4].some( item => item < 0);
console.log(hasNegativeNumbers);

// 6. every()
const allPositiveNumbers = [1, 2, 3].every(item => item > 0);
console.log(allPositiveNumbers);

// 7. find()
const objects = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const found = objects.find(item => item.id === 'b');
console.log(found);

// 8. find index()
const objects2 = [{id: 'a'}, {id: 'b'}, {id: 'c'}];
const foundIndex = objects2.findIndex(item => item.id ==="b");
console.log(foundIndex);