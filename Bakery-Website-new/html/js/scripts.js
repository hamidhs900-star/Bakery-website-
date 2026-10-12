document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navBar = document.querySelector(".nav-bar");
    const body = document.querySelector("body");

    menuToggle.addEventListener("click", function () {
        navBar.classList.toggle("open");
        body.classList.toggle(".nav-bar");
        menuToggle.classList.toggle("active");
    });

});