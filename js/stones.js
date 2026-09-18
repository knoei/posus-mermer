function slugifyTr(text) {
    return text
        .toLowerCase("tr-TR")
        .replace(/ç/g, "c")
        .replace(/ğ/g, "g")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ş/g, "s")
        .replace(/ü/g, "u")
        .replace(/\+/g, "plus")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}

function getCategory(name) {
    const n = name.toLowerCase("tr-TR");

    if (n.includes("onyx")) return "onyx";
    if (n.includes("traverten")) return "traverten";
    if (n.includes("bazalt")) return "dogal-tas";
    if (n.includes("andezit")) return "dogal-tas";

    return "mermer";
}

function getColor(name) {
    const n = name.toLowerCase("tr-TR");

    if (
        n.includes("white") ||
        n.includes("beyaz") ||
        n.includes("bianco") ||
        n.includes("limra") ||
        n.includes("sivec") ||
        n.includes("volakas") ||
        n.includes("calacatta") ||
        n.includes("arabescato") ||
        n.includes("statuarietto")
    ) return "beyaz";

    if (
        n.includes("bej") ||
        n.includes("beige") ||
        n.includes("beji") ||
        n.includes("cream") ||
        n.includes("crema") ||
        n.includes("vanilla") ||
        n.includes("mink") ||
        n.includes("ivory")
    ) return "bej";

    if (
        n.includes("grey") ||
        n.includes("gri") ||
        n.includes("gray") ||
        n.includes("silver") ||
        n.includes("sedef")
    ) return "gri";

    if (
        n.includes("siyah") ||
        n.includes("black") ||
        n.includes("nero") ||
        n.includes("noir") ||
        n.includes("dark")
    ) return "siyah";

    if (
        n.includes("yesil") ||
        n.includes("yeşil") ||
        n.includes("verde") ||
        n.includes("olive")
    ) return "yesil";

    if (
        n.includes("red") ||
        n.includes("rosso") ||
        n.includes("bordo") ||
        n.includes("visne") ||
        n.includes("vişne") ||
        n.includes("pink") ||
        n.includes("pembe")
    ) return "kirmizi";

    if (
        n.includes("brown") ||
        n.includes("kahve") ||
        n.includes("emperador") ||
        n.includes("maron") ||
        n.includes("golden") ||
        n.includes("gold")
    ) return "kahverengi";

    if (
        n.includes("mavi") ||
        n.includes("azur")
    ) return "mavi";

    return "karisik";
}

const stoneNames = [
    "Aden Dark",
    "Adıyaman Dark Emperador",
    "Adıyaman Light Emperador",
    "Adria Mink",
    "Aegean White",
    "Afrodit Imperial",
    "Afrodit",
    "Afyon Beyazı",
    "Afyon Gri",
    "Afyon Kaplan Postu",
    "Afyon Menekşe",
    "Afyon Süprem",
    "Afyon Şeker",
    "Akhisar Bej",
    "Akşehir Siyahı",
    "Alanya Siyahı",
    "Alexandrette Black",
    "Anatolian Red",
    "Andezit",

    "Arabescato",
    "Azur Açık Mavi",
    "Azur Beyaz",
    "Azur Gri Kalsit",
    "Balıkesir Siyah",
    "Bazalt++++",
    "Beyaz Dolomit",
    "Beyaz Onyx",
    "Bianco Carrara Gioia",
    "Bianco Carrara",
    "Bianco Sivec",
    "Bilecik Beji",
    "Bilecik Pembe Bej",
    "Black Storm",
    "Botticino Bej",
    "Bruno Perla",
    "Burdur Bej",
    "Burdur Koyu Bej",
    "Bursa Açık Bej",

    "Bursa Cream Yellow",
    "Bursa Gold Bej",
    "Bursa Light Emperador",
    "Calacatta",
    "Claros Grey",
    "Crema Golden",
    "Crema Nova",
    "Crosto Cozza",
    "Dark Olive",
    "Diana Royal",
    "Eflani Beji",
    "Ege Bordo",
    "Ege Kahve",
    "Elazığ Petrol Yeşili",
    "Elazığ Vişne",
    "Golden Brown",
    "Golden Crystal",
    "Golpazarı Bej",
    "Harmankaya Bej",

    "Harmankaya",
    "Heaven White",
    "Irish Brown",
    "İspanyol Dark Emperador",
    "Kastamonu Eflani",
    "Kemalpaşa",
    "Kırmızı Rosso Levanto",
    "Leopard Salome",
    "Limra",
    "Manyas Beyazı",
    "Marmara",
    "Maroon Marinace",
    "Milas Beyaz",
    "Milas-Sedef",
    "Muğla Beyazı",
    "Myra Beige",
    "Nero Marquina",
    "Nero Picasso",
    "Olive Maron",

    "Orcal",
    "Oro Venato",
    "Panda White",
    "Pars Black",
    "Patara Bej",
    "Patara Dark",
    "Pembe Onyx",
    "Pietra Grey",
    "Portoro Argento",
    "Portoro",
    "Prestige Brown",
    "Queen White",
    "Rosa Bellissimo",
    "Rosalia Light",
    "Rosso Alicante",
    "Rosso Levanto",
    "Royal Beige",
    "Royal Brown",
    "Rozalya Dark",

    "Rustik Yeşil",
    "Sahara Noir",
    "Sarı Honey Onyx",
    "Sazara Sedef",
    "Sienna Brown",
    "Silver Emperador",
    "Silver Galaxy",
    "Silver Grey",
    "Silver Sky",
    "Silver Wave",
    "Sivrihisar Beji",
    "Statuarietto",
    "Toros Beji",
    "Toros Siyahı",
    "Tundra Grey",
    "Uşak Beyazı",
    "Uşak Yeşili",
    "Vanilla Ice",

    "Venus White",
    "Verde Guatemala",
    "Versailles",
    "Vietnam White",
    "Volakas",
    "Yerli Dark Emperador"
];

const stones = stoneNames.map(name => ({
    id: slugifyTr(name),
    name: name,
    category: getCategory(name),
    color: getColor(name),
    series: "casual",
    image: `images/stones/${slugifyTr(name)}.jpg`
}));

console.log(stones);