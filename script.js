const hamburger = document.querySelector(".hamburger");
const theBody = document.querySelector(".the-body");
const toggledMenu = document.querySelector(".toggled-menus");

hamburger.addEventListener("click", () => {
hamburger.classList.toggle("active");
theBody.classList.toggle("active");
toggledMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  theBody.classList.remove("active");
  toggledMenu.classList.remove("active");
}));