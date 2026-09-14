/* ========================================
   GGNESIA NEWS
   SCRIPT.JS
   TAHAP 3A — SIDE MENU
======================================== */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


/* =========================
   BUKA MENU
========================= */

function openMenu() {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
}


/* =========================
   TUTUP MENU
========================= */

function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}


/* =========================
   TOMBOL MENU
========================= */

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);
/* ========================================
   DROPDOWN MENU
======================================== */

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(function(dropdown) {

    dropdown.addEventListener("click", function() {

        const submenu = this.nextElementSibling;

        dropdowns.forEach(function(otherDropdown) {

            if (otherDropdown !== dropdown) {

                otherDropdown.classList.remove("active");

                const otherSubmenu =
                    otherDropdown.nextElementSibling;

                if (otherSubmenu) {
                    otherSubmenu.classList.remove("active");
                }
            }

        });

        this.classList.toggle("active");

        if (submenu) {
            submenu.classList.toggle("active");
        }

    });

});
/* ========================================
   SEARCH
======================================== */

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function () {
    searchPanel.classList.toggle("active");

    if (searchPanel.classList.contains("active")) {
        searchInput.focus();
    }
});
