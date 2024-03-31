"use strict";

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".header__nav");

function openMenu() {
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
    menu.classList.remove("slide-top");
    menu.classList.add("slide-bottom");
  } else {
    menu.classList.remove("slide-bottom");
    menu.classList.add("slide-top");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 500);
  }
}

hamburger.addEventListener("click", openMenu);
