"use strict";

const day = new Date().toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weedkay: "long",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
});

console.log(day);
