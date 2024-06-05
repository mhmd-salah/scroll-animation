"use strict";
let boxs = document.querySelectorAll(".box");
window.addEventListener("scroll", checkBoxs);
checkBoxs();
function checkBoxs() {
    const triggerBottom = window.innerHeight / 6 * 4;
    boxs.forEach((box, index) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }
        if (index == boxs.length - 1) {
            box.classList.add("show");
        }
    });
}
