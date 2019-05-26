// import 'bulma/bulma.sass';
import "./custom.scss";
// import './main.scss';
import "./modernizr-custom";
document.documentElement.classList.remove("no-js");
window.addEventListener("DOMContentLoaded", () => {
  document
    .querySelectorAll(".project__inner")
    .forEach(el => el.classList.add("animate"));
});

const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");
const section = document.querySelector(".section");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  if (
    burger.classList.contains("is-active") &&
    menu.classList.contains("is-active")
  ) {
    menu.style.opacity = 1;
    section.style.opacity = 0;
  } else {
    menu.style.opacity = 0;
    section.style.opacity = 1;
  }
});

const projectsLink = document.querySelector("#projects-link");
const projects = document.querySelector("#projects");

projectsLink.addEventListener("click", e => {
  e.preventDefault();
  projects.scrollIntoView({
    behavior: 'smooth'
  });
});