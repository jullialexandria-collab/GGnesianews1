/* ========================================
   GGNESIA NEWS
   SCRIPT.JS
======================================== */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");


/* =========================
   SIDE MENU
========================= */

function openMenu() {
    sideMenu.classList.add("active");
    overlay.classList.add("active");
    document.body.classList.add("menu-open");
}

function closeMenu() {
    sideMenu.classList.remove("active");
    overlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}


menuBtn.addEventListener("click", openMenu);
closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);


/* =========================
   DROPDOWN
========================= */

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


/* =========================
   SEARCH
========================= */

const searchBtn = document.getElementById("searchBtn");
const searchPanel = document.getElementById("searchPanel");
const searchInput = document.getElementById("searchInput");

searchBtn.addEventListener("click", function() {

    searchPanel.classList.toggle("active");

    if (searchPanel.classList.contains("active")) {
        searchInput.focus();
    }

});
/* =========================
   DATA BERITA
========================= */

let articles = [];

async function loadArticles() {

    try {

        const response = await fetch("data/articles.json");

        if (!response.ok) {
            throw new Error("Gagal mengambil data berita.");
        }

        articles = await response.json();

        console.log("Berita berhasil dimuat:", articles);

    } catch (error) {

        console.error("Error:", error);

    }

}

loadArticles();
/* =========================
   HIGHLIGHT
========================= */

function displayFeatured() {

    const featuredArticles = articles.filter(
        article => article.featured === true
    );

    if (featuredArticles.length === 0) {
        return;
    }

    const article = featuredArticles[0];

    const heroImage = document.querySelector(".hero-card img");
    const heroCategory = document.querySelector(".hero-content .category");
    const heroTitle = document.querySelector(".hero-content h1");
    const heroMeta = document.querySelector(".hero-content p");

    if (heroImage) {
        heroImage.src = article.image;
        heroImage.alt = article.title;
    }

    if (heroCategory) {
        heroCategory.textContent = article.category;
    }

    if (heroTitle) {
        heroTitle.textContent = article.title;
    }

    if (heroMeta) {
        heroMeta.textContent =
            `${article.author} • ${article.date}`;
    }
}
