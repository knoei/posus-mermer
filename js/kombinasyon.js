const combinationStones = [
    { name: "Muğla Beyazı", tabletop: "images/tabletops/tabletop-01-clean.png", texture: "images/marbles/mugla-beyazi.jpg" },
    { name: "Silvia Beige", tabletop: "images/tabletops/tabletop-silvia-beige.png", texture: "images/tabletops/tabletop-silvia-beige.png" },
    { name: "Golden Mist", tabletop: "images/tabletops/tabletop-golden-mist.png", texture: "images/tabletops/tabletop-golden-mist.png" },
    { name: "Aurelia Gold", tabletop: "images/tabletops/tabletop-06-clean.png", texture: "images/marbles/golden-brown.jpg" },
    { name: "Adranos", tabletop: "images/tabletops/tabletop-adranos.png", texture: "images/tabletops/tabletop-adranos.png" },
    { name: "Emperador", tabletop: "images/tabletops/tabletop-emperador.png", texture: "images/tabletops/tabletop-emperador.png" },
    { name: "Akhisar Beji", tabletop: "images/tabletops/tabletop-akhisar-beji.png", texture: "images/tabletops/tabletop-akhisar-beji.png" },
    { name: "Spider Beige", tabletop: "images/tabletops/tabletop-spider-beige.png", texture: "images/tabletops/tabletop-spider-beige.png" },
    { name: "Tundra Gri", tabletop: "images/tabletops/tabletop-tundra-gri.png", texture: "images/tabletops/tabletop-tundra-gri.png" },
    { name: "Traverten", tabletop: "images/tabletops/tabletop-04-clean.png", texture: "images/travertines/denizli-travertine.jpg" },
    { name: "Verde Guatemala", tabletop: "images/tabletops/tabletop-03-clean.png", texture: "images/marbles/verde-guatemala.jpg" },
    { name: "Elazığ Petrol Yeşili", tabletop: "images/tabletops/tabletop-elazig-petrol-yesili.png", texture: "images/tabletops/tabletop-elazig-petrol-yesili.png" },
    { name: "Star Galaxy", tabletop: "images/tabletops/tabletop-05-clean.png", texture: "images/granites/star-galaxy.jpg" },
    { name: "Alexander Black", tabletop: "images/tabletops/tabletop-02-clean.png", texture: "images/marbles/nero-marquina.jpg" },
    { name: "Elazığ Vişne", tabletop: "images/tabletops/tabletop-elazig-visne.png", texture: "images/tabletops/tabletop-elazig-visne.png" },
    { name: "Menekşe", tabletop: "images/tabletops/tabletop-menekse.png", texture: "images/tabletops/tabletop-menekse.png" },
    { name: "Leylak", tabletop: "images/tabletops/tabletop-leylak.png", texture: "images/tabletops/tabletop-leylak.png" },
    { name: "Sofita Bej", tabletop: "images/tabletops/tabletop-sofita-bej.png", texture: "images/tabletops/tabletop-sofita-bej.png" },
    { name: "Ash Black", tabletop: "images/tabletops/tabletop-ash-black.png", texture: "images/tabletops/tabletop-ash-black.png" }
];

const combinationLegs = [
    { name: "Yuvarlak Taban Siyah", image: "images/table-legs/cafe-leg-01-clean.png", retailSurcharge: 0, wholesaleSurcharge: 0 },
    { name: "Kare Taban Siyah", image: "images/table-legs/cafe-leg-02-clean.png", retailSurcharge: 0, wholesaleSurcharge: 0 },
    { name: "Standart Döküm Dört Ayak", image: "images/table-legs/cafe-leg-13-clean.png", retailSurcharge: 0, wholesaleSurcharge: 0 },
    { name: "Kademeli Yuvarlak Siyah", image: "images/table-legs/cafe-leg-03-angle-v2.png", retailSurcharge: 750, wholesaleSurcharge: 500 },
    { name: "Klasik Dekoratif Siyah", image: "images/table-legs/cafe-leg-04-clean.png", retailSurcharge: 1750, wholesaleSurcharge: 1000 },
    { name: "Üç Küre Dekoratif", image: "images/table-legs/cafe-leg-05-clean.png", retailSurcharge: 1250, wholesaleSurcharge: 750 },
    { name: "Konik Siyah", image: "images/table-legs/cafe-leg-06-clean.png", retailSurcharge: 750, wholesaleSurcharge: 500 },
    { name: "Kare Paslanmaz", image: "images/table-legs/cafe-leg-07-clean.png", retailSurcharge: 1250, wholesaleSurcharge: 750 },
    { name: "Yuvarlak Paslanmaz", image: "images/table-legs/cafe-leg-08-clean.png", retailSurcharge: 1250, wholesaleSurcharge: 750 },
    { name: "Çift Küre Siyah", image: "images/table-legs/cafe-leg-09-clean.png", retailSurcharge: 750, wholesaleSurcharge: 500 },
    { name: "Gold Dekoratif", image: "images/table-legs/cafe-leg-10-angle-v2.png", retailSurcharge: 2000, wholesaleSurcharge: 1250 },
    { name: "Klasik Döküm Dört Ayak", image: "images/table-legs/cafe-leg-11-clean.png", retailSurcharge: 1250, wholesaleSurcharge: 750 },
    { name: "Trompet Form Siyah", image: "images/table-legs/cafe-leg-12-clean.png", previewClass: "leg-trumpet-large", retailSurcharge: 4000, wholesaleSurcharge: 3000 }
];

const combinationEnvironments = [
    {
        name: "Şehir Kafesi",
        image: "images/environments/environment-studio.png?v=4",
        description: "Aydınlık, yalın ve gün ışıklı şehir kafesi.",
        mode: "street-cafe"
    },
    {
        name: "Modern Pastane",
        image: "images/environments/environment-patisserie.png?v=1",
        description: "Gün ışığı alan, sıcak ve modern mahalle pastanesi.",
        mode: "patisserie"
    },
    {
        name: "Endüstriyel Kafe",
        image: "images/environments/environment-cafe.png?v=4",
        description: "Tuğla, çelik ve beton dokulu yaratıcı kafe.",
        mode: "cafe"
    },
    {
        name: "Otel Restoranı",
        image: "images/environments/environment-hotel.png?v=1",
        description: "Sade, işlevsel ve çağdaş şehir oteli restoranı.",
        mode: "hotel"
    },
    {
        name: "Akşam Restoranı",
        image: "images/environments/environment-restaurant.png?v=4",
        description: "Sıcak aydınlatmalı, şık ve samimi restoran düzeni.",
        mode: "restaurant"
    },
    {
        name: "Bahçe Terası",
        image: "images/environments/environment-terrace.png?v=4",
        description: "Şehir içinde, tenteli ve camla korunan gerçek kafe terası.",
        mode: "terrace"
    },
    {
        name: "Çatı Kafesi",
        image: "images/environments/environment-rooftop.png?v=1",
        description: "Pergolalı, şehir manzaralı ve korunaklı çatı kafesi.",
        mode: "rooftop"
    },
    {
        name: "Sahil Restoranı",
        image: "images/environments/environment-seaside.png?v=1",
        description: "Deniz manzaralı, aydınlık ve sakin sahil restoranı.",
        mode: "seaside"
    }
];

let currentStoneIndex = 0;
let currentLegIndex = 0;
let currentEnvironmentIndex = 0;
const comboTabletopImage = document.getElementById("comboTabletopImage");
const stoneSwatch = document.getElementById("stoneSwatch");
const comboLegImage = document.getElementById("comboLegImage");
const legMiniatureImage = document.getElementById("legMiniatureImage");
const environmentBackdrop = document.getElementById("environmentBackdrop");
const environmentMiniature = document.getElementById("environmentMiniature");
const combinationSize = document.getElementById("combinationSize");
const combinationQuantity = document.getElementById("combinationQuantity");
const combinationUnitPrice = document.getElementById("combinationUnitPrice");
const combinationTotalPrice = document.getElementById("combinationTotalPrice");
const purchaseSelection = document.getElementById("purchaseSelection");
const purchaseMessage = document.getElementById("purchaseMessage");
const combinationAddToCart = document.getElementById("combinationAddToCart");
const combinationGoToCart = document.getElementById("combinationGoToCart");
const tableSizeBadge = document.getElementById("tableSizeBadge");
const tableSizeBadgeValue = document.getElementById("tableSizeBadgeValue");

function getSelectedTableProduct() {
    const stone = combinationStones[currentStoneIndex];
    return tables.find(table =>
        table.category === "cafe-restaurant" && table.name === stone.name
    );
}

function formatPrice(price) {
    return new Intl.NumberFormat("tr-TR", {
        style: "currency",
        currency: "TRY",
        maximumFractionDigits: 0
    }).format(price);
}

function getLegSurcharge(leg, quantity) {
    return quantity >= 10
        ? leg.wholesaleSurcharge
        : leg.retailSurcharge;
}

function getTablePrice(product, size, quantity) {
    return product?.prices?.[size];
}

function getCart() {
    try {
        const saved = JSON.parse(localStorage.getItem("posusCart") || "[]");
        return Array.isArray(saved) ? saved : [];
    } catch {
        return [];
    }
}

function renderPurchaseSizes() {
    const product = getSelectedTableProduct();
    const previousSize = combinationSize.value;
    combinationSize.innerHTML = "";

    if (!product) {
        combinationAddToCart.disabled = true;
        updatePurchase();
        return;
    }

    const availableSizes = Object.entries(product.prices)
        .filter(([, price]) => price !== null && price !== undefined)
        .map(([size]) => size);

    availableSizes.forEach(size => {
        const option = document.createElement("option");
        option.value = size;
        option.textContent = `Ø ${size} cm`;
        combinationSize.appendChild(option);
    });

    if (availableSizes.includes(previousSize)) {
        combinationSize.value = previousSize;
    }

    updatePurchase();
}

function updatePurchase() {
    const stone = combinationStones[currentStoneIndex];
    const leg = combinationLegs[currentLegIndex];
    const product = getSelectedTableProduct();
    const selectedSize = combinationSize.value;
    const quantity = Math.max(1, parseInt(combinationQuantity.value, 10) || 1);
    const basePrice = getTablePrice(product, selectedSize, quantity);
    const legSurcharge = getLegSurcharge(leg, quantity);
    const unitPrice = Number(basePrice) + legSurcharge;

    tableSizeBadgeValue.textContent = `${selectedSize || 60} cm`;
    tableSizeBadge.setAttribute(
        "aria-label",
        `Tabla çapı ${selectedSize || 60} santimetre`
    );

    const previewWidth = selectedSize
        ? Math.min(56, 44 + (Number(selectedSize) - 60) * .3)
        : 44;
    comboTabletopImage.style.width = `${previewWidth}%`;

    const isWholesale = quantity >= 10;
    const legPriceLabel = legSurcharge > 0
        ? `${isWholesale ? "Toptan ayak farkı" : "Ayak farkı"} ${formatPrice(legSurcharge)}`
        : "Standart ayak dahil";
    purchaseSelection.textContent = selectedSize
        ? `${stone.name} · ${leg.name} · ${legPriceLabel} · Ø ${selectedSize} cm · ${quantity} adet`
        : `${stone.name} · ${leg.name}`;

    const hasPrice = Number.isFinite(Number(basePrice));
    combinationUnitPrice.textContent = hasPrice ? formatPrice(Number(unitPrice)) : "—";
    combinationTotalPrice.textContent = hasPrice
        ? formatPrice(Number(unitPrice) * quantity)
        : "—";
    combinationAddToCart.disabled = !hasPrice;
    purchaseMessage.textContent = "";
}

function addCombinationToCart() {
    const stone = combinationStones[currentStoneIndex];
    const leg = combinationLegs[currentLegIndex];
    const product = getSelectedTableProduct();
    const selectedSize = combinationSize.value;
    const quantity = Number(combinationQuantity.value);
    const basePrice = getTablePrice(product, selectedSize, quantity);
    const legSurcharge = getLegSurcharge(leg, quantity);
    const unitPrice = Number(basePrice) + legSurcharge;

    if (!Number.isInteger(quantity) || quantity < 1) {
        purchaseMessage.textContent = "Lütfen geçerli bir adet girin.";
        return;
    }

    if (!product || !Number.isFinite(Number(basePrice))) {
        purchaseMessage.textContent = "Bu kombinasyon için fiyat bulunmuyor.";
        return;
    }

    const cart = getCart();
    const combinationId = `combo-${product.id}-${currentLegIndex}`;
    const existingItem = cart.find(item =>
        item.id === combinationId && item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += quantity;
        const combinedTablePrice = getTablePrice(product, selectedSize, existingItem.quantity);
        const combinedLegSurcharge = getLegSurcharge(leg, existingItem.quantity);
        existingItem.price = Number(combinedTablePrice) + combinedLegSurcharge;
        existingItem.basePrice = Number(combinedTablePrice);
        existingItem.retailLegSurcharge = leg.retailSurcharge;
        existingItem.wholesaleLegSurcharge = leg.wholesaleSurcharge;
        existingItem.legSurcharge = combinedLegSurcharge;
        existingItem.retailUnitPrice = Number(product.prices[selectedSize]) + leg.retailSurcharge;
        existingItem.wholesaleUnitPrice = Number(product.prices[selectedSize]) + leg.wholesaleSurcharge;
        existingItem.priceTier = existingItem.quantity >= 10 ? "wholesale" : "retail";
    } else {
        cart.push({
            id: combinationId,
            tableId: product.id,
            name: `${stone.name} Kafe Masası`,
            image: product.image,
            material: product.material,
            size: selectedSize,
            leg: leg.name,
            basePrice: Number(basePrice),
            retailLegSurcharge: leg.retailSurcharge,
            wholesaleLegSurcharge: leg.wholesaleSurcharge,
            retailUnitPrice: Number(product.prices[selectedSize]) + leg.retailSurcharge,
            wholesaleUnitPrice: Number(product.prices[selectedSize]) + leg.wholesaleSurcharge,
            legSurcharge,
            priceTier: quantity >= 10 ? "wholesale" : "retail",
            quantity,
            price: Number(unitPrice)
        });
    }

    localStorage.setItem("posusCart", JSON.stringify(cart));
    window.dispatchEvent(new CustomEvent("posusCartUpdated", {
        detail: { source: "combination-page" }
    }));
    combinationGoToCart.classList.remove("is-hidden");
    purchaseMessage.textContent = "Kombinasyon sepetinize eklendi.";
}

function renderStone() {
    const stone = combinationStones[currentStoneIndex];
    comboTabletopImage.classList.add("is-changing");
    comboTabletopImage.src = stone.tabletop;
    comboTabletopImage.alt = `${stone.name} mermer tabla`;
    stoneSwatch.style.backgroundImage = `url("${stone.texture}")`;
    requestAnimationFrame(() => comboTabletopImage.classList.remove("is-changing"));
    document.getElementById("stoneName").textContent = stone.name;
    document.getElementById("selectedStone").textContent = stone.name;
    document.getElementById("stoneCount").textContent = `${currentStoneIndex + 1} / ${combinationStones.length}`;
    renderPurchaseSizes();
}

function renderLeg() {
    const leg = combinationLegs[currentLegIndex];
    comboLegImage.classList.add("is-changing");
    comboLegImage.classList.toggle("leg-trumpet-large", leg.previewClass === "leg-trumpet-large");
    comboLegImage.src = leg.image;
    comboLegImage.alt = `${leg.name} kafe masa ayağı`;
    legMiniatureImage.src = leg.image;
    document.getElementById("legName").textContent = leg.name;
    document.getElementById("selectedLeg").textContent = leg.name;
    document.getElementById("legCount").textContent = `${currentLegIndex + 1} / ${combinationLegs.length}`;
    updatePurchase();
    requestAnimationFrame(() => comboLegImage.classList.remove("is-changing"));
}

function renderEnvironment() {
    const environment = combinationEnvironments[currentEnvironmentIndex];
    environmentBackdrop.classList.add("is-changing");
    environmentBackdrop.style.backgroundImage = `url("${environment.image}")`;
    environmentMiniature.style.backgroundImage = `url("${environment.image}")`;
    document.getElementById("environmentName").textContent = environment.name;
    document.getElementById("selectedEnvironment").textContent = environment.name;
    document.getElementById("environmentCount").textContent = `${currentEnvironmentIndex + 1} / ${combinationEnvironments.length}`;
    document.getElementById("environmentDescription").textContent = environment.description;
    requestAnimationFrame(() => environmentBackdrop.classList.remove("is-changing"));
}

function moveStone(direction) {
    currentStoneIndex = (currentStoneIndex + direction + combinationStones.length) % combinationStones.length;
    renderStone();
}

function moveLeg(direction) {
    currentLegIndex = (currentLegIndex + direction + combinationLegs.length) % combinationLegs.length;
    renderLeg();
}

function moveEnvironment(direction) {
    currentEnvironmentIndex = (currentEnvironmentIndex + direction + combinationEnvironments.length) % combinationEnvironments.length;
    renderEnvironment();
}

document.getElementById("stonePrev").addEventListener("click", () => moveStone(-1));
document.getElementById("stoneNext").addEventListener("click", () => moveStone(1));
document.getElementById("legPrev").addEventListener("click", () => moveLeg(-1));
document.getElementById("legNext").addEventListener("click", () => moveLeg(1));
document.getElementById("environmentPrev").addEventListener("click", () => moveEnvironment(-1));
document.getElementById("environmentNext").addEventListener("click", () => moveEnvironment(1));
combinationSize.addEventListener("change", updatePurchase);
combinationQuantity.addEventListener("input", updatePurchase);
combinationAddToCart.addEventListener("click", addCombinationToCart);
renderStone();
renderLeg();
renderEnvironment();
