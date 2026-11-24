const combinationStones = [
    { name: "Muğla Beyazı", tabletop: "images/tabletops/tabletop-01-clean.png", texture: "images/marbles/mugla-beyazi.jpg" },
    { name: "Silvia Beige", tabletop: "images/tabletops/tabletop-silvia-beige.png", texture: "images/tabletops/tabletop-silvia-beige.png", swatchFromTabletop: true },
    { name: "Golden Mist", tabletop: "images/tabletops/tabletop-golden-mist.png", texture: "images/tabletops/tabletop-golden-mist.png", swatchFromTabletop: true },
    { name: "Aurelia Gold", tabletop: "images/tabletops/tabletop-06-clean.png", texture: "images/tabletops/tabletop-06-clean.png", swatchFromTabletop: true },
    { name: "Adranos", tabletop: "images/tabletops/tabletop-adranos.png", texture: "images/marbles/adranos.png" },
    { name: "Emperador", tabletop: "images/tabletops/tabletop-emperador.png", texture: "images/tabletops/tabletop-emperador.png", swatchFromTabletop: true },
    { name: "Akhisar Beji", tabletop: "images/tabletops/tabletop-akhisar-beji.png", texture: "images/tabletops/tabletop-akhisar-beji.png", swatchFromTabletop: true },
    { name: "Spider Beige", tabletop: "images/tabletops/tabletop-spider-beige.png", texture: "images/tabletops/tabletop-spider-beige.png", swatchFromTabletop: true },
    { name: "Tundra Gri", tabletop: "images/tabletops/tabletop-tundra-gri.png", texture: "images/tabletops/tabletop-tundra-gri.png", swatchFromTabletop: true },
    { name: "Traverten", tabletop: "images/tabletops/tabletop-04-clean.png", texture: "images/travertines/denizli-travertine.jpg" },
    { name: "Verde Guatemala", tabletop: "images/tabletops/tabletop-03-clean.png", texture: "images/marbles/verde-guatemala.jpg" },
    { name: "Elazığ Petrol Yeşili", tabletop: "images/tabletops/tabletop-elazig-petrol-yesili.png", texture: "images/tabletops/tabletop-elazig-petrol-yesili.png", swatchFromTabletop: true },
    { name: "Star Galaxy", tabletop: "images/tabletops/tabletop-05-clean.png", texture: "images/granites/star-galaxy.jpg" },
    { name: "Alexander Black", tabletop: "images/tabletops/tabletop-02-clean.png", texture: "images/marbles/nero-marquina.jpg" },
    { name: "Elazığ Vişne", tabletop: "images/tabletops/tabletop-elazig-visne.png", texture: "images/tabletops/tabletop-elazig-visne.png", swatchFromTabletop: true },
    { name: "Menekşe", tabletop: "images/tabletops/tabletop-menekse.png", texture: "images/tabletops/tabletop-menekse.png", swatchFromTabletop: true },
    { name: "Leylak", tabletop: "images/tabletops/tabletop-leylak.png", texture: "images/tabletops/tabletop-leylak.png", swatchFromTabletop: true },
    { name: "Sofita Bej", tabletop: "images/tabletops/tabletop-sofita-bej.png", texture: "images/tabletops/tabletop-sofita-bej.png", swatchFromTabletop: true },
    { name: "Ash Black", tabletop: "images/tabletops/tabletop-ash-black.png", texture: "images/tabletops/tabletop-ash-black.png", swatchFromTabletop: true },
    { name: "Lush", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-lush.png", texture: "images/porcelain/lush.png" },
    { name: "Calacatta Borghini", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-calacatta-borghini.png", texture: "images/porcelain/calacatta-borghini.png" },
    { name: "Calacatta Oro", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-calacatta-oro.png", texture: "images/porcelain/calacatta-oro.png" },
    { name: "White Traverten", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-white-traverten.png", texture: "images/porcelain/white-traverten.png" },
    { name: "Taj Mahal", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-taj-mahal.png", texture: "images/porcelain/taj-mahal.png" },
    { name: "Beige Traverten", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-beige-traverten.png", texture: "images/porcelain/beige-traverten.png" },
    { name: "Silver Root", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-silver-root.png", texture: "images/porcelain/silver-root.png" },
    { name: "Pietra Grey", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-pietra-grey.png", texture: "images/porcelain/pietra-grey.png" },
    { name: "Patagonia", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-patagonia.png", texture: "images/porcelain/patagonia.png" },
    { name: "Lustre", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-lustre.png", texture: "images/porcelain/lustre.png" },
    { name: "Calacatta Black", material: "Porselen", tabletop: "images/tabletops/porcelain/tabletop-calacatta-black.png", texture: "images/porcelain/calacatta-black.png" }
];

const combinationLegs = [
    { name: "Yuvarlak Taban", image: "images/table-legs/cafe-leg-01-clean.png", surcharge: 0 },
    { name: "Kare Taban", image: "images/table-legs/cafe-leg-02-clean.png", surcharge: 0 },
    { name: "Aslan Döküm Taban", image: "images/table-legs/cafe-leg-13-clean.png", surcharge: 0 },
    { name: "Kademeli Yuvarlak", image: "images/table-legs/cafe-leg-03-angle-v2.png", surcharge: 750 },
    { name: "Damla", image: "images/table-legs/cafe-leg-04-clean.png", surcharge: 1750 },
    { name: "Üç Küre Dekoratif", image: "images/table-legs/cafe-leg-05-clean.png", surcharge: 1250 },
    { name: "Konik Siyah", image: "images/table-legs/cafe-leg-06-clean.png", surcharge: 750 },
    { name: "Kare Satine", image: "images/table-legs/cafe-leg-07-clean.png", surcharge: 1250 },
    { name: "Yuvarlak Satine", image: "images/table-legs/cafe-leg-08-clean.png", previewClass: "leg-round-stainless-short", surcharge: 1250 },
    { name: "Çift Küre Siyah", image: "images/table-legs/cafe-leg-09-clean.png", surcharge: 750 },
    { name: "Gold Dekoratif", image: "images/table-legs/cafe-leg-10-angle-v2.png", surcharge: 2000 },
    { name: "Klasik Kompozit Ayak", image: "images/table-legs/cafe-leg-11-four-base.png", surcharge: 1250 },
    { name: "Kum Saati", image: "images/table-legs/cafe-leg-12-clean.png", previewClass: "leg-trumpet-large", surcharge: 4000 },
    { name: "X Form Siyah", image: "images/table-legs/cafe-leg-x-clean.png", previewClass: "leg-x-large", surcharge: 0 }
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
        name: "Gece Lounge",
        image: "images/environments/environment-night-lounge.png?v=1",
        description: "Kapalı, loş ve sıcak ışıklı modern gece restoranı.",
        mode: "night-lounge"
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
const legPrevButton = document.getElementById("legPrev");
const legNextButton = document.getElementById("legNext");
const legSelectionNote = document.getElementById("legSelectionNote");
const hourglassLegIndex = combinationLegs.findIndex(leg => leg.name === "Kum Saati");
const xLegIndex = combinationLegs.findIndex(leg => leg.name === "X Form Siyah");
const largeTableLegIndexes = [hourglassLegIndex, xLegIndex];

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

function getLegSurcharge(leg) {
    return leg.surcharge;
}

function getTablePrice(product, size) {
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

function loadCombinationImage(src) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = reject;
        image.src = src;
    });
}

function drawContainedImage(context, image, box) {
    const scale = Math.min(box.width / image.naturalWidth, box.height / image.naturalHeight);
    const width = image.naturalWidth * scale;
    const height = image.naturalHeight * scale;
    const x = box.x + (box.width - width) / 2;
    const y = box.y + (box.height - height) / 2;

    context.drawImage(image, x, y, width, height);
}

async function createCombinationCartImage(stone, leg, selectedSize) {
    const [tabletopImage, legImage] = await Promise.all([
        loadCombinationImage(stone.tabletop),
        loadCombinationImage(leg.image)
    ]);

    const canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 720;
    const context = canvas.getContext("2d");

    const background = context.createRadialGradient(220, 120, 20, 360, 360, 620);
    background.addColorStop(0, "#fffdf9");
    background.addColorStop(1, "#e9dfd3");
    context.fillStyle = background;
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.save();
    context.filter = "blur(16px)";
    context.fillStyle = "rgba(41, 32, 24, 0.22)";
    context.beginPath();
    context.ellipse(360, 620, 180, 28, 0, 0, Math.PI * 2);
    context.fill();
    context.restore();

    const isTrumpet = leg.previewClass === "leg-trumpet-large";
    const legBox = {
        x: isTrumpet ? 185 : 205,
        y: 245,
        width: isTrumpet ? 350 : 310,
        height: 395
    };
    drawContainedImage(context, legImage, legBox);

    const size = Number(selectedSize) || 60;
    const tabletopWidth = Math.min(520, 390 + Math.max(0, size - 60) * 3.25);
    drawContainedImage(context, tabletopImage, {
        x: (canvas.width - tabletopWidth) / 2,
        y: 155,
        width: tabletopWidth,
        height: 235
    });

    return canvas.toDataURL("image/webp", 0.88);
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

    const availableSizes = Object.keys(product.prices);

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

function isLargeTableSize() {
    return Number(combinationSize.value) >= 90;
}

function isXLegAllowed() {
    return Number(combinationSize.value) >= 70;
}

function updateLegNavigationState() {
    const largeTable = isLargeTableSize();
    const restrictionMessage = largeTable
        ? "90 ve 100 cm tablalar için Kum Saati veya X Form Siyah ayak seçilebilir."
        : "";

    [legPrevButton, legNextButton].forEach(button => {
        button.disabled = false;
        button.title = restrictionMessage;
        button.setAttribute("aria-disabled", "false");
    });

    legSelectionNote.textContent = largeTable
        ? "90 ve 100 cm tablalar için Kum Saati veya X Form Siyah seçilebilir."
        : isXLegAllowed()
            ? `Kafe masaları için ${combinationLegs.length} farklı ayak modeli.`
            : "60 cm tablalar için 13 farklı ayak modeli.";
}

function enforceLegCompatibility() {
    if (!isXLegAllowed() && currentLegIndex === xLegIndex) {
        currentLegIndex = 0;
        return true;
    }

    if (!isLargeTableSize() || largeTableLegIndexes.includes(currentLegIndex)) {
        return false;
    }

    currentLegIndex = hourglassLegIndex;
    return true;
}

function updatePurchase() {
    if (enforceLegCompatibility()) {
        renderLeg();
        return;
    }

    updateLegNavigationState();
    const stone = combinationStones[currentStoneIndex];
    const leg = combinationLegs[currentLegIndex];
    const product = getSelectedTableProduct();
    const selectedSize = combinationSize.value;
    const quantity = Math.max(1, parseInt(combinationQuantity.value, 10) || 1);
    const basePrice = getTablePrice(product, selectedSize);
    const legSurcharge = getLegSurcharge(leg);
    const unitPrice = Number(basePrice) + legSurcharge;

    tableSizeBadgeValue.textContent = `${selectedSize || 60} cm`;
    tableSizeBadge.setAttribute(
        "aria-label",
        `Tabla çapı ${selectedSize || 60} santimetre`
    );

    const numericSize = Number(selectedSize) || 60;
    const previewWidth = selectedSize
        ? Math.min(54, 42 + (numericSize - 60) * .3)
        : 42;
    const previewOffset = Math.max(0, numericSize - 60) * .3;
    comboTabletopImage.style.width = `${previewWidth}%`;
    comboTabletopImage.style.setProperty("--tabletop-size-offset", `${previewOffset}px`);

    purchaseSelection.textContent = selectedSize
        ? `${stone.name} · ${leg.name} · Ø ${selectedSize} cm · ${quantity} adet`
        : `${stone.name} · ${leg.name}`;

    const hasPrice = basePrice !== null && basePrice !== undefined && Number.isFinite(Number(basePrice));
    combinationUnitPrice.textContent = hasPrice ? formatPrice(Number(unitPrice)) : "Teklif alın";
    combinationTotalPrice.textContent = hasPrice
        ? formatPrice(Number(unitPrice) * quantity)
        : "—";
    combinationAddToCart.disabled = !hasPrice;
    purchaseMessage.textContent = !hasPrice && product?.pricePending
        ? "Porselen tablalar için fiyat ve ölçü bilgisi almak üzere bizimle iletişime geçin."
        : "";
}

async function addCombinationToCart() {
    const stone = combinationStones[currentStoneIndex];
    const leg = combinationLegs[currentLegIndex];
    const product = getSelectedTableProduct();
    const selectedSize = combinationSize.value;
    const quantity = Number(combinationQuantity.value);
    const basePrice = getTablePrice(product, selectedSize);
    const legSurcharge = getLegSurcharge(leg);
    const unitPrice = Number(basePrice) + legSurcharge;

    if (!Number.isInteger(quantity) || quantity < 1) {
        purchaseMessage.textContent = "Lütfen geçerli bir adet girin.";
        return;
    }

    const hasPrice = basePrice !== null && basePrice !== undefined && Number.isFinite(Number(basePrice));
    if (!product || !hasPrice) {
        purchaseMessage.textContent = "Bu kombinasyon için fiyat bulunmuyor.";
        return;
    }

    combinationAddToCart.disabled = true;
    purchaseMessage.textContent = "Kombinasyon görseli hazırlanıyor…";

    let combinationImage = product.image;

    try {
        combinationImage = await createCombinationCartImage(stone, leg, selectedSize);
    } catch {
        combinationImage = product.image;
    }

    const cart = getCart();
    const combinationId = `combo-${product.id}-${currentLegIndex}`;
    const existingItem = cart.find(item =>
        item.id === combinationId && item.size === selectedSize
    );

    if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.price = Number(unitPrice);
        existingItem.unitPrice = Number(unitPrice);
        existingItem.basePrice = Number(basePrice);
        existingItem.name = `${stone.name} Kafe Masası`;
        existingItem.image = combinationImage;
        existingItem.material = product.material;
        existingItem.leg = leg.name;
        existingItem.legImage = leg.image;
        existingItem.tabletopImage = stone.tabletop;
        existingItem.legSurcharge = legSurcharge;
        delete existingItem.retailLegSurcharge;
        delete existingItem.wholesaleLegSurcharge;
        delete existingItem.retailUnitPrice;
        delete existingItem.wholesaleUnitPrice;
        delete existingItem.priceTier;
    } else {
        cart.push({
            id: combinationId,
            tableId: product.id,
            name: `${stone.name} Kafe Masası`,
            image: combinationImage,
            material: product.material,
            size: selectedSize,
            leg: leg.name,
            legImage: leg.image,
            tabletopImage: stone.tabletop,
            basePrice: Number(basePrice),
            legSurcharge,
            unitPrice: Number(unitPrice),
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
    combinationAddToCart.disabled = false;
}

const porcelainPreviewCache = new Map();
let lustreBoundsPromise;
let stoneRenderSequence = 0;

function readOpaqueBounds(image) {
    const canvas = document.createElement("canvas");
    canvas.width = image.naturalWidth || image.width;
    canvas.height = image.naturalHeight || image.height;
    const context = canvas.getContext("2d", { willReadFrequently: true });
    context.drawImage(image, 0, 0);
    const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
    let minX = canvas.width;
    let minY = canvas.height;
    let maxX = -1;
    let maxY = -1;

    for (let y = 0; y < canvas.height; y += 1) {
        const rowOffset = y * canvas.width * 4;
        for (let x = 0; x < canvas.width; x += 1) {
            if (pixels[rowOffset + x * 4 + 3] > 8) {
                minX = Math.min(minX, x);
                minY = Math.min(minY, y);
                maxX = Math.max(maxX, x);
                maxY = Math.max(maxY, y);
            }
        }
    }

    return {
        x: minX,
        y: minY,
        width: Math.max(1, maxX - minX + 1),
        height: Math.max(1, maxY - minY + 1)
    };
}

function getLustreBounds() {
    if (!lustreBoundsPromise) {
        lustreBoundsPromise = loadCombinationImage("images/tabletops/porcelain/tabletop-lustre.png")
            .then(image => readOpaqueBounds(image));
    }
    return lustreBoundsPromise;
}

async function getNormalizedPorcelainPreview(source) {
    if (source.endsWith("tabletop-lustre.png")) return source;
    if (porcelainPreviewCache.has(source)) return porcelainPreviewCache.get(source);

    const previewPromise = Promise.all([
        loadCombinationImage(source),
        getLustreBounds()
    ]).then(([image, targetBounds]) => {
        const sourceBounds = readOpaqueBounds(image);
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth || image.width;
        canvas.height = image.naturalHeight || image.height;
        const context = canvas.getContext("2d");
        context.drawImage(
            image,
            sourceBounds.x,
            sourceBounds.y,
            sourceBounds.width,
            sourceBounds.height,
            targetBounds.x,
            targetBounds.y,
            targetBounds.width,
            targetBounds.height
        );
        return canvas.toDataURL("image/png");
    });

    porcelainPreviewCache.set(source, previewPromise);
    return previewPromise;
}

function renderStone() {
    const stone = combinationStones[currentStoneIndex];
    const isPorcelain = stone.material === "Porselen";
    const renderSequence = ++stoneRenderSequence;
    comboTabletopImage.classList.add("is-changing");
    comboTabletopImage.src = stone.tabletop;
    comboTabletopImage.alt = `${stone.name} ${isPorcelain ? "porselen" : "mermer"} tabla`;

    if (isPorcelain) {
        getNormalizedPorcelainPreview(stone.tabletop)
            .then(source => {
                if (renderSequence !== stoneRenderSequence) return;
                comboTabletopImage.src = source;
                requestAnimationFrame(() => comboTabletopImage.classList.remove("is-changing"));
            })
            .catch(() => {
                if (renderSequence === stoneRenderSequence) {
                    requestAnimationFrame(() => comboTabletopImage.classList.remove("is-changing"));
                }
            });
    } else {
        requestAnimationFrame(() => comboTabletopImage.classList.remove("is-changing"));
    }

    stoneSwatch.style.backgroundImage = `url("${stone.texture}")`;
    stoneSwatch.style.backgroundSize = stone.swatchFromTabletop ? "auto 250%" : "cover";
    stoneSwatch.style.backgroundPosition = stone.swatchFromTabletop ? "50% 40%" : "center";
    document.getElementById("stoneName").textContent = stone.name;
    document.getElementById("selectedStone").textContent = stone.name;
    document.getElementById("stoneCount").textContent = `${currentStoneIndex + 1} / ${combinationStones.length}`;
    renderPurchaseSizes();
}

function renderLeg() {
    const leg = combinationLegs[currentLegIndex];
    comboLegImage.classList.add("is-changing");
    comboLegImage.classList.toggle("leg-trumpet-large", leg.previewClass === "leg-trumpet-large");
    comboLegImage.classList.toggle("leg-x-large", leg.previewClass === "leg-x-large");
    comboLegImage.classList.toggle("leg-round-stainless-short", leg.previewClass === "leg-round-stainless-short");
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
    if (isLargeTableSize()) {
        const activeLargeLegPosition = Math.max(0, largeTableLegIndexes.indexOf(currentLegIndex));
        const nextLargeLegPosition = (
            activeLargeLegPosition + direction + largeTableLegIndexes.length
        ) % largeTableLegIndexes.length;
        currentLegIndex = largeTableLegIndexes[nextLargeLegPosition];
        renderLeg();
        return;
    }

    do {
        currentLegIndex = (currentLegIndex + direction + combinationLegs.length) % combinationLegs.length;
    } while (!isXLegAllowed() && currentLegIndex === xLegIndex);
    renderLeg();
}

function moveEnvironment(direction) {
    currentEnvironmentIndex = (currentEnvironmentIndex + direction + combinationEnvironments.length) % combinationEnvironments.length;
    renderEnvironment();
}

document.getElementById("stonePrev").addEventListener("click", () => moveStone(-1));
document.getElementById("stoneNext").addEventListener("click", () => moveStone(1));
legPrevButton.addEventListener("click", () => moveLeg(-1));
legNextButton.addEventListener("click", () => moveLeg(1));
document.getElementById("environmentPrev").addEventListener("click", () => moveEnvironment(-1));
document.getElementById("environmentNext").addEventListener("click", () => moveEnvironment(1));
combinationSize.addEventListener("change", updatePurchase);
combinationQuantity.addEventListener("input", updatePurchase);
combinationAddToCart.addEventListener("click", addCombinationToCart);
renderStone();
renderLeg();
renderEnvironment();
