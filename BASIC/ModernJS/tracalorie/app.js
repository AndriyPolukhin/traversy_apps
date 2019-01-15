/**
 * MODULE PATTERN
 * 1. Storage Controller
 * 2. Item Controller
 * 3. UI Controller
 * 4. App Controller
 */

// 1. Storage Controller
const StorageCtrl = (function () {

  // Public methods
  return {
    storeItem(item) {
      let items;
      // if there any items in LS
      if (localStorage.getItem('items') === null) {
        items = [];
        // push new item
        items.push(item);
        // store to local storage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // Get the data from Local Stoage
        items = JSON.parse(localStorage.getItem('items'));
        // Push the new item to the items
        items.push(item);
        // Re set the local storage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStorage() {
      let items;
      if (localStorage.getItem('items') === null) {
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage(updatedItem) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach((item, index) => {
        if (updatedItem.id === item.id) {
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStorage(id) {
      let items = JSON.parse(localStorage.getItem('items'));
      items.forEach((item, index) => {
        if (item.id === id) {
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemsFromStorage() {
      localStorage.removeItem('items');
    }
  }
})();

// 2. Item Controller
const ItemCtrl = (function () {
  // 2.1 Item Constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // 2.2 Data Structure / STATE
  const state = {
    /*
    items: [
      { id: 0, name: 'Fruit Candy', calories: 1200 },
       { id: 1, name: 'Apples', calories: 400 },
       { id: 2, name: 'Ginger Tea', calories: 500 }
      ],
      */
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }

  // 2.3 Public methods
  return {

    // 2.3.1 Get Items to display in UI
    getItems() {
      return state.items;
    },
    // 2.3.2 Add Items to the state
    addItem(name, calories) {
      let ID;
      // Greate an ID
      if (state.items.length > 0) {
        ID = state.items[state.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      // Calories to number
      calories = parseInt(calories);
      // Create new item
      newItem = new Item(ID, name, calories);
      // Add to the items array
      state.items.push(newItem);
      return newItem;
    },
    // 2.3.3 Get Item by Id
    getItemById(id) {
      let found = null;
      // Loop through the items
      state.items.forEach((item) => {
        if (item.id === id) {
          found = item;
        }
      });
      return found;
    },
    // 2.3.4. Update Item Function
    updateItem(name, calories) {
      // Calories to number
      calories = parseInt(calories);

      let found = null;
      // Loop through the items
      state.items.forEach((item) => {
        if (item.id === state.currentItem.id) {
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    // 2.3.5 Delete Item
    deleteItem(id) {
      // get ids
      ids = state.items.map((item) => {
        return item.id
      });
      // get index
      const index = ids.indexOf(id);
      // splice it out / remove
      state.items.splice(index, 1);
    },
    // 2.4.6 Clear all Items
    clearAllItems() {
      state.items = [];
    },
    // 2.3.5 Set Current Item
    setCurrentItem(item) {
      state.currentItem = item;
    },
    // 2.3.5 Get current Item
    getCurrentItem() {
      return state.currentItem;
    },
    // 2.3.5 Get total calories
    getTotalCalories() {
      let total = 0;
      // Loop throught the items and add calories
      state.items.forEach((item) => total += item.calories);
      // Assign the total to the state
      state.totalCalories = total;
      // Return the state data
      return state.totalCalories;
    },
    // 2.3.5 Log State
    logState() {
      return state;
    }
  }

})();

// 3. UI Controller
const UICtrl = (function () {

  // 3.1 UISelectors for scalability
  const UISelectors = {
    itemList: '#item-list',
    listItems: '#item-list li',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.clear-btn',
    itemNameInput: '#item-name',
    itemCaloriesInput: '#item-calories',
    totalCalories: '.total-calories'
  }

  // 3.2 Public methods
  return {
    // 3.2.1 Populate the list item to display
    populateItemList(items) {
      let html = '';
      items.forEach((item) => {
        html += `
        <li class="collection-item" id="item-${item.id}">
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="fas fa-pencil-alt edit-item"></i>
          </a>
      </li>
        `;
      });
      // 3.2.2 Insert List Items into the HTML
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    // 3.3.2 Get the item input
    getItemInput() {
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value
      }
    },
    // 3.3.3 Get List Item
    addListItem(item) {
      // Show the list
      document.querySelector(UISelectors.itemList).style.display = 'block';
      // Create list element
      const li = document.createElement('li');
      // Add a class
      li.className = 'collection-item';
      // Add ID
      li.id = `item-${item.id}`;
      // Add HTML
      li.innerHTML = `
      <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
      <a href="#" class="secondary-content">
        <i class="fas fa-pencil-alt edit-item"></i>
      </a>
      `;
      // Insert Item
      document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li);
    },
    // 3.3.4 UPdate list item
    updateListItem(item) {
      // get the list items from the DOM
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // Turn the Node list into an Array
      listItems = Array.from(listItems);
      // Loop throught
      listItems.forEach((listItem) => {

        const itemID = listItem.getAttribute('id');

        if (itemID === `item-${item.id}`) {
          document.querySelector(`#${itemID}`).innerHTML = `
          <strong>${item.name}: </strong> <em>${item.calories} Calories</em>
          <a href="#" class="secondary-content">
            <i class="fas fa-pencil-alt edit-item"></i>
           </a>
          `;
        }
      });
    },
    deleteListItem(id) {
      const itemID = `#item-${id}`;
      const item = document.querySelector(itemID);
      item.remove();
    },
    // 3.3.5 Clear input
    clearInput() {
      document.querySelector(UISelectors.itemNameInput).value = '';
      document.querySelector(UISelectors.itemCaloriesInput).value = '';
    },
    addItemToForm() {
      document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
      document.querySelector(UISelectors.itemCaloriesInput).value = ItemCtrl.getCurrentItem().calories;
      UICtrl.showEditState();
    },
    // 3.3.5 Remove Itends
    removeAllItems() {
      // get all the list items
      let listItems = document.querySelectorAll(UISelectors.listItems);
      // create an array from a node list
      listItems = Array.from(listItems);
      // loop throught
      listItems.forEach((item) => item.remove());
    },
    // 3.3.5 Hide the items list if it's empty
    hideList() {
      document.querySelector(UISelectors.itemList).style.display = 'none';
    },
    //3.3.6 Show total calories
    showTotalCalories(totalCalories) {
      document.querySelector(UISelectors.totalCalories).textContent = totalCalories;
    },
    //3.3.7 Edit State
    clearEditState() {
      UICtrl.clearInput();
      document.querySelector(UISelectors.updateBtn).style.display = 'none';
      document.querySelector(UISelectors.deleteBtn).style.display = 'none';
      document.querySelector(UISelectors.backBtn).style.display = 'none';
      document.querySelector(UISelectors.addBtn).style.display = 'inline';
    },
    showEditState() {
      document.querySelector(UISelectors.updateBtn).style.display = 'inline';
      document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
      document.querySelector(UISelectors.backBtn).style.display = 'inline';
      document.querySelector(UISelectors.addBtn).style.display = 'none';
    },
    // 3.3.5 Get the selectors available for use in other functions
    getSelectors() {
      return UISelectors;
    }
  }
})();

// 4. App Controller
const App = (function (ItemCtrl, UICtrl, StorageCtrl) {
  // console.log(ItemCtrl.logState());

  // 4.1 Load Event Listeners function() for all events
  const loadEventListeners = function () {
    // 4.1.1 Get the selectors to use in eventlisteners
    const UISelectors = UICtrl.getSelectors();

    // 4.1.2 Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disable submit on Enter
    document.addEventListener('keypress', function (e) {
      if (e.keyCode === 13 || e.which === 13) {
        e.preventDefault();
        return false;
      }
    });

    // 4.1.3 Edit Icon click event
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // 4.1.4 Update btn event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

    // 4.1.5 Delete Button event
    document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);
    // 4.1.6 Back Button Event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);
    // 4.1.7 Clear Button Event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsclick);

  }
  // 4.2 Add Item submit
  const itemAddSubmit = function (e) {
    // 4.2.1 Get form input from the UI controller
    const input = UICtrl.getItemInput();

    // 4.2.2 Check for name and calories input values
    if (input.name !== '' && input.calories !== '') {
      // 4.2.3 Add Item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
      // 4.2.4 Add Item to the UI lsit
      UICtrl.addListItem(newItem);
      // 4.2.5 Get the total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      // 4.2.6 Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);
      // 4.2.7 Store in LOCAL STORAGE
      StorageCtrl.storeItem(newItem);
      // 4.2.8 Clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // 4.3 Click Edit Item
  const itemEditClick = function (e) {
    if (e.target.classList.contains('edit-item')) {
      // get the list item id (item-0, item-1, item-2)
      const listId = e.target.parentNode.parentNode.id;

      // Break into an array
      const listIdArray = listId.split('-');
      // Get the actual id
      const id = parseInt(listIdArray[1]);
      // Get item
      const itemToEdit = ItemCtrl.getItemById(id);
      // Set Current Item
      ItemCtrl.setCurrentItem(itemToEdit);
      // Add Item to form
      UICtrl.addItemToForm();
    }
    e.preventDefault();
  }

  // 4.4 Item Update Submit
  const itemUpdateSubmit = function (e) {
    // 4.4.1 Get item input
    const input = UICtrl.getItemInput();
    // 4.4.2 Update item
    const updatedItem = ItemCtrl.updateItem(input.name, input.calories);
    // 4.4.3 Update the UI
    UICtrl.updateListItem(updatedItem);

    // renew the data in ui
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);

    // Update local storage
    StorageCtrl.updateItemStorage(updatedItem);
    // Clear the state
    UICtrl.clearEditState();

    e.preventDefault();
  }

  const itemDeleteSubmit = function (e) {

    // get the currentItem
    const currentItem = ItemCtrl.getCurrentItem();

    // delete from data structure /state
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from the UI
    UICtrl.deleteListItem(currentItem.id);

    // renew the data in ui
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);

    // Delete from local storage
    StorageCtrl.deleteItemFromStorage(currentItem.id);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Clear items event
  const clearAllItemsclick = function (e) {
    // Clear all items from the data structure
    ItemCtrl.clearAllItems();

    // Calories
    const totalCalories = ItemCtrl.getTotalCalories();
    UICtrl.showTotalCalories(totalCalories);

    // hide list
    UICtrl.hideList();
    // Remove from the UI
    UICtrl.removeAllItems();
    // Remove from local Storage
    StorageCtrl.clearItemsFromStorage();



    e.preventDefault();
  }

  // 4.5 Public method return
  return {
    // 4.3.1 The Main Initialization function
    init() {
      // console.log(`Initializing App`);
      // Clear edit state / set initial state
      UICtrl.clearEditState()
      // fetch items from the data structure/state
      const items = ItemCtrl.getItems();

      // Check if any items
      if (items.length === 0) {
        UICtrl.hideList();
      } else {
        // populate list with items
        UICtrl.populateItemList(items);
      }
      //  Get the total Calories
      const totalCalories = ItemCtrl.getTotalCalories();
      //   Add total calories to the UI
      UICtrl.showTotalCalories(totalCalories);

      // Load Event listeners
      loadEventListeners();
    }
  }

})(ItemCtrl, UICtrl, StorageCtrl);

// 5. Initializing the App
App.init();