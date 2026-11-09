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

let currentStoneIndex = 0;
let currentLegIndex = 0;
const comboTabletopImage = document.getElementById("comboTabletopImage");
const stoneSwatch = document.getElementById("stoneSwatch");
const comboLegImage = document.getElementById("comboLegImage");
const legMiniatureImage = document.getElementById("legMiniatureImage");

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
}

function moveStone(direction) {
    currentStoneIndex = (currentStoneIndex + direction + combinationStones.length) % combinationStones.length;
    renderStone();
}

function moveLeg(direction) {
    currentLegIndex = (currentLegIndex + direction + combinationLegs.length) % combinationLegs.length;
    renderLeg();
}

document.getElementById("stonePrev").addEventListener("click", () => moveStone(-1));
document.getElementById("stoneNext").addEventListener("click", () => moveStone(1));
document.getElementById("legPrev").addEventListener("click", () => moveLeg(-1));
document.getElementById("legNext").addEventListener("click", () => moveLeg(1));

renderStone();
renderLeg();
