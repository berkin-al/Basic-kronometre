var timer;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }

    var timeString = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.querySelector(".timer").textContent = timeString;
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("stop").addEventListener("click", stopTimer);
document.getElementById("reset").addEventListener("click", resetTimer);