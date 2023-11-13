"use strict";

let addBtn = document.getElementById("adder");
let input = document.getElementById("input1");
let newUl = document.querySelector(".items");

addBtn.addEventListener("click", function () {
  let value = input.value;
  if (value == "") {
    return;
  }
  let newLi = document.createElement("li");
  newLi.innerText = value;
  newUl.appendChild(newLi);
  let deleteBtn = document.createElement("button");
  newLi.appendChild(deleteBtn);
  newLi.style.marginTop = "0.4em";
  deleteBtn.style.width = "auto";
  deleteBtn.style.height = "auto";
  deleteBtn.style.marginLeft = "1em";
  deleteBtn.innerText = "Delete item";
  deleteBtn.addEventListener("click", function () {
    newLi.remove();
  });
  input.value = "";
});
let deleteAll = document.querySelector(".deleteitems");
deleteAll.addEventListener("click", function () {
  newUl.innerHTML = "";
});
