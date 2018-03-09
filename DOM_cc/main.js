// ADDING INTERACTIVITY TO THE FORM AND INPUT
// 1. Get the main id selected
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// 2. Add a form submit event
// 2.1 Add a event listener to the submit button
form.addEventListener("submit", addItem);
//2.2 Create a addItem function
function addItem(e) {
    e.preventDefault();
    // 2.2.1 Get the input value
    var newItem = document.getElementById("item").value;

    // 2.2.2 Use the Create element method: li
    var li = document.createElement("li");
    // 2.2.3 Add a class to the element
    li.className = "list-group-item";
    // console.log(li);
    // 2.2.4 Add a text node with input value
    li.appendChild(document.createTextNode(newItem));
    // 2.2.5 Create the delete button element
    var deleteBtn = document.createElement("button");
    // 2.2.6 Add class to delete btn
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // 2.2.7 Add a text node to the deleteBtn
    deleteBtn.appendChild(document.createTextNode("X"));
    // 2.2.8 Append delete button to li
    li.appendChild(deleteBtn);
    // 2.2.9 Append a child to the ul
    itemList.appendChild(li);   
}

// 3. Delete Event 
// 3.1 Add an eventlistener to the ul
itemList.addEventListener("click", removeItem);
// 3.2 Create a removeItem function
function removeItem(e) {
    e.preventDefault();
    // 3.2.1 Check if the li is pressed where the el contian delete
    if(e.target.classList.contains("delete")) {
        if(confirm("Are you sure?")) {
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// 4. Filter the Elements of the list
// 4.1 Add an event listener to the filter var
filter.addEventListener("keyup", filterItems);
// 4.2 Create filterItems function
function filterItems(e) {
    // 4.2.1 Conver to lowercase
    let text = e.target.value.toLowerCase();
    // console.log(text);
    // 4.2.2 Get the Li within the item list
    let items = itemList.getElementsByTagName('li');
    // 4.2.3 Convert the items collection into an array!
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = "block";            
        } else {
            item.style.display = "none";
        }
    });
}

