"use strict";
const resetNotifications = document.querySelector("#reset-all");
const NumberofNotofications = document.querySelector("#notification-number");
const notify1 = document.querySelector("#notify1");
const notify2 = document.querySelector("#notify2");
const notify3 = document.querySelector("#notify3");

const unread1 = document.querySelector("#red-circle1");
const unread2 = document.querySelector("#red-circle2");
const unread3 = document.querySelector("#red-circle3");

let privateInbox = document.querySelector("#name");
const privateMsg = document.querySelector("#display-msg");

let count = 3;

resetNotifications.addEventListener("click", () => {
  NumberofNotofications.innerHTML = 0;
  notify1.style.backgroundColor = "transparent";
  notify2.style.backgroundColor = "transparent";
  notify3.style.backgroundColor = "transparent";
  unread1.style.display = "none";
  unread2.style.display = "none";
  unread3.style.display = "none";
});

notify1.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    count = 0;
  }
  NumberofNotofications.innerHTML = count;
  notify1.style.backgroundColor = "transparent";
  unread1.style.display = "none";
});

notify2.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    count = 0;
  }
  NumberofNotofications.innerHTML = count;
  notify2.style.backgroundColor = "transparent";
  unread2.style.display = "none";
});

notify3.addEventListener("click", () => {
  if (count > 0) {
    count--;
  } else {
    count = 0;
  }
  NumberofNotofications.innerHTML = count;
  notify3.style.backgroundColor = "transparent";
  unread3.style.display = "none";
});

let open = 1;
privateInbox.addEventListener("click", () => {
  if (open === 1) {
    privateMsg.style.display = "none";
    open = 0;
  } else {
    privateMsg.style.display = "block";
    open = 1;
  }
});
