// Set the date we're counting down to (next anniversary date)
const anniversaryDate = new Date("Oct 10, 2024 00:00:00").getTime();

// Update the countdown every 1 second
const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = anniversaryDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="timer"
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "Selamat Hari Jadian Ke-5!";
    }
}, 1000);

// Surprise button
document.getElementById("surpriseButton").addEventListener("click", () => {
    alert("Aku mencintaimu lebih dari apapun di dunia ini! 💖");
});
