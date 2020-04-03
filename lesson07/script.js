"use strict";

const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];

week.forEach(function(item, index) {
    if (item === "Суббота" || item === "Воскресенье") {
        document.write("<div>" + item.italics() + "</div>");
    } else if (index === new Date().getDay() - 1) {
        document.write("<div>" + item.bold() + "</div>");
    } else {
        document.write("<div>" + item + "</div>");
    }
});
