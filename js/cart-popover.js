(() => {
    const cartButtons = document.querySelectorAll(".cart-btn");

    if (!cartButtons.length) return;

    const formatPrice = value => new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        maximumFractionDigits: 0
    }).format(value);

    const updateTieredPrice = item => {
        const retailUnitPrice = Number(item.retailUnitPrice);
        const wholesaleUnitPrice = Number(item.wholesaleUnitPrice);

        if ([retailUnitPrice, wholesaleUnitPrice].every(Number.isFinite)) {
            const isWholesale = Number(item.quantity) >= 10;
            item.price = isWholesale ? wholesaleUnitPrice : retailUnitPrice;
            item.priceTier = isWholesale ? "wholesale" : "retail";
            return item;
        }

        const basePrice = Number(item.basePrice);
        const retailSurcharge = Number(item.retailLegSurcharge);
        const wholesaleSurcharge = Number(item.wholesaleLegSurcharge);

        if (![basePrice, retailSurcharge, wholesaleSurcharge].every(Number.isFinite)) {
            return item;
        }

        const isWholesale = Number(item.quantity) >= 10;
        item.legSurcharge = isWholesale ? wholesaleSurcharge : retailSurcharge;
        item.price = basePrice + item.legSurcharge;
        item.priceTier = isWholesale ? "wholesale" : "retail";
        return item;
    };

    const getCart = () => {
        try {
            const saved = JSON.parse(
                localStorage.getItem("posusCart") || "[]"
            );

            if (!Array.isArray(saved)) return [];

            return saved.filter(item =>
                item &&
                Number.isFinite(Number(item.price)) &&
                Number(item.price) >= 0 &&
                Number.isInteger(Number(item.quantity)) &&
                Number(item.quantity) > 0
            ).map(item => updateTieredPrice({
                ...item,
                price: Number(item.price),
                quantity: Number(item.quantity)
            }));
        } catch {
            return [];
        }
    };

    document.body.insertAdjacentHTML("beforeend", `
        <aside class="mini-cart" id="miniCart" aria-hidden="true"
               aria-label="Mini sepet">
            <div class="mini-cart-header">
                <div>
                    <span>SEPETİNİZ</span>
                    <h2>Alışveriş Özeti</h2>
                </div>
                <button class="mini-cart-close" type="button"
                        aria-label="Mini sepeti kapat">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <div class="mini-cart-items"></div>

            <div class="mini-cart-empty">
                <i class="fa-solid fa-bag-shopping"></i>
                <strong>Sepetiniz boş</strong>
                <span>Masa koleksiyonumuzu keşfetmeye başlayın.</span>
            </div>

            <div class="mini-cart-footer">
                <div class="mini-cart-total">
                    <span>Ürün toplamı</span>
                    <strong>₺0</strong>
                </div>
                <a href="sepet.html" class="mini-cart-link">
                    Sepete Git
                    <i class="fa-solid fa-arrow-right"></i>
                </a>
                <small>Kargo bedeli teslimat konumuna göre hesaplanır.</small>
            </div>
        </aside>
    `);

    const miniCart = document.getElementById("miniCart");
    const itemList = miniCart.querySelector(".mini-cart-items");
    const emptyState = miniCart.querySelector(".mini-cart-empty");
    const footer = miniCart.querySelector(".mini-cart-footer");
    const total = miniCart.querySelector(".mini-cart-total strong");
    const closeButton = miniCart.querySelector(".mini-cart-close");
    let lastCartActionAt = 0;

    const updateCounters = cart => {
        const count = cart.reduce(
            (sum, item) => sum + item.quantity,
            0
        );

        document.querySelectorAll(".cart-count").forEach(counter => {
            counter.textContent = count;
        });
    };

    const createItem = (item, index) => {
        const row = document.createElement("article");
        row.className = "mini-cart-item";
        row.innerHTML = `
            <img class="mini-cart-image" alt="">
            <div class="mini-cart-info">
                <div class="mini-cart-item-top">
                    <div>
                        <h3></h3>
                        <p></p>
                    </div>
                    <button class="mini-cart-remove" type="button"
                            data-action="remove" aria-label="Ürünü kaldır">
                        <i class="fa-regular fa-trash-can"></i>
                    </button>
                </div>
                <div class="mini-cart-item-bottom">
                    <div class="mini-cart-quantity" aria-label="Ürün adedi">
                        <button type="button" data-action="decrease"
                                aria-label="Adedi azalt">−</button>
                        <span></span>
                        <button type="button" data-action="increase"
                                aria-label="Adedi artır">+</button>
                    </div>
                    <strong class="mini-cart-price"></strong>
                </div>
            </div>
        `;

        row.dataset.index = index;

        const image = row.querySelector(".mini-cart-image");
        image.src = item.image || "";
        image.alt = `${item.name || "Ürün"} masa`;

        row.querySelector("h3").textContent = item.name || "Ürün";
        row.querySelector("p").textContent =
            `${item.material || "Doğal taş"} · ${item.size} cm${item.leg ? ` · ${item.leg}` : ""}${item.priceTier === "wholesale" ? " · Toptan fiyat" : ""}`;
        row.querySelector(".mini-cart-quantity span").textContent =
            item.quantity;
        row.querySelector("[data-action='decrease']").disabled =
            item.quantity <= 1;
        row.querySelector(".mini-cart-price").textContent =
            formatPrice(item.price * item.quantity);

        return row;
    };

    const render = () => {
        const cart = getCart();
        itemList.innerHTML = "";
        updateCounters(cart);

        const isEmpty = cart.length === 0;
        emptyState.classList.toggle("is-visible", isEmpty);
        footer.classList.toggle("is-hidden", isEmpty);

        if (isEmpty) return;

        cart.forEach((item, index) => {
            itemList.appendChild(createItem(item, index));
        });

        const amount = cart.reduce(
            (sum, item) => sum + item.price * item.quantity,
            0
        );
        total.textContent = formatPrice(amount);
    };

    const saveCart = cart => {
        localStorage.setItem("posusCart", JSON.stringify(cart));
        render();
        window.dispatchEvent(new CustomEvent("posusCartUpdated", {
            detail: { source: "mini-cart" }
        }));
    };

    const open = () => {
        render();
        miniCart.classList.add("is-open");
        miniCart.setAttribute("aria-hidden", "false");
        cartButtons.forEach(button => {
            button.setAttribute("aria-expanded", "true");
        });
    };

    const close = () => {
        miniCart.classList.remove("is-open");
        miniCart.setAttribute("aria-hidden", "true");
        cartButtons.forEach(button => {
            button.setAttribute("aria-expanded", "false");
        });
    };

    cartButtons.forEach(button => {
        button.type = "button";
        button.setAttribute("aria-label", "Sepeti aç");
        button.setAttribute("aria-controls", "miniCart");
        button.setAttribute("aria-expanded", "false");
        button.removeAttribute("onclick");

        button.addEventListener("click", event => {
            event.stopPropagation();
            miniCart.classList.contains("is-open") ? close() : open();
        });
    });

    closeButton.addEventListener("click", close);

    itemList.addEventListener("click", event => {
        const actionButton = event.target.closest("[data-action]");
        if (!actionButton) return;

        event.stopPropagation();

        const now = Date.now();
        if (now - lastCartActionAt < 250) return;
        lastCartActionAt = now;

        const row = actionButton.closest(".mini-cart-item");
        const index = Number(row.dataset.index);
        const cart = getCart();

        if (!cart[index]) return;

        const action = actionButton.dataset.action;

        if (action === "increase") {
            cart[index].quantity += 1;
            updateTieredPrice(cart[index]);
        } else if (action === "decrease" && cart[index].quantity > 1) {
            cart[index].quantity -= 1;
            updateTieredPrice(cart[index]);
        } else if (action === "remove") {
            cart.splice(index, 1);
        }

        saveCart(cart);
    });

    document.addEventListener("click", event => {
        if (!miniCart.contains(event.target) &&
            !event.target.closest(".cart-btn")) {
            close();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") close();
    });

    window.addEventListener("posusCartUpdated", event => {
        if (event.detail?.source !== "mini-cart") render();
    });

    render();
})();
