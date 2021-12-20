// to get from html
const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minsE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("secs");
console.log(daysE1)
console.log(hoursE1)
console.log(minsE1)
console.log(secondsE1)

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears);
    console.log(newYears)
    const currentDate = new Date();
    console.log(currentDate)

    const totalSeconds = (newYearsDate - currentDate) / 1000;
    console.log(totalSeconds);

    const days = Math.floor(totalSeconds / 3600 / 24);
    console.log(days)
    const hours = Math.floor(totalSeconds / 3600) % 24;
    console.log(hours)
    const mins = Math.floor(totalSeconds / 60) % 60;
    console.log(mins)
    const seconds = Math.floor(totalSeconds) % 60;
    console.log(seconds)

    // to ste in to html 
    daysE1.innerHTML = days;
    hoursE1.innerHTML = formatTime(hours);
    minsE1.innerHTML = formatTime(mins);
    secondsE1.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

// initial call
countdown();

setInterval(countdown, 1000);