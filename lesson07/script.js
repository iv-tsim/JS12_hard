"use strict";

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

const createElement = function(item, appearance) {
    let element = document.createElement("div");
    if (appearance) {element.classList = appearance;}
    element.innerHTML = item;
    document.body.append(element);
};

week.forEach(function(item, index) {
    if (item === "Суббота" || item === "Воскресенье") {
        createElement(item, "italics");
    } else if (index === new Date().getDay() - 1) {
        createElement(item, "bold");
    } else {
        createElement(item);
    }
});
