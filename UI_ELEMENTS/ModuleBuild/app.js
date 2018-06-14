// 1. SELECT THE ELEMENT OF THE DOM: modal, buttons
// Get the Modal Element
var modal = document.getElementById("simpleModal");
// Get the Open Modal Button
var modalBtn = document.getElementById("modalBtn");
// Get the Close Button
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// 2. Add Event Listeners
// Listen for a click on a modal Button
modalBtn.addEventListener('click', openModal);
// Listen for a close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', clickOutside);

// 3. Function openModal
function openModal() {
     modal.style.display = "block";
}

//4. Function closeModal
function closeModal() {
    modal.style.display = "none";
}

// 5. Function outside
function clickOutside(e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
}