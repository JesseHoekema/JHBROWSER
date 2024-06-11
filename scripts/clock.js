function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const clockElement = document.getElementById('clock');
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateElement = document.getElementById('date');
    dateElement.textContent = now.toLocaleDateString('en-US', options);
}

// Initial call to set the clock
updateClock();

// Set interval to update clock every second
setInterval(updateClock, 1000);