const navBar = document.querySelector(".nav-bar");
const navBarMenu = document.querySelector(".nav-bar-menu");
const body = document.querySelector("body");

navBarMenu.addEventListener("click", (event) => {
  navBar.classList.toggle("active");
  body.classList.toggle("overflow-disabled");
});
