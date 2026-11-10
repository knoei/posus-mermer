const tablesGrid = document.getElementById("tablesGrid");
const tableCount = document.getElementById("tableCount");
const tablesEmpty = document.getElementById("tablesEmpty");
const categoryInputs = document.querySelectorAll('input[name="category"]');
const shapeInputs = document.querySelectorAll('input[name="shape"]');
const materialInputs = document.querySelectorAll('input[name="material"]');
const minSizeInput = document.getElementById("minSize");
const maxSizeInput = document.getElementById("maxSize");
const applySizeFilter = document.getElementById("applySizeFilter");
const clearFilters = document.getElementById("clearFilters");
const sortTables = document.getElementById("sortTables");

function formatPrice(price) {
    return new Intl.NumberFormat("tr-TR").format(price) + " ₺";
}

function renderTables(productList) {
    tablesGrid.innerHTML = "";

    if (productList.length === 0) {
        tablesEmpty.style.display = "block";
        tableCount.textContent = "0";
        return;
    }

tablesEmpty.style.display = "none";
tableCount.textContent = productList.length;

productList.forEach((table) => {
    const card = document.createElement("article");

    card.classList.add("table-product-card");

    card.innerHTML = `
        <div class="table-card-image">

            <img src="${table.image}" alt="${table.name}">                

            ${table.category === "dining" ? `
                <span class="table-usage-badge">Ev & Yaşam</span>
            ` : ""}

            <button
                class="table-favorite"
                aria-label="Favorilere ekle"
            >
                <i class="fa-regular fa-heart"></i>
            </button>

        </div>

        <div class="table-card-content">

            <div class="table-card-top">

                <div>
                    <h3>${table.name}</h3>

                    <span class="table-material">
                        ${table.type ? `${table.type} · ` : ""}${table.material}
                    </span>
                </div>

            </div>

            <div class="table-card-bottom">

                <div class="table-price">
                    <strong>
                        ${formatPrice(table.price)}
                    </strong>

                    <span class="sub-price">
                        'dan başlayan fiyatlarla
                    </span>
                </div>

                <a
                    href="masa-detay.html?id=${table.id}"
                    class="table-detail-btn"
                >
                    İncele
                    <i class="fa-solid fa-arrow-right"></i>
                </a>

            </div>

        </div>
    `;

    card.addEventListener("click", (event) => {
        if (event.target.closest(".table-favorite")) return;

        window.location.href = `masa-detay.html?id=${table.id}`
    })

    tablesGrid.appendChild(card);
});

}

function capitalizeShape(shape) {
    const shapes = {
        yuvarlak: "Yuvarlak",
        kare: "Kare",
        dikdortgen: "Dikdörtgen"
    };

    return shapes[shape] || shape;
}

renderTables(tables);

function getSelectedValue(inputName) {
    return document.querySelector(`input[name="${inputName}"]:checked`).value;
}

function getAvailableSizes(table) {
    return Object.entries(table.prices)
        .filter(([, price]) => price !== null)
        .map(([size]) => Number(size));
}

function applyFilters() {
    const selectedCategory = getSelectedValue("category");
    const selectedShape = getSelectedValue("shape");
    const selectedMaterial = getSelectedValue("material");
    const minSize = Number(minSizeInput.value) || 0;
    const maxSize = Number(maxSizeInput.value) || Infinity;

    const filteredTables = tables.filter(table => {
        const categoryMatches = selectedCategory === "all" || table.category === selectedCategory;
        const shapeMatches = selectedShape === "all" || table.shape === selectedShape;
        const materialMatches = selectedMaterial === "all" || table.material.toLocaleLowerCase("tr-TR") === selectedMaterial;
        const sizeMatches = getAvailableSizes(table).some(size => size >= minSize && size <= maxSize);

        return categoryMatches && shapeMatches && materialMatches && sizeMatches;
    });

    const sortedTables = [...filteredTables];

    if (sortTables.value === "price-low") {
        sortedTables.sort((a, b) => a.price - b.price);
    } else if (sortTables.value === "price-high") {
        sortedTables.sort((a, b) => b.price - a.price);
    } else if (sortTables.value === "name") {
        sortedTables.sort((a, b) => a.name.localeCompare(b.name, "tr"));
    }

    renderTables(sortedTables);
}

[...categoryInputs, ...shapeInputs, ...materialInputs].forEach(input => {
    input.addEventListener("change", applyFilters);
});

applySizeFilter.addEventListener("click", applyFilters);
sortTables.addEventListener("change", applyFilters);

clearFilters.addEventListener("click", () => {
    document.querySelector('input[name="category"][value="all"]').checked = true;
    document.querySelector('input[name="shape"][value="all"]').checked = true;
    document.querySelector('input[name="material"][value="all"]').checked = true;
    minSizeInput.value = "";
    maxSizeInput.value = "";
    sortTables.value = "featured";
    applyFilters();
});
