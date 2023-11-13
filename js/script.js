"use strict";

let burgerBtn = document.querySelector(".burger-1");
let burgerItems = document.querySelector(".nav-items");
let burger1 = document.querySelector(".burger-2");
let burger2 = document.querySelector(".burger-3");
let burger3 = document.querySelector(".burger-4");
burgerBtn.addEventListener("click", function () {
  burgerItems.classList.toggle("active");
});
burgerBtn.addEventListener("click", function () {
  burger2.classList.toggle("active");
  burger1.classList.toggle("active");
  burger3.classList.toggle("active");
  document.body.classList.toggle("active");
});
