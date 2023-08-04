const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const dateOfGiveaway = document.querySelector(".giveaway h4");
const showDays = document.querySelector(".days");
const showHours = document.querySelector(".hours");
const showMinutes = document.querySelector(".minutes");
const showSeconds = document.querySelector(".seconds");

let myDate = new Date(2023, 7, 5, 8, 30, 0);
//console.log(myDate);

const year = myDate.getFullYear();
const month = myDate.getMonth();
const day = myDate.getDay()-1;
const date = myDate.getDate();
const hours = myDate.getHours();
const minutes = myDate.getMinutes();


dateOfGiveaway.textContent = `Giveaway Ends On ${weekDays[day]},  ${date} ${months[month]} ${year} ${hours}:${minutes}`

const giveawayTime = myDate.getTime();
//console.log(giveawayTime);

function getCountTime(){
    const todayTime = new Date().getTime();
    const time = giveawayTime-todayTime;
    //console.log(time);

    const day = 24*60*60*1000;
    const hour = 60*60*1000;
    const minute = 60*1000;
    const second = 1000;

    const correctDays = Math.floor(time / day);
    const correctHours = Math.floor(time % day / hour);
    const correctMinutes = Math.floor(time % hour /minute);
    const correctSeconds = Math.floor(time % minute / second);

    /*
    console.log(Math.floor(correctDays));
    console.log(Math.floor(correctHours));
    console.log(Math.floor(correctMinutes));
    console.log(Math.floor(correctSeconds));
    */

    showDays.textContent = correctDays;
    showHours.textContent = correctHours;
    showMinutes.textContent = correctMinutes;
    showSeconds.textContent = correctSeconds;

    
}
setInterval(getCountTime, 1000)
