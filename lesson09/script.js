"use strict";

let date = new Date();
const weekday = date.toLocaleString("ru", {weekday: "long"});
const options = {
    month: "long",
    day: "numeric"
}
const getHours = () => {
    // 1 и 21 - час
    // 2-4 и 22-24 - часа
    // 5-20 - часов
    const hours = date.getHours();
    if (hours >= 5 && hours <= 20) {
        return hours + " часов";
    } else if (hours === 1 || hours === 21) {
        return hours + " час";
    } else {
        return hours + " часа";
    }
}
const getMinSec = (minSec) => {
    const   str = minSec === "Minutes" ? "минут" : "секунд",
            start = minSec === "Minutes" ? date.getMinutes() : date.getSeconds();
    if ((start.toString()[0] > 1 && start.toString().slice(-1) === "1") || start === 1) {
        return `${start} ${str}а`;
    } else if (start.toString()[0] > 1 && (start.toString().slice(-1) === "2" || start.toString().slice(-1) === "3" || start.toString().slice(-1) === "4")) {
        return `${start} ${str}ы`;
    } else {
        return `${start} ${str}`;
    }
    // 1, 21, 31, 41, 51 - минута (заканчиваются на 1, но нужно исключить 11)
    // 2-4, 22-24, 32-34, 42-44, 52-54 - минуты (последние цифры 2, 3, 4, но нужно исключить 12, 13, 14)
    // 0, 5-20, 25-30, 35-40, 45-50, 55-60 - минут
}
const addZero = (number) => {
    if (number < 10) {
        return "0" + number;
    }
    return number;
}

const body = document.querySelector("body");
const firstElem = document.createElement("div");
const secondElem = document.createElement("div");
firstElem.textContent = `Сегодня ${weekday[0].toUpperCase() + weekday.slice(1)}, ${date.toLocaleString('ru', options)} ${date.getFullYear()} года, ${getHours()}, ${getMinSec("Minutes")}, ${getMinSec("Seconds")}`;
secondElem.textContent = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
body.appendChild(firstElem);
body.appendChild(secondElem);

setInterval(() => {
    date = new Date();
    firstElem.textContent = `Сегодня ${weekday[0].toUpperCase() + weekday.slice(1)}, ${date.toLocaleString('ru', options)} ${date.getFullYear()} года, ${getHours()}, ${getMinSec("Minutes")}, ${getMinSec("Seconds")}`;
    secondElem.textContent = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()} -  ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
}, 1000)