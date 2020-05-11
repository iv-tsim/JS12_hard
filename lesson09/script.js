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
const getMinutes = () => {
    // 1, 21, 31, 41, 51 - минута (заканчиваются на 1, но нужно исключить 11)
    // 2-4, 22-24, 32-34, 42-44, 52-54 - минуты (последние цифры 2, 3, 4, но нужно исключить 12, 13, 14)
    // 0, 5-20, 25-30, 35-40, 45-50, 55-60 - минут
    const minutes = date.getMinutes();
    if ((minutes.toString()[0] > 1 && minutes.toString().slice(-1) === "1") || minutes === 1) {
        return minutes + " минута";
    } else if (minutes.toString()[0] > 1 && (minutes.toString().slice(-1) === "2" || minutes.toString().slice(-1) === "3" || minutes.toString().slice(-1) === "4")) {
        return minutes + " минуты";
    } else {
        return minutes + " минут";
    }
}
const getSeconds = () => {
    // точно так же, как и с минутами
    const seconds = date.getSeconds();
    if ((seconds.toString()[0] > 1 && seconds.toString().slice(-1) === "1") || seconds === 1) {
        return seconds + " секунда";
    } else if (seconds.toString()[0] > 1 && (seconds.toString().slice(-1) === "2" || seconds.toString().slice(-1) === "3" || seconds.toString().slice(-1) === "4")) {
        return seconds + " секунды";
    } else {
        return seconds + " секунд";
    }
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
firstElem.textContent = `Сегодня ${weekday[0].toUpperCase() + weekday.slice(1)}, ${date.toLocaleString('ru', options)} ${date.getFullYear()} года, ${getHours()}, ${getMinutes()}, ${getSeconds()}`;
secondElem.textContent = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
body.appendChild(firstElem);
body.appendChild(secondElem);

let interval = setInterval(() => {
    date = new Date();
    secondElem.textContent = `${addZero(date.getDate())}.${addZero(date.getMonth())}.${date.getFullYear()} - ${addZero(date.getHours())}:${addZero(date.getMinutes())}:${addZero(date.getSeconds())}`
    firstElem.textContent = `Сегодня ${weekday[0].toUpperCase() + weekday.slice(1)}, ${date.toLocaleString('ru', options)} ${date.getFullYear()} года, ${getHours()}, ${getMinutes()}, ${getSeconds()}`;
}, 1000)