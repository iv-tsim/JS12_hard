window.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const   button = document.querySelector("button"),
            text = document.querySelector(".content-text"),
            wrapper = document.querySelector(".wrapper");
    button.addEventListener("click", () => {
        let randomHexNumber = "#" + Math.floor(Math.random()*16777215).toString(16);
        text.textContent = randomHexNumber;
        wrapper.style.backgroundColor = randomHexNumber;
    });
});