// Array of upcoming eclipse dates (example dates)
const eclipseDates = [
    new Date("2024-04-08T00:00:00"),  // Solar Eclipse
    new Date("2024-09-18T00:00:00"),  // Lunar Eclipse
    new Date("2025-03-29T00:00:00")   // Solar Eclipse
];

// Function to get the next eclipse date from today's date
function getNextEclipseDate() {
    const now = new Date();
    for (const date of eclipseDates) {
        if (date > now) {
            return date;
        }
    }
    return null; // No upcoming eclipse found
}

// Function to start the countdown
function startCountdown() {
    const nextEclipseDate = getNextEclipseDate();
    if (!nextEclipseDate) {
        document.getElementById("countdown").textContent = "No upcoming eclipses";
        return;
    }

    // Update countdown every second
    setInterval(() => {
        const now = new Date();
        const timeRemaining = nextEclipseDate - now;

        if (timeRemaining <= 0) {
            document.getElementById("days").textContent = "00";
            document.getElementById("hours").textContent = "00";
            document.getElementById("minutes").textContent = "00";
            document.getElementById("seconds").textContent = "00";
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the countdown values in the HTML
        document.getElementById("days").textContent = String(days).padStart(2, '0');
        document.getElementById("hours").textContent = String(hours).padStart(2, '0');
        document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
        document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
    }, 1000);
}

// Start the countdown when the page loads
document.addEventListener("DOMContentLoaded", startCountdown);
