/*
const current = document.querySelector("#current");
const imgs = document.querySelectorAll(".imgs img");
*/

const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img')];
const opacity = 0.6;


// Set the first image opacity
imgs[0].style.opacity = opacity;

imgs.forEach(img => img.addEventListener('click', imgClick));

function imgClick(e) {


    // Reset the opacity
    imgs.forEach(img => (img.style.opacity = 1)); 
    
    // Change the current Img to the source of clicked image
    current.src = e.target.src;

    // Add fadIn class
    current.classList.add("fade-in");

    // Remove the class with a timeout!
    setTimeout(() => current.classList.remove("fade-in"), 500);

    // CHange the opacity to var opacity
    e.target.style.opacity = opacity;

}


 