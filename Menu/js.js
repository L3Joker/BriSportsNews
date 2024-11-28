const menuCut = document.querySelector(".menu-cut");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const options = Array.from(document.querySelectorAll(".option"));
hamburgerMenu.addEventListener("click", () => {
  menuCut.classList.toggle("active");
  hamburgerMenu.classList.toggle("active");
});
options.forEach((option) =>
  option.addEventListener("click", () => {
    if (hamburgerMenu.classList.contains("active")) {
      menuCut.classList.remove("active");
      hamburgerMenu.classList.remove("active");
    }
  })
);
