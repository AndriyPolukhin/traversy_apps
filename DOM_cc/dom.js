// DOM MANIPULATION PRACTICE

/* 

MAIN SELECTORS that we can use:
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.querySelector()
document.querySelectorAll()

*/

// 1. To see all of the document objects properties:
// console.dir(document);
/*
// 2. Examine the document object:
    // 2.1 Select the Domain & URL
    console.log(document.domain);
    console.log(document.URL);
    // 2.2 Select the title, doctype, head, body
    console.log(document.title);
    console.log(document.doctype);
    console.log(document.head);
    console.log(document.body);
    // 2.3 Select all and select 1 of all with index
    console.log(document.all);
    console.log(document.all[10]);
    // document.all[10].textContent = "Hello";
    // 2.4 Select all the form/links on the page
    console.log(document.forms);
    console.log(document.forms[0]);
    console.log(document.links);
    // 2.5 Select images
    console.log(document.images);
*/
/*
// 3. SELECTORS
    // 3.1 getELementById();
    // console.log(document.getElementById("header-title"));
    var headerTitle = document.getElementById("header-title");
    var header = document.getElementById("main-header");
    // console.log(headerTitle);
    // headerTitle.textContent = "Anastasia Hello";
    // headerTitle.innerText = "See you Soon";
    // console.log(headerTitle.textContent);
    // console.log(headerTitle.innerText);
    // headerTitle.innerHTML = "<h3>Straum Systems is Rolling Up</h3>";
    // headerTitle.style.borderBottom = "solid 3px #fff";
    // header.style.borderBottom = "solid 3px #000";

    // 3.2 getElementsByClassName();
    var items = document.getElementsByClassName("list-group-item");
    // console.log(items);
    // 3.2.1 Individual Styling the Item
    // console.log(items[1]);
    items[1].textContent = "Ear your first million $";
    items[1].style.fontWeight = "bold";
    items[1].style.backgroundColor = "yellow";
    // 3.2.2. Group Styling the Items
    // does not work this one because its an array/collection
    // items.style.backgroundColor = "#f3f";
    // Using a for loop to set styles to the items array
    for(let i = 0; i < items.length; i++) {
        items[i].style.backgroundColor = "#f4f4f4";
    }

    // 3.3 getElementsByTagName();
    var li = document.getElementsByTagName("li");
    // console.log(li);
    // console.log(li[2]);
    li[2].textContent = "Build a Beehive Apiary Farm";
    li[2].style.fontWeight = "bold";
    li[2].style.backgroundColor = "#b2b2b2";
    for( let i = 0; i < li.length; i++) {
        li[i].style.fontSize = "1.1em";
    }

    // 3.4 querySelector();
    // Note: uses only the first of a kind of selectors, not the rest!
    var header_qs = document.querySelector('#main-header')
    header_qs.style.borderTop ="solid 3px #000";

    var input = document.querySelector('input');
    input.value = "Hello world";

    var submit = document.querySelector("input[type='submit']");
    submit.value = "Send";

    var item = document.querySelector('.list-group-item');
    item.style.color = "red";
    item.textContent = "Marry Anaastasia Tsukrova";
    var lastitem = document.querySelector('.list-group-item:last-child');
    lastitem.style.color ="blue";

    var secondItem = document.querySelector('.list-group-item:nth-child(2)');
    secondItem.style.color = "coral";

    // 3.5 querySelectorAll();
    // Note: Returns a NodeList and Array functions apply!
    var titles = document.querySelectorAll('.title');
    console.log(titles);
    titles[0].textContent = "Build a Super Artificial Intelect - SAI";

    var odd = document.querySelectorAll('li:nth-child(odd)');
    var even = document.querySelectorAll('li:nth-child(even)');  
    
    for(var i = 0; i < odd.length; i++) {
        odd[i].style.backgroundColor = "#f4f4f4";
        even[i].style.backgroundColor ="#ccc";
    }
*/

// 4. TRAVERSING THE DOM 

/*
    MAIN METHODS that we can use:
    parentNode
    parentElement
    childNodes
    FirstChild
    lastChild
    nextSibling
    previousSibling

*/

var itemList = document.querySelector("#items");

// 1. parentNode property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// we can chaing them together
// console.log(itemList.parentNode.parentNode.parentNode);

// 2. ParentElement property
// Note: Interchangable with a parentNode
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "green";
// console.log(itemList.parentElement.parentElement);

// 3. childNodes property
// Note: selects all the items and textNodes(whitespace between el)
// console.log(itemList.childNodes);

// 4. chldren properties
// Note: use to select only children(no textNodes selected)
// console.log(itemList.children);
// console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = "yellow";

// 5. firstchild property
// Note: select the text element if it follows
// console.log(itemList.firstChild);

// 6. firstElementChild
// Note: select the tag element
// console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = "Travel the world with Anastasia";

// 7. lastChild property
// console.log(itemList.lastChild);

// 8. lastElementChild property
// console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = "cyan";
itemList.lastElementChild.textContent = "Build a Foundation";

// 9. nextSibling
// Note: select the text node as well
// console.log(itemList.nextSibling);

// 10. nextElementSibling
// console.log(itemList.nextElementSibling);

// 11. previousSibling
// Note: selects the text node
// console.log(itemList.previousSibling);

// 12. previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color ="green";

// 5. CREATING DOM ELEMENTS AND INSERT THEM

// 1. createElement method
var newDiv = document.createElement('div');
    // 1.1 Add class
    newDiv.className = "hello";
    // 1.2 Add Id
    newDiv.id = "hello-1";
    // 1.3 Add Attribute
    newDiv.setAttribute('title', "Hello Sugar");

// 2. Create a text node
var newDivText = document.createTextNode("Anastasia is the Best!");
    // 1.1 Add text to Div
    newDiv.appendChild(newDivText);

// 3. Insert a DIV to html
var container = document.querySelector("header .container");
var h1 = document.querySelector("header h1");

    // 3.1 Insert Before is used
    container.insertBefore(newDiv, h1);
    newDiv.style.fontSize = "30px";

    // console.log(newDiv);

// 6. EVENTS

// 6.1 Use a function to in a eventlistener
// var button = document.getElementById("button").addEventListener("click", buttonClick);

// Using a function with an event indicator to request/output data on event
// function buttonClick(e) {
    
    // document.getElementById("header-title").textContent = "Changed";
    // document.querySelector("#main").style.backgroundColor = "green";
    // Event fields
    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // console.log(e.target.classList[2]);
    // Output to the DOM by an event
    // var output = document.getElementById("output");
    // output.innerHTML = "<h3>" + e.target.id +"</h3>";

    // Type of event that used
    // console.log(e.type);

    // Position of a mouse indicator! (games)
    // console.log(e.clientX);
    // console.log(e.clientY);
    // console.log(e.offsetX);
    // console.log(e.offsetY);

    // if some of the alt key is pressed! (games)
    // console.log(e.altKey);
    // console.log(e.ctrlKey);
    // console.log(e.shiftKey);
// }


    // 6.2 Mouse Events
    var button = document.querySelector("button");

    // button.addEventListener("click", runEvent); 
    // button.addEventListener("dblclick", runEvent);
    // button.addEventListener('mousedown', runEvent);
    // button.addEventListener('mouseup', runEvent);

    /*
    function runEvent(e) {
        console.log("EVENT TYPE: " + e.type);
        var output = document.getElementById("output");
        // output.innerHTML = "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY:" + e.offsetY + "</h3>";

        // box.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", " +(e.offsetY-10)+ ")";
        // console.log(box.style.backgroundColor);
        // document.body.style.backgroundColor = "rgb(" + e.offsetX + ", " + e.offsetY + ", " + (e.offsetY - 10) + ")";
    }
    */
    // 6.3 Other Events with mouse
    var box = document.getElementById("box");
    
    // box.addEventListener("mouseenter", runEvent);
    // box.addEventListener("mouseleave", runEvent);
    // box.addEventListener("mouseover", runEvent);
    // box.addEventListener("mouseout", runEvent);
    box.addEventListener("mousemove", runEvent);

    // 6.4 Keyboard Press Event
    var itemInput = document.querySelector('input[type="text"]');
    var form = document.querySelector("form");

    function runEvent(e) {
        e.preventDefault();
        console.log("Event Type: " + e.type);
        console.log(e.target.value);
        document.getElementById('output').innerHTML = "<h3>" + e.target.value + "</h3>";
        // document.body.style.display ="none"; 
    }
    
    // itemInput.addEventListener("keydown", runEvent);
    // itemInput.addEventListener("keyup", runEvent);
    // itemInput.addEventListener("keypress", runEvent);
    
    // 6.5 Focus/Blur Events

    // itemInput.addEventListener("focus", runEvent);
    // itemInput.addEventListener("blur", runEvent);

    // 6.6 Cut/Paste Events

    // itemInput.addEventListener("cut", runEvent);
    // itemInput.addEventListener("paste", runEvent);

    // 6.7 Input/Select Event
    itemInput.addEventListener("input", runEvent);  
    var select = document.querySelector("select");
    select.addEventListener("change", runEvent);
    
    // 6.8 Submit Event
    form.addEventListener("submit", runEvent);
    

