/* =====================================================
   GGNESIA NEWS
   MAIN JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE SIDEBAR
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileSidebar = document.getElementById("mobileSidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");


function openMenu() {
    mobileSidebar.classList.add("open");
    sidebarOverlay.classList.add("open");
    document.body.classList.add("menu-open");
}


function closeMobileMenu() {
    mobileSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("open");
    document.body.classList.remove("menu-open");
}


menuBtn.addEventListener("click", openMenu);

closeMenu.addEventListener("click", closeMobileMenu);

sidebarOverlay.addEventListener(
    "click",
    closeMobileMenu
);


/* =====================================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
===================================================== */

const mobileLinks =
    document.querySelectorAll(".mobile-link");

mobileLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        closeMobileMenu();
    });

});


/* =====================================================
   CATEGORY SUBMENU
===================================================== */

const categoryButtons =
    document.querySelectorAll(".category-toggle");


categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const submenu =
            button.nextElementSibling;

        const isOpen =
            submenu.classList.contains("open");


        /* Tutup submenu lain */

        document
            .querySelectorAll(".category-menu.open")
            .forEach(function (menu) {

                if (menu !== submenu) {
                    menu.classList.remove("open");
                }

            });


        document
            .querySelectorAll(".category-toggle.open")
            .forEach(function (otherButton) {

                if (otherButton !== button) {
                    otherButton.classList.remove("open");
                }

            });


        /* Toggle submenu */

        if (isOpen) {

            submenu.classList.remove("open");
            button.classList.remove("open");

        } else {

            submenu.classList.add("open");
            button.classList.add("open");

        }

    });

});


/* =====================================================
   HERO SLIDER
===================================================== */

const slides =
    document.querySelectorAll(".hero-slide");

const dots =
    document.querySelectorAll(".dot");


let currentSlide = 0;

let sliderTimer;


/* Menampilkan slide */

function showSlide(index) {

    if (slides.length === 0) {
        return;
    }


    /* Jika melewati slide terakhir */

    if (index >= slides.length) {
        index = 0;
    }


    /* Jika kurang dari slide pertama */

    if (index < 0) {
        index = slides.length - 1;
    }


    currentSlide = index;


    /* Hapus active dari semua slide */

    slides.forEach(function (slide) {
        slide.classList.remove("active");
    });


    /* Hapus active dari semua dot */

    dots.forEach(function (dot) {
        dot.classList.remove("active");
    });


    /* Aktifkan slide */

    slides[currentSlide].classList.add("active");


    /* Aktifkan dot */

    if (dots[currentSlide]) {
        dots[currentSlide].classList.add("active");
    }

}


/* Slide berikutnya */

function nextSlide() {

    showSlide(currentSlide + 1);

}


/* Mulai autoplay */

function startSlider() {

    clearInterval(sliderTimer);

    sliderTimer = setInterval(
        nextSlide,
        5000
    );

}


/* Reset autoplay */

function resetSlider() {

    startSlider();

}


/* =====================================================
   SLIDER DOT CLICK
===================================================== */

dots.forEach(function (dot) {

    dot.addEventListener("click", function () {

        const slideNumber =
            Number(dot.dataset.slide);

        showSlide(slideNumber);

        resetSlider();

    });

});


/* =====================================================
   PAUSE SLIDER SAAT MOUSE DI ATAS
===================================================== */

const heroSlider =
    document.getElementById("heroSlider");


if (heroSlider) {

    heroSlider.addEventListener(
        "mouseenter",
        function () {

            clearInterval(sliderTimer);

        }
    );


    heroSlider.addEventListener(
        "mouseleave",
        function () {

            startSlider();

        }
    );

}


/* Jalankan slider */

showSlide(0);

startSlider();


/* =====================================================
   SEARCH
===================================================== */

const searchBtn =
    document.getElementById("searchBtn");

const searchPanel =
    document.getElementById("searchPanel");

const closeSearch =
    document.getElementById("closeSearch");

const searchInput =
    document.getElementById("searchInput");

const searchForm =
    document.getElementById("searchForm");

const searchResults =
    document.getElementById("searchResults");


/* Buka search */

function openSearch() {

    searchPanel.classList.add("open");

    document.body.classList.add("search-open");

    setTimeout(function () {

        searchInput.focus();

    }, 150);

}


/* Tutup search */

function closeSearchPanel() {

    searchPanel.classList.remove("open");

    document.body.classList.remove("search-open");

    searchInput.value = "";

    searchResults.innerHTML = "";

}


searchBtn.addEventListener(
    "click",
    openSearch
);


closeSearch.addEventListener(
    "click",
    closeSearchPanel
);


/* Klik area luar search */

searchPanel.addEventListener(
    "click",
    function (event) {

        if (event.target === searchPanel) {
            closeSearchPanel();
        }

    }
);


/* =====================================================
   SEARCH DATA
===================================================== */

const articles = [

    {
        title:
            "Update Game Mobile Terbaru Hadir dengan Banyak Fitur Baru",

        category:
            "MOBILE"
    },

    {
        title:
            "Game PC Baru Mulai Menarik Perhatian Para Gamer",

        category:
            "PC"
    },

    {
        title:
            "Tim Esports Indonesia Bersiap Menghadapi Kompetisi Besar",

        category:
            "ESPORTS"
    },

    {
        title:
            "Berita Esports Terbaru Hari Ini",

        category:
            "ESPORTS"
    },

    {
        title:
            "Game Baru yang Paling Ditunggu Gamer",

        category:
            "GAME"
    },

    {
        title:
            "Update Besar Game Mobile Populer",

        category:
            "MOBILE"
    },

    {
        title:
            "Hasil Pertandingan Turnamen Terbaru",

        category:
            "ESPORTS"
    },

    {
        title:
            "Perkembangan Industri Gaming Dunia",

        category:
            "GAMING"
    }

];


/* =====================================================
   SEARCH FUNCTION
===================================================== */

searchForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const keyword =
            searchInput.value
                .trim()
                .toLowerCase();


        if (keyword === "") {

            searchResults.innerHTML = `
                <p class="search-message">
                    Masukkan kata kunci terlebih dahulu.
                </p>
            `;

            return;

        }


        const results =
            articles.filter(function (article) {

                return (
                    article.title
                        .toLowerCase()
                        .includes(keyword)
                    ||
                    article.category
                        .toLowerCase()
                        .includes(keyword)
                );

            });


        /* Tidak ada hasil */

        if (results.length === 0) {

            searchResults.innerHTML = `
                <p class="search-message">
                    Berita dengan kata
                    "<strong>${keyword}</strong>"
                    tidak ditemukan.
                </p>
            `;

            return;

        }


        /* Tampilkan hasil */

        searchResults.innerHTML =
            results.map(function (article) {

                return `
                    <div class="search-result">

                        <span>
                            ${article.category}
                        </span>

                        <h3>
                            ${article.title}
                        </h3>

                    </div>
                `;

            }).join("");

    }
);


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Escape") {
            return;
        }


        closeMobileMenu();

        closeSearchPanel();

    }
);


/* =====================================================
   CLOSE SIDEBAR AFTER CLICKING SUBMENU LINK
===================================================== */

const submenuLinks =
    document.querySelectorAll(".category-menu a");


submenuLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            closeMobileMenu();

        }
    );

});


/* =====================================================
   PREVENT BROKEN "#" LINKS FROM JUMPING
===================================================== */

document
    .querySelectorAll('a[href="#"]')
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

            }
        );

    });


/* =====================================================
   END
===================================================== */
