// Arrie's 21st
const partyDate = new Date("2026-10-08T18:00:00");

function updateCountdown() {

    const now = new Date();
    const difference = partyDate - now;

    if (difference <= 0) {
        document.getElementById("countdown").innerHTML =
            "<h3>🍻 IT'S PARTY TIME! PROST! 🍻</h3>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");
}

updateCountdown();

setInterval(updateCountdown, 1000);
