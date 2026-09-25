const tablesGrid = document.getElementById("tablesGrid");
const tableCount = document.getElementById("tableCount");
const tablesEmpty = document.getElementById("tablesEmpty");

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

            <img
                src="${table.image}"
                alt="${table.name}"
            >

            <button
                class="table-favorite"
                aria-label="Favorilere ekle"
            >
                <i class="fa-regular fa-heart"></i>

            </button>
        
        </div>

        <div class="table-card-content">

            <h3>${table.name}</h3>

            <div class="table-meta">

                <span>${table.material}</span>

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