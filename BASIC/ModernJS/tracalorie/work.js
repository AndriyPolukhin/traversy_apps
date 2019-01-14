/**
 * MODULE PATTERN
 * 1. Storage Controller
 * 2. Item Controller
 * 3. UI Controller
 * 4. App Controller
 */

// 1. Storage Controller

// 2. Item Controller
const ItemCtrl = (function () {
  // Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };

  // Data Structure / State(if React)
  const state = {
    items: [
      // { id: 0, name: 'Steak Dinner', calories: 1200 },
      // { id: 1, name: 'Fired Eggs', calories: 500 },
      // { id: 2, name: 'Cream Cheese', calories: 300 },
    ],
    currentItem: null,
    totalCalories: 0
  };

  // Public methods
  return {

    getItems() {
      return state.items;
    },

    addItem(name, calories) {
      // Create an ID
      let ID;
      if (state.items.length > 0) {
        ID = state.items[state.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Calories to number
      calories = parseInt(calories);

      // Create New Item
      newItem = new Item(ID, name, calories);
      // Add to the items array
      state.items.push(newItem);

      return newItem;
    },

    getTotalCalories() {
      let total = 0;
      // Loop throught items and add cals
      state.items.forEach((item) => total += item.calories);

      // Set the total cal in data structure
      state.totalCalories = total;
      // Return
      return state.totalCalories;

    },

    logState() {
      return state;
    }
  };
}());

// 3. UI Controller
const UICtrl = (function () {

  // UI SELECTORS
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  };

  // Public methods
  return {
    populateItemList(items) {
      let html = '';

      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
         <a href="#" class="secondary-content">
           <i class="edit-item fas fa-pencil-alt"></i>
         </a>
        </li>
        `;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },

    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      };
    },

    addListItem(item) {
      // Show  the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create a li element
      const li = document.createElement('li');
      // Add Class
      li.className = 'collection-item';
      // Add Id
      li.id = `item-${item.id}`;
      // Add the HTML
      li.innerHTML = `
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
            <a href="#" class="secondary-content">
          <i class="edit-item fas fa-pencil-alt"></i>
      </a>
      `;
      // Inster item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    clearInput() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },

    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },

    showTotalCalories(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    getSelectors() {
      return UISelectors;
    }
  };
}());

// 4. App Controller
const App = (function (ItemCtrl, UICtrl) {
  // console.log(ItemCtrl.logState());
  // console.log(ItemCtrl.getItems());

  // Load Event Listeners
  const loadEventListeners = function () {
    // Get UI selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  };

  // Add item submit
  const itemAddSubmit = function (e) {
    // Get from input from UICtrl
    const input = UICtrl.getItemInput();

    // Check for name and calories
    if (input.name !== '' && input.calories !== '') {

      // Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);

      // Add Item to UI list
      UICtrl.addListItem(newItem);

      // Get the total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add Total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  };

  // Public methods
  return {
    init() {
      // console.log(`Initializing the App:`);
      // Fetch Items from data structures
      const items = ItemCtrl.getItems();
      // console.log(items);

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // Populate list with items
        UICtrl.populateItemList(items);
      }

      // Get the total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // Add Total calories to UI
      UICtrl.showTotalCalories(totalCalories);

      // Load Event Listeners
      loadEventListeners();
    }
  };
}(ItemCtrl, UICtrl));

// 5. Initializing the App
App.init();
