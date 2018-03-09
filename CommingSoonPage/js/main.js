// Select a count down element
const countdown = document.querySelector(".countdown");

// Set the launch date (ms)
const launchDate = new Date('May 6, 2018 13:00:00').getTime();
// console.log(launchDate);

// Set the updater for every second
const intvl = setInterval(() =>  {
    // Get today's date and time in (ms)
    const now = new Date().getTime();

    // Get the distance form now to launchdate
    const distance = launchDate - now;
    // console.log(distance);

    // Time calculations with built in formulas
    const days = Math.floor(distance/(1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result
    countdown.innerHTML = `
        <div>${days}<span>Days</span></div>
        <div>${hours}<span>Hours</span></div>
        <div>${mins}<span>Minutes</span></div>
        <div>${seconds}<span>Seconds</span></div>
    `;

    // Check if the date didn't passed
    if(distance < 0) {
        // Stop the count down
        clearInterval(intvl);
        // Style the output text
        countdown.style.color = "#17a2b8";
        countdown.innerHTML = "Launched";
    }
}, // set the update time (ms)
1000);