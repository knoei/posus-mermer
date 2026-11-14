/* =========================
        ALL PRODUCTS
========================= */

const allProducts = [
    ...stones,
    ...granites,
    ...travertines
];


/* =========================
        HTML ELEMENTS
========================= */

const stoneGrid = document.getElementById("stoneGrid");

const searchInput = document.getElementById("stoneSearch");
const categoryFilter = document.getElementById("categoryFilter");
const colorFilter = document.getElementById("colorFilter");
const seriesFilter = document.getElementById("seriesFilter");

const productCount = document.getElementById("productCount");
const noProducts = document.getElementById("noProducts");

const categoryButtons =
    document.querySelectorAll(".category-showcase");

const pagination =
    document.getElementById("pagination");

const stoneLightbox = document.getElementById("stoneLightbox");
const stoneLightboxImage = document.getElementById("stoneLightboxImage");
const stoneLightboxTitle = document.getElementById("stoneLightboxTitle");
const stoneLightboxCategory = document.getElementById("stoneLightboxCategory");
const stoneLightboxClose = document.getElementById("stoneLightboxClose");
const stoneLightboxPrev = document.getElementById("stoneLightboxPrev");
const stoneLightboxNext = document.getElementById("stoneLightboxNext");
const stoneLightboxBackdrop = stoneLightbox.querySelector(".stone-lightbox-backdrop");

let lastFocusedStoneCard = null;
let lightboxItems = [];
let activeLightboxIndex = -1;


/* =========================
   PAGINATION SETTINGS
========================= */

const PRODUCTS_PER_PAGE = 10;

let currentPage = 1;


/* =========================
   HELPER
========================= */

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}

function updateStoneLightbox(stone) {
    stoneLightboxImage.src = stone.image;
    stoneLightboxImage.alt = `${stone.name} ${capitalize(stone.category)} taşı`;
    stoneLightboxTitle.textContent = stone.name;
    stoneLightboxCategory.textContent = capitalize(stone.category);
    stoneLightboxPrev.disabled = lightboxItems.length < 2;
    stoneLightboxNext.disabled = lightboxItems.length < 2;
    stoneLightboxPrev.setAttribute("aria-label", `Önceki taşı göster: ${lightboxItems[(activeLightboxIndex - 1 + lightboxItems.length) % lightboxItems.length].name}`);
    stoneLightboxNext.setAttribute("aria-label", `Sonraki taşı göster: ${lightboxItems[(activeLightboxIndex + 1) % lightboxItems.length].name}`);
}

function openStoneLightbox(stone, trigger, items, index) {
    lastFocusedStoneCard = trigger;
    lightboxItems = items;
    activeLightboxIndex = index;
    updateStoneLightbox(stone);
    stoneLightbox.classList.add("is-open");
    stoneLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    stoneLightboxClose.focus();
}

function navigateStoneLightbox(direction) {
    if (!stoneLightbox.classList.contains("is-open") || lightboxItems.length < 2) {
        return;
    }

    activeLightboxIndex =
        (activeLightboxIndex + direction + lightboxItems.length) % lightboxItems.length;

    updateStoneLightbox(lightboxItems[activeLightboxIndex]);
}

function closeStoneLightbox() {
    if (!stoneLightbox.classList.contains("is-open")) {
        return;
    }

    stoneLightbox.classList.remove("is-open");
    stoneLightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    stoneLightboxImage.src = "";
    lastFocusedStoneCard?.focus();
}

stoneLightboxClose.addEventListener("click", closeStoneLightbox);
stoneLightboxBackdrop.addEventListener("click", closeStoneLightbox);
stoneLightboxPrev.addEventListener("click", () => navigateStoneLightbox(-1));
stoneLightboxNext.addEventListener("click", () => navigateStoneLightbox(1));

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeStoneLightbox();
    }

    if (event.key === "ArrowLeft" && stoneLightbox.classList.contains("is-open")) {
        event.preventDefault();
        navigateStoneLightbox(-1);
    }

    if (event.key === "ArrowRight" && stoneLightbox.classList.contains("is-open")) {
        event.preventDefault();
        navigateStoneLightbox(1);
    }
});


/* =========================
   RENDER PRODUCTS
========================= */

function renderStones(items) {

    stoneGrid.innerHTML = "";

    productCount.textContent = items.length;


    if (items.length === 0) {

        noProducts.style.display = "block";

        pagination.innerHTML = "";

        return;
    }


    noProducts.style.display = "none";


    const startIndex =
        (currentPage - 1) * PRODUCTS_PER_PAGE;

    const endIndex =
        startIndex + PRODUCTS_PER_PAGE;


    const pageItems =
        items.slice(startIndex, endIndex);


    pageItems.forEach((stone, pageIndex) => {

        const card =
            document.createElement("button");


        card.className = "stone-card";
        card.type = "button";
        card.setAttribute("aria-label", `${stone.name} taşını büyüt`);


        card.innerHTML = `
            <div class="stone-image">

                <img
                    src="${stone.image}"
                    alt="${stone.name}"
                    loading="lazy"
                >

            </div>


            <div class="stone-info">

                <div>

                    <h3>${stone.name}</h3>

                    <div class="stone-tags">

                        <span>
                            ${capitalize(stone.category)}
                        </span>

                    </div>

                </div>


                <div class="stone-arrow">

                    <i class="fa-solid fa-expand"></i>

                </div>

            </div>
        `;

        card.addEventListener("click", () => {
            openStoneLightbox(stone, card, items, startIndex + pageIndex);
        });


        stoneGrid.appendChild(card);

    });


    renderPagination(items);
}


/* =========================
   PAGINATION
========================= */

function renderPagination(items) {

    pagination.innerHTML = "";

    const totalPages =
        Math.ceil(items.length / PRODUCTS_PER_PAGE);

    if (totalPages <= 1) {
        return;
    }


    // PREVIOUS
    const previousButton =
        document.createElement("button");

    previousButton.className = "pagination-arrow";
    previousButton.setAttribute("aria-label", "Önceki sayfa");
    previousButton.title = "Önceki sayfa";

    previousButton.innerHTML =
        '<i class="fa-solid fa-chevron-left"></i>';

    previousButton.disabled =
        currentPage === 1;

    previousButton.addEventListener("click", () => {

        if (currentPage > 1) {

            currentPage--;

            renderStones(items);
        }

    });

    pagination.appendChild(previousButton);


    // FIXED PAGE SLOTS
    const pageSlots = document.createElement("div");
    pageSlots.className = "pagination-pages";
    pageSlots.setAttribute("aria-label", "Sayfa numaraları");

    let pageTokens;

    if (totalPages <= 7) {
        pageTokens = Array.from(
            { length: totalPages },
            (_, index) => index + 1
        );
    } else if (currentPage <= 4) {
        pageTokens = [1, 2, 3, 4, 5, "dots", totalPages];
    } else if (currentPage >= totalPages - 3) {
        pageTokens = [
            1,
            "dots",
            totalPages - 4,
            totalPages - 3,
            totalPages - 2,
            totalPages - 1,
            totalPages
        ];
    } else {
        pageTokens = [
            1,
            "dots",
            currentPage - 1,
            currentPage,
            currentPage + 1,
            "dots",
            totalPages
        ];
    }

    pageTokens.forEach(token => {
        if (token === "dots") {
            const dots = document.createElement("span");
            dots.className = "pagination-dots";
            dots.textContent = "…";
            dots.setAttribute("aria-hidden", "true");
            pageSlots.appendChild(dots);
            return;
        }

        createPageButton(token, items, pageSlots);
    });

    while (pageSlots.children.length < 7) {
        const spacer = document.createElement("span");
        spacer.className = "pagination-spacer";
        spacer.setAttribute("aria-hidden", "true");
        pageSlots.appendChild(spacer);
    }

    pagination.appendChild(pageSlots);


    // NEXT
    const nextButton =
        document.createElement("button");

    nextButton.className = "pagination-arrow";
    nextButton.setAttribute("aria-label", "Sonraki sayfa");
    nextButton.title = "Sonraki sayfa";

    nextButton.innerHTML =
        '<i class="fa-solid fa-chevron-right"></i>';

    nextButton.disabled =
        currentPage === totalPages;

    nextButton.addEventListener("click", () => {

        if (currentPage < totalPages) {

            currentPage++;

            renderStones(items);

        }

    });

    pagination.appendChild(nextButton);


    // PAGE INFO
    const pageInfo =
        document.createElement("span");

    pageInfo.className = "pagination-info";

    pageInfo.textContent =
        `Sayfa ${currentPage} / ${totalPages}`;

    pagination.appendChild(pageInfo);
}

function createPageButton(page, items, target = pagination) {

    const pageButton =
        document.createElement("button");


    pageButton.textContent = page;
    pageButton.setAttribute("aria-label", `${page}. sayfaya git`);


    if (page === currentPage) {

        pageButton.classList.add("active");

    }


    pageButton.addEventListener("click", () => {

        currentPage = page;

        renderStones(items);

    });


    target.appendChild(pageButton);
}


/* =========================
   FILTER PRODUCTS
========================= */

function filterStones() {

    const searchValue =
        searchInput.value
            .toLocaleLowerCase("tr");


    const selectedCategory =
        categoryFilter.value;


    const selectedColor =
        colorFilter.value;


    const selectedSeries =
        seriesFilter.value;


    const filtered =
        allProducts.filter(stone => {


            const matchesSearch =
                stone.name
                    .toLocaleLowerCase("tr")
                    .includes(searchValue);


            const matchesCategory =
                selectedCategory === "all" ||
                stone.category === selectedCategory;


            const matchesColor =
                selectedColor === "all" ||
                stone.color === selectedColor;


            const matchesSeries =
                selectedSeries === "all" ||
                stone.series === selectedSeries;


            return (
                matchesSearch &&
                matchesCategory &&
                matchesColor &&
                matchesSeries
            );

        });


    currentPage = 1;

    renderStones(filtered);
}


/* =========================
   FILTER EVENTS
========================= */

searchInput.addEventListener(
    "input",
    filterStones
);


categoryFilter.addEventListener(
    "change",
    filterStones
);


colorFilter.addEventListener(
    "change",
    filterStones
);


seriesFilter.addEventListener(
    "change",
    filterStones
);


/* =========================
   CATEGORY CARDS
========================= */

categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category =
            button.dataset.category;


        categoryFilter.value =
            category;


        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        currentPage = 1;

        filterStones();

    });

});


/* =========================
   FIRST RENDER
========================= */

renderStones(allProducts);
