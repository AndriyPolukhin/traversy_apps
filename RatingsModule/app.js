// 1. Initial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    phillips: 4.1
}

// 2. Total Stars
const starsTotal = 5;

// 3. Run getRatings when DOM loads
document.addEventListener('DOMContentLoaded', getRatings);

// 4. Form Elements Selection
    // 4.1 Select the fields
    const productSelect = document.getElementById("product-select");
    const ratingControl = document.getElementById("rating-control");

    // 4.2 Init product
    let product;

    // 4.3 Select the product change
    productSelect.addEventListener('change', (e) => {
        product = e.target.value;
        // console.log(product);
    // 4.4 Enable rating control
        ratingControl.disabled = false;
        ratingControl.value = ratings[product];
    });

// 5. Rating Control change
    ratingControl.addEventListener('blur', (e) => {
        const rating = e.target.value;
        // 5.1 Make sure that 5 or under
        if (rating > 5) {
            alert("Please rate 1 - 5");
            return;
        }

        // 5.2 Change the rating
        ratings[product] = rating;

        getRatings();
    });
// 6. Loop with a for in loop through an object with a function
function getRatings() {
    for (let rating in ratings) {
        // Get percentage, %
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        // Round to the nearest ten the startPercentage
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        // Set width of star-inner to percentage
        document.querySelector(`.${rating} .star-inner`).style.width = starPercentageRounded;
        // Add the number rating
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
    
    }
}