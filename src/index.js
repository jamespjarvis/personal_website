import "./custom.scss";

document.documentElement.classList.remove("no-js");

const projectsLink = document.querySelector("#projects-link");
const projects = document.querySelector("#projects");
const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");
const section = document.querySelector(".section");
const nav = document.querySelector(".navbar");

const isInNav = el => (nav === el ? false : nav.contains(el));

const navIsActive = () =>
  burger.classList.contains("is-active") &&
  menu.classList.contains("is-active") &&
  nav.classList.contains("is-active");

// toggle navbar dropdown menu
function handleBurgerClick() {
  console.log("click");

  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  nav.classList.toggle("is-active");

  if (navIsActive()) {
    const {
      height
    } = menu.getBoundingClientRect();
    menu.style.opacity = 1;
    section.style.transform = `translate3D(0, ${height - 52}px, 0)`;
    window.addEventListener("click", handleNavOutClick);
  } else {
    menu.style.opacity = 0;
    section.style.transform = `translate3D(0, 0, 0)`;
    window.removeEventListener("click", handleNavOutClick);
  }
}

function handleNavOutClick(e) {
  if (navIsActive() && !isInNav(e.target)) {
    handleBurgerClick();
  }
}

burger.addEventListener("click", handleBurgerClick);

// smooth scroll to project list
function handleProjectsLinkClick(e) {
  e.preventDefault();
  projects.scrollIntoView({
    behavior: "smooth"
  });
}

projectsLink.addEventListener("click", handleProjectsLinkClick);

// supports webp
async function supportsWebp() {
  if (!self.createImageBitmap) return false;
  const webpData =
    "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
  try {
    const blob = await fetch(webpData).then(r => r.blob());
    await createImageBitmap(blob);
    return true;
  } catch (err) {
    return false;
  }
}

(async () => {
  if (await supportsWebp()) {
    document.documentElement.classList.add("webp-support");
  }
})();