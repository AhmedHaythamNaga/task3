// Set the date we're counting down to
const countDownDate = new Date("Dec 31, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(function() {
    // Get current date and time
    const now = new Date().getTime();

    // Calculate the time remaining between now and the target date
    const timeRemaining = countDownDate - now;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    // Display the result in the corresponding HTML elements
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    // If the countdown is over, clear the interval
    if (timeRemaining < 0) {
        clearInterval(countdownFunction);
        document.getElementById("days").innerText = 0;
        document.getElementById("hours").innerText = 0;
        document.getElementById("minutes").innerText = 0;
        document.getElementById("seconds").innerText = 0;
        // Optionally, you can display a message or take other actions here
    }
}, 1000);
