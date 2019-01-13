// 1. Basic Structure

// (function () {
//   // 1. Declare private variables and functions

//   return {
//     // 2. Declare public variables and functions
//   }
// })();

// 2. STANDARD MODULE PATTERN:
// const UICtrl = (function () {
//   let text = 'Standard Module Pattern';

//   const changeText = function () {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function () {
//       changeText();
//       // console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();
// UICtrl.changeText();
// console.log(UICtrl.text);


// 3. REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  let data = [];

  function add(item) {
    data.push(item);
    console.log('Item Added...');
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({
  id: 1,
  name: 'Andriy'
});

ItemCtrl.add({
  id: 2,
  name: 'Nastena'
});

console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));










