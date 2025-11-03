
const menuIcon = document.getElementById("menu-icon");
const mobileMenu = document.getElementById("mobile-menu");
const closeBtn = document.getElementById("close-btn");
const dropdownBtns = document.querySelectorAll(".dropdown-btn");

menuIcon.addEventListener("click", () => {
    mobileMenu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
});

dropdownBtns.forEach(btn => {
    btn.addEventListener("click", function () {
        const dropdown = this.nextElementSibling;
        dropdown.style.display =
            dropdown.style.display === "block" ? "none" : "block";
    });
});
