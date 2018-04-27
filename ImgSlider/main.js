// Select the DOM elements
let sliderImages = document.querySelectorAll('.slide'),
    arrowRight = document.querySelector("#arrow-right"),
    arrowLeft = document.querySelector("#arrow-left"),
    current = 0;


// Clear All the images
function reset() {
    for ( let i = 0; i < sliderImages.length; i++) {
        sliderImages[i].style.display = "none";
    }
}

 // Create a start function
 function startSlide() {
     reset();
    sliderImages[0].style.display = "block";
    }

// Show previous slide
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = "block";
    current--;
}

// Show next slide
function slideRight() {
    reset();
    sliderImages[current + 1].style.display = "block";
    current++;
}


// left Arrow Click Listener
arrowLeft.addEventListener("click", function() {
    if(current === 0) {
        current = sliderImages.length;
    }
    slideLeft();
});

// Right Arrow Click Listener
arrowRight.addEventListener("click", function() {
    if(current === sliderImages.length - 1) {
        current = -1;
    }
    slideRight();
});

 startSlide();

