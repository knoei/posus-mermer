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
const stoneLightboxBackdrop = stoneLightbox.querySelector(".stone-lightbox-backdrop");

let lastFocusedStoneCard = null;


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

function openStoneLightbox(stone, trigger) {
    lastFocusedStoneCard = trigger;
    stoneLightboxImage.src = stone.image;
    stoneLightboxImage.alt = `${stone.name} ${capitalize(stone.category)} taşı`;
    stoneLightboxTitle.textContent = stone.name;
    stoneLightboxCategory.textContent = capitalize(stone.category);
    stoneLightbox.classList.add("is-open");
    stoneLightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    stoneLightboxClose.focus();
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

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeStoneLightbox();
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


    pageItems.forEach(stone => {

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
            openStoneLightbox(stone, card);
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


    // FIRST PAGE
    if (currentPage > 3) {

        createPageButton(1, items);

        const dots =
            document.createElement("span");

        dots.className = "pagination-dots";
        dots.textContent = "...";

        pagination.appendChild(dots);
    }


    // NEAR CURRENT PAGE
    const startPage =
        Math.max(1, currentPage - 1);

    const endPage =
        Math.min(totalPages, currentPage + 1);


    for (
        let page = startPage;
        page <= endPage;
        page++
    ) {

        createPageButton(page, items);

    }


    // LAST PAGE
    if (currentPage < totalPages - 2) {

        const dots =
            document.createElement("span");

        dots.className = "pagination-dots";
        dots.textContent = "...";

        pagination.appendChild(dots);

        createPageButton(totalPages, items);
    }


    // NEXT
    const nextButton =
        document.createElement("button");

    nextButton.className = "pagination-arrow";

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

function createPageButton(page, items) {

    const pageButton =
        document.createElement("button");


    pageButton.textContent = page;


    if (page === currentPage) {

        pageButton.classList.add("active");

    }


    pageButton.addEventListener("click", () => {

        currentPage = page;

        renderStones(items);

    });


    pagination.appendChild(pageButton);
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
