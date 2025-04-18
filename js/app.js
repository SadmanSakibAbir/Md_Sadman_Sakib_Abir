document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  menu.addEventListener("click", function () {
    menu.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.toggle("active");
      menu.classList.toggle("active");
    });
  });
});
