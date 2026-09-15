// =========================
// MENU SAMPING
// =========================

const menuButton = document.getElementById("menuButton");
const closeMenu = document.getElementById("closeMenu");
const sideMenu = document.getElementById("sideMenu");
const menuOverlay = document.getElementById("menuOverlay");


// Buka menu
menuButton.addEventListener("click", () => {
    sideMenu.classList.add("active");
    menuOverlay.classList.add("active");
});


// Tutup menu
closeMenu.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


// Tutup ketika area luar menu ditekan
menuOverlay.addEventListener("click", () => {
    sideMenu.classList.remove("active");
    menuOverlay.classList.remove("active");
});


// Tutup menu dengan tombol ESC
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        sideMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
    }
});


// =========================
// SUBMENU
// =========================

const menuHeadings = document.querySelectorAll(".menu-heading");

menuHeadings.forEach((heading) => {

    heading.addEventListener("click", () => {

        const section = heading.parentElement;

        section.classList.toggle("open");

    });

});
