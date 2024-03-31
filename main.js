"use strict";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");

function openMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    hamburger.childNodes[1].classList.toggle("hidden");
    hamburger.childNodes[3].classList.toggle("hidden");
  } else {
    menu.classList.add("hidden");
    hamburger.childNodes[1].classList.toggle("hidden");
    hamburger.childNodes[3].classList.toggle("hidden");
  }
}

hamburger.addEventListener("click", openMenu);
