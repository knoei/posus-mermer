const stoneGrid = document.getElementById("stoneGrid");

const searchInput = document.getElementById("stoneSearch");
const categoryFilter = document.getElementById("categoryFilter");
const colorFilter = document.getElementById("colorFilter");
const seriesFilter = document.getElementById("seriesFilter");

const productCount = document.getElementById("productCount");
const noProducts = document.getElementById("noProducts");

const categoryButtons = document.querySelectorAll(".category-showcase");


function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}


function renderStones(items) {

    stoneGrid.innerHTML = "";

    productCount.textContent = items.length;

    if (items.length === 0) {
        noProducts.style.display = "block";
        return;
    }

    noProducts.style.display = "none";

    items.forEach(stone => {

        const card = document.createElement("a");

        card.className = "stone-card";

        card.href = `urun.html?id=${stone.id}`;

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
                        <span>${capitalize(stone.category)}</span>
                        <span>${capitalize(stone.series)}</span>
                    </div>
                </div>

                <div class="stone-arrow">
                    <i class="fa-solid fa-arrow-right"></i>
                </div>

            </div>
        `;

        stoneGrid.appendChild(card);
    });
}


function filterStones() {

    const searchValue =
        searchInput.value.toLocaleLowerCase("tr");

    const selectedCategory =
        categoryFilter.value;

    const selectedColor =
        colorFilter.value;

    const selectedSeries =
        seriesFilter.value;


    const filtered = stones.filter(stone => {

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


    renderStones(filtered);
}


searchInput.addEventListener("input", filterStones);

categoryFilter.addEventListener("change", filterStones);

colorFilter.addEventListener("change", filterStones);

seriesFilter.addEventListener("change", filterStones);


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const category = button.dataset.category;

        categoryFilter.value = category;

        categoryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        filterStones();
    });

});


renderStones(stones);