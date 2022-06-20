const navToggleButton = document.querySelector(".nav-toggle--button");
const navToggle = document.querySelector(".nav-toggle");

navToggleButton.addEventListener("click", () => {
  navToggleButton.classList.toggle("nav-toggle--button-rotate");
  navToggle.classList.toggle("nav-toggle--visible");
});
