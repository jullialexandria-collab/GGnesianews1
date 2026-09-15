// =========================
// GGNESIA NEWS
// SCRIPT UTAMA
// =========================


// =========================
// ELEMENT
// =========================

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const searchClose = document.getElementById("searchClose");
const searchInput = document.getElementById("searchInput");
const searchSubmit = document.getElementById("searchSubmit");
const searchResult = document.getElementById("searchResult");


// =========================
// BUKA MENU
// =========================

function openMenu() {

    sideMenu.classList.add("active");
    overlay.classList.add("active");

    document.body.classList.add("menu-open");

}


// =========================
// TUTUP MENU
// =========================

function closeMenu() {

    sideMenu.classList.remove("active");
    overlay.classList.remove("active");

    document.body.classList.remove("menu-open");

}


// =========================
// EVENT MENU
// =========================

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

overlay.addEventListener("click", closeMenu);


// =========================
// SUBMENU
// =========================

const menuGroups = document.querySelectorAll(".menu-group");

menuGroups.forEach((group) => {

    const heading = group.querySelector(".menu-heading");

    heading.addEventListener("click", () => {

        menuGroups.forEach((otherGroup) => {

            if (otherGroup !== group) {
                otherGroup.classList.remove("open");
            }

        });

        group.classList.toggle("open");

    });

});


// =========================
// LINK MENU
// =========================

const menuLinks = document.querySelectorAll(
    ".side-menu a"
);

menuLinks.forEach((link) => {

    link.addEventListener("click", () => {

        closeMenu();

    });

});


// =========================
// SEARCH
// =========================

function openSearch() {

    searchPanel.classList.add("active");

    document.body.classList.add("search-open");

    setTimeout(() => {

        searchInput.focus();

    }, 200);

}


function closeSearch() {

    searchPanel.classList.remove("active");

    document.body.classList.remove("search-open");

}


searchBtn.addEventListener("click", openSearch);

searchClose.addEventListener("click", closeSearch);


// =========================
// SEARCH FUNCTION
// =========================

function searchNews() {

    const keyword = searchInput.value.trim();

    if (keyword === "") {

        searchResult.textContent =
            "Silakan ketik kata kunci berita.";

        return;

    }

    searchResult.innerHTML =
        `Mencari berita dengan kata kunci: <strong>${keyword}</strong>`;

}


// Tombol search
searchSubmit.addEventListener(
    "click",
    searchNews
);


// Enter pada input
searchInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            searchNews();

        }

    }
);


// =========================
// ESC
// =========================

document.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Escape") {

            closeMenu();
            closeSearch();

        }

    }
);


// =========================
// SLIDER DOT
// =========================

const dots = document.querySelectorAll(".dot");

dots.forEach((dot) => {

    dot.addEventListener("click", () => {

        dots.forEach((item) => {
            item.classList.remove("active");
        });

        dot.classList.add("active");

    });

});
