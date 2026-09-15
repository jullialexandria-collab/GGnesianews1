/* ========================================
   GGNESIA NEWS
   SCRIPT.JS
======================================== */


/* =========================
   SIDE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

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

if (menuBtn) {
    menuBtn.addEventListener("click", openMenu);
}

if (closeBtn) {
    closeBtn.addEventListener("click", closeMenu);
}

if (overlay) {
    overlay.addEventListener("click", closeMenu);
}


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

if (searchBtn) {

    searchBtn.addEventListener("click", function() {

        searchPanel.classList.toggle("active");

        if (searchPanel.classList.contains("active")) {
            searchInput.focus();
        }

    });

}


/* =========================
   DATA BERITA
========================= */

let articles = [];


/* =========================
   LOAD ARTICLES
========================= */

async function loadArticles() {

    try {

        const response = await fetch(
            "data/articles.json"
        );

        if (!response.ok) {
            throw new Error(
                "Gagal mengambil data articles.json"
            );
        }

        articles = await response.json();

        console.log(
            "Berita berhasil dimuat:",
            articles
        );


        /* =========================
           TAMPILKAN BERITA
        ========================= */

        displayFeatured();
        displayPopular();
        displayLatest();


    } catch (error) {

        console.error(
            "Error memuat berita:",
            error
        );

    }

}


/* =========================
   HIGHLIGHT
========================= */

function displayFeatured() {

    const featuredArticles =
        articles.filter(function(article) {

            return article.featured === true;

        });


    if (featuredArticles.length === 0) {
        return;
    }


    const article = featuredArticles[0];


    const heroImage =
        document.querySelector(".hero-card img");

    const heroCategory =
        document.querySelector(
            ".hero-content .category"
        );

    const heroTitle =
        document.querySelector(
            ".hero-content h1"
        );

    const heroMeta =
        document.querySelector(
            ".hero-content p"
        );


    if (heroImage) {

        heroImage.src = article.image;
        heroImage.alt = article.title;

    }


    if (heroCategory) {

        heroCategory.textContent =
            article.category;

    }


    if (heroTitle) {

        heroTitle.textContent =
            article.title;

    }


    if (heroMeta) {

        heroMeta.textContent =
            `${article.author} • ${article.date}`;

    }

}


/* =========================
   TERPOPULER
========================= */

function displayPopular() {

    const popularList =
        document.getElementById("popularList");

    if (!popularList) {
        return;
    }


    const popularArticles =
        articles.filter(function(article) {

            return article.popular === true;

        });


    popularList.innerHTML = "";


    popularArticles.forEach(function(article) {

        const item =
            document.createElement("article");

        item.className = "article-card";


        item.innerHTML = `
            <div class="article-image">
                <img
                    src="${article.image}"
                    alt="${article.title}"
                >
            </div>

            <div class="article-content">

                <span class="category">
                    ${article.category}
                </span>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.author} • ${article.date}
                </p>

            </div>
        `;


        popularList.appendChild(item);

    });

}


/* =========================
   BERITA TERBARU
========================= */

function displayLatest() {

    const latestList =
        document.getElementById("latestList");

    if (!latestList) {
        return;
    }


    const latestArticles =
        [...articles].sort(function(a, b) {

            return new Date(b.date) -
                   new Date(a.date);

        });


    latestList.innerHTML = "";


    latestArticles.forEach(function(article) {

        const item =
            document.createElement("article");

        item.className = "article-card";


        item.innerHTML = `
            <div class="article-image">
                <img
                    src="${article.image}"
                    alt="${article.title}"
                >
            </div>

            <div class="article-content">

                <span class="category">
                    ${article.category}
                </span>

                <h3>
                    ${article.title}
                </h3>

                <p>
                    ${article.author} • ${article.date}
                </p>

            </div>
        `;


        latestList.appendChild(item);

    });

}


/* =========================
   JALANKAN WEBSITE
========================= */

loadArticles();
