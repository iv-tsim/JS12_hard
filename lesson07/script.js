"use strict";

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

week.forEach(function(item, index) {
    let element = document.createElement("div");
    element.textContent = item;
    if (item === "Суббота" || item === "Воскресенье") {
        element.classList.add("italics");
    }
    if (index === new Date().getDay() - 1) {
        element.classList.add("bold");
    }
    document.body.append(element);
});
