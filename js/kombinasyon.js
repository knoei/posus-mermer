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
    { name: "Yuvarlak Taban Siyah", image: "images/table-legs/cafe-leg-01-clean.png" },
    { name: "Kare Taban Siyah", image: "images/table-legs/cafe-leg-02-clean.png" },
    { name: "Kademeli Yuvarlak Siyah", image: "images/table-legs/cafe-leg-03-angle-v2.png" },
    { name: "Klasik Dekoratif Siyah", image: "images/table-legs/cafe-leg-04-clean.png" },
    { name: "Üç Küre Dekoratif", image: "images/table-legs/cafe-leg-05-clean.png" },
    { name: "Konik Siyah", image: "images/table-legs/cafe-leg-06-clean.png" },
    { name: "Kare Paslanmaz", image: "images/table-legs/cafe-leg-07-clean.png" },
    { name: "Yuvarlak Paslanmaz", image: "images/table-legs/cafe-leg-08-clean.png" },
    { name: "Çift Küre Siyah", image: "images/table-legs/cafe-leg-09-clean.png" },
    { name: "Gold Dekoratif", image: "images/table-legs/cafe-leg-10-angle-v2.png" }
];

const combinationEnvironments = [
    {
        name: "Şehir Kafesi",
        image: "images/environments/environment-studio.png?v=3",
        description: "Aydınlık, yalın ve gün ışıklı şehir kafesi.",
        mode: "street-cafe"
    },
    {
        name: "Endüstriyel Kafe",
        image: "images/environments/environment-cafe.png?v=3",
        description: "Tuğla, çelik ve beton dokulu yaratıcı kafe.",
        mode: "cafe"
    },
    {
        name: "Akşam Restoranı",
        image: "images/environments/environment-restaurant.png?v=3",
        description: "Sıcak aydınlatmalı, şık ve samimi restoran düzeni.",
        mode: "restaurant"
    },
    {
        name: "Bahçe Terası",
        image: "images/environments/environment-terrace.png?v=3",
        description: "Doğal taş ve terracotta dokulu kapalı bahçe terası.",
        mode: "terrace"
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
const environmentFit = document.getElementById("environmentFit");
const fitLabel = document.getElementById("fitLabel");
const fitScore = document.getElementById("fitScore");
const fitDetail = document.getElementById("fitDetail");

const premiumStoneIndexes = new Set([2, 3, 5, 10, 11, 13, 14, 15, 16, 18]);
const blackLegIndexes = new Set([0, 1, 2, 5]);
const decorativeLegIndexes = new Set([3, 4, 8, 9]);
const stainlessLegIndexes = new Set([6, 7]);

function getCompatibility() {
    const environment = combinationEnvironments[currentEnvironmentIndex];
    const isPremiumStone = premiumStoneIndexes.has(currentStoneIndex);
    const isBlackLeg = blackLegIndexes.has(currentLegIndex);
    const isDecorativeLeg = decorativeLegIndexes.has(currentLegIndex);
    const isStainlessLeg = stainlessLegIndexes.has(currentLegIndex);

    if (environment.mode === "street-cafe") {
        const score = isBlackLeg ? 96 : isStainlessLeg ? 92 : 89;
        return {
            score,
            label: score >= 94 ? "Şehir kafesi için ideal" : "Şehir kafesi için uyumlu",
            detail: "60 cm tabla ve merkezi kaide, kompakt oturma düzeninde sandalye hareketi ve rahat dolaşım sağlar."
        };
    }

    if (environment.mode === "cafe") {
        const score = isBlackLeg ? 96 : isStainlessLeg ? 93 : 90;
        return {
            score,
            label: score >= 94 ? "Kafe için çok uyumlu" : "Kafe için uyumlu",
            detail: "60 cm tabla ve merkezi kaide yapısı, yoğun kafe kullanımı ve rahat dolaşım için uygundur."
        };
    }

    if (environment.mode === "restaurant") {
        const score = Math.min(98, 70 + (isDecorativeLeg ? 16 : isStainlessLeg ? 10 : 4) + (isPremiumStone ? 10 : 5));
        return {
            score,
            label: score >= 90 ? "Fine dining için ideal" : score >= 80 ? "Restoran için uyumlu" : "Daha sade mekâna uygun",
            detail: isDecorativeLeg || isPremiumStone
                ? "Seçilen mermer ve ayak, koyu ahşap ve sıcak metal detaylarla güçlü bir premium uyum kurar."
                : "Bu ortamda daha dekoratif bir ayak veya karakterli bir taş seçimi görsel etkiyi güçlendirir."
        };
    }

    const score = isStainlessLeg ? 96 : isBlackLeg ? 76 : 68;
    return {
        score,
        label: isStainlessLeg ? "Kapalı teras için ideal" : score >= 75 ? "Korunaklı alanda uyumlu" : "İç mekân kullanımı önerilir",
        detail: isStainlessLeg
            ? "Paslanmaz ayak, korunaklı teraslarda nem ve sıcaklık değişimlerine karşı en uygun seçenektir."
            : "Bu ayak için doğrudan yağmur ve yoğun nemden uzak, tamamen kapalı bir teras önerilir."
    };
}

function updateCompatibility() {
    const compatibility = getCompatibility();
    const level = compatibility.score >= 90 ? "fit-ideal" : compatibility.score >= 75 ? "fit-good" : "fit-limited";
    environmentFit.className = `environment-fit ${level}`;
    fitLabel.textContent = compatibility.label;
    fitScore.textContent = compatibility.score;
    fitDetail.textContent = compatibility.detail;
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
    updateCompatibility();
}

function renderLeg() {
    const leg = combinationLegs[currentLegIndex];
    comboLegImage.classList.add("is-changing");
    comboLegImage.src = leg.image;
    comboLegImage.alt = `${leg.name} kafe masa ayağı`;
    legMiniatureImage.src = leg.image;
    document.getElementById("legName").textContent = leg.name;
    document.getElementById("selectedLeg").textContent = leg.name;
    document.getElementById("legCount").textContent = `${currentLegIndex + 1} / ${combinationLegs.length}`;
    requestAnimationFrame(() => comboLegImage.classList.remove("is-changing"));
    updateCompatibility();
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
    updateCompatibility();
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

renderStone();
renderLeg();
renderEnvironment();
