(function () {
    const STORAGE_KEY = "posusWishlist";
    const tableMap = new Map(tables.map(table => [Number(table.id), table]));
    const wishlistButton = document.querySelector(".wishlist-btn");

    if (!wishlistButton) return;

    function readIds() {
        try {
            const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
            return [...new Set(saved.map(Number))].filter(id => tableMap.has(id));
        } catch {
            return [];
        }
    }

    let favoriteIds = readIds();

    wishlistButton.insertAdjacentHTML("beforeend", `
        <span class="wishlist-count" aria-live="polite">0</span>
    `);

    document.body.insertAdjacentHTML("beforeend", `
        <aside class="wishlist-panel" id="wishlistPanel" aria-hidden="true" aria-labelledby="wishlistTitle">
            <div class="wishlist-panel-header">
                <div>
                    <span>SEÇTİKLERİNİZ</span>
                    <h2 id="wishlistTitle">Favorilerim</h2>
                </div>
                <button class="wishlist-panel-close" type="button" aria-label="Favorileri kapat">
                    <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
            </div>
            <div class="wishlist-items"></div>
            <div class="wishlist-empty">
                <i class="fa-regular fa-heart" aria-hidden="true"></i>
                <strong>Favori listeniz boş</strong>
                <span>Beğendiğiniz masalardaki kalp simgesine dokunun.</span>
            </div>
            <div class="wishlist-panel-footer">
                <button class="wishlist-clear" type="button">
                    <i class="fa-solid fa-trash-can" aria-hidden="true"></i>
                    Favorileri temizle
                </button>
            </div>
        </aside>
    `);

    const panel = document.getElementById("wishlistPanel");
    const itemList = panel.querySelector(".wishlist-items");
    const emptyState = panel.querySelector(".wishlist-empty");
    const footer = panel.querySelector(".wishlist-panel-footer");
    const closeButton = panel.querySelector(".wishlist-panel-close");
    const clearButton = panel.querySelector(".wishlist-clear");
    const count = wishlistButton.querySelector(".wishlist-count");

    function save() {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(favoriteIds));
        render();
        window.dispatchEvent(new CustomEvent("posus:wishlist-change", {
            detail: { ids: [...favoriteIds] }
        }));
    }

    function render() {
        const items = favoriteIds.map(id => tableMap.get(id)).filter(Boolean);

        count.textContent = items.length;
        count.classList.toggle("is-visible", items.length > 0);
        wishlistButton.classList.toggle("is-active", items.length > 0);
        wishlistButton.setAttribute("aria-label", `Favoriler (${items.length})`);
        itemList.innerHTML = "";
        emptyState.classList.toggle("is-visible", items.length === 0);
        footer.classList.toggle("is-hidden", items.length === 0);

        items.forEach(table => {
            const row = document.createElement("article");
            row.className = "wishlist-item";
            row.dataset.tableId = table.id;
            row.innerHTML = `
                <a class="wishlist-item-link" href="masa-detay.html?id=${table.id}">
                    <img class="wishlist-item-image" src="${table.image}" alt="${table.name}">
                    <span class="wishlist-item-info">
                        <strong>${table.name}</strong>
                        <small>${table.type ? `${table.type} · ` : ""}${table.material}</small>
                        <b>${table.pricePending ? "Fiyat için iletişime geçin" : formatWishlistPrice(table.price)}</b>
                    </span>
                </a>
                <button class="wishlist-remove" type="button" aria-label="${table.name} ürününü favorilerden kaldır">
                    <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                </button>
            `;
            itemList.appendChild(row);
        });
    }

    function formatWishlistPrice(price) {
        return new Intl.NumberFormat("tr-TR").format(price) + " ₺";
    }

    function open() {
        window.dispatchEvent(new CustomEvent("posus:panel-open", {
            detail: { panel: "wishlist" }
        }));
        panel.classList.add("is-open");
        panel.setAttribute("aria-hidden", "false");
        wishlistButton.setAttribute("aria-expanded", "true");
        closeButton.focus();
    }

    function close() {
        panel.classList.remove("is-open");
        panel.setAttribute("aria-hidden", "true");
        wishlistButton.setAttribute("aria-expanded", "false");
    }

    function toggle(tableId) {
        const id = Number(tableId);

        if (favoriteIds.includes(id)) {
            favoriteIds = favoriteIds.filter(favoriteId => favoriteId !== id);
        } else if (tableMap.has(id)) {
            favoriteIds.push(id);
        }

        save();
    }

    wishlistButton.setAttribute("aria-controls", "wishlistPanel");
    wishlistButton.setAttribute("aria-expanded", "false");
    wishlistButton.addEventListener("click", () => {
        panel.classList.contains("is-open") ? close() : open();
    });
    closeButton.addEventListener("click", close);
    clearButton.addEventListener("click", () => {
        favoriteIds = [];
        save();
    });
    itemList.addEventListener("click", event => {
        const removeButton = event.target.closest(".wishlist-remove");
        if (!removeButton) return;

        const row = removeButton.closest(".wishlist-item");
        toggle(Number(row.dataset.tableId));
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && panel.classList.contains("is-open")) close();
    });
    document.addEventListener("click", event => {
        if (!panel.classList.contains("is-open")) return;
        if (panel.contains(event.target) || wishlistButton.contains(event.target)) return;
        close();
    });
    window.addEventListener("posus:panel-open", event => {
        if (event.detail?.panel !== "wishlist") close();
    });

    window.PosusWishlist = {
        has: tableId => favoriteIds.includes(Number(tableId)),
        toggle,
        open
    };

    render();
})();
