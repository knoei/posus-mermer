function slugifyTr(text) {
    return text
        .toLowerCase("tr-TR")
        .replace(/ç/g, "c")
        .replace(/ğ/g, "g")
        .replace(/ı/g, "i")
        .replace(/ö/g, "o")
        .replace(/ş/g, "s")
        .replace(/ü/g, "u")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .trim();
}


/* =========================
   CATEGORY
========================= */

function getCategory(name) {
    const n = name.toLowerCase("tr-TR");

    if (n.includes("onyx")) {
        return "onyx";
    }

    if (n.includes("traverten")) {
        return "traverten";
    }

    if (
        n.includes("bazalt") ||
        n.includes("andezit")
    ) {
        return "dogal-tas";
    }

    return "mermer";
}


/* =========================
   COLOR
========================= */

function getColor(name) {
    const n = name.toLowerCase("tr-TR");

    const colorOverrides = {
        "aden dark": "kahverengi",
        "patara dark": "kahverengi",
        "rosalia dark": "kahverengi",
        "olive maron": "kahverengi",
        "dark olive": "kahverengi"
    };

    if (colorOverrides[n]) {
        return colorOverrides[n];
    }

    /* WHITE */

    if (
        n.includes("white") ||
        n.includes("beyaz") ||
        n.includes("bianco") ||
        n.includes("limra") ||
        n.includes("sivec") ||
        n.includes("volakas") ||
        n.includes("calacatta") ||
        n.includes("arabescato") ||
        n.includes("statuarietto") ||
        n.includes("dolomit")
    ) {
        return "beyaz";
    }


    /* BEIGE */

    if (
        n.includes("bej") ||
        n.includes("beige") ||
        n.includes("cream") ||
        n.includes("crema") ||
        n.includes("vanilla") ||
        n.includes("mink") ||
        n.includes("ivory")
    ) {
        return "bej";
    }


    /* GREY */

    if (
        n.includes("grey") ||
        n.includes("gri") ||
        n.includes("gray") ||
        n.includes("silver") ||
        n.includes("sedef")
    ) {
        return "gri";
    }


    /* GREEN */

    if (
        n.includes("yeşil") ||
        n.includes("yesil") ||
        n.includes("verde") ||
        n.includes("olive")
    ) {
        return "yesil";
    }


    /* RED / BURGUNDY / PINK */

    if (
        n.includes("red") ||
        n.includes("rosso") ||
        n.includes("bordo") ||
        n.includes("vişne") ||
        n.includes("visne") ||
        n.includes("pink") ||
        n.includes("pembe")
    ) {
        return "kirmizi";
    }


    /* BLUE */

    if (
        n.includes("mavi") ||
        n.includes("azur")
    ) {
        return "mavi";
    }


    /* BROWN */

    if (
        n.includes("brown") ||
        n.includes("kahve") ||
        n.includes("emperador") ||
        n.includes("maron") ||
        n.includes("golden") ||
        n.includes("gold")
    ) {
        return "kahverengi";
    }


    /* BLACK */

    if (
        n.includes("siyah") ||
        n.includes("black") ||
        n.includes("nero") ||
        n.includes("noir") ||
        n.includes("dark")
    ) {
        return "siyah";
    }


    return "karisik";
}


/* =========================
   STONE NAMES
========================= */

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
    "Afyon Supreme",
    "Afyon Şeker",
    "Akhisar Beji",
    "Akşehir Siyahı",
    "Alanya Siyahı",
    "Alexandrette Black",
    "Anatolian Red",
    "Andezit",

    "Arabescato",
    "Azur Açık Mavi",
    "Azur Beyaz",
    "Azur Gri Kalsit",
    "Balıkesir Siyahı",
    "Bazalt",
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
    "Golpazarı Beji",
    "Harmankaya Beji",

    "Harmankaya",
    "Heaven White",
    "Irish Brown",
    "İspanyol Dark Emperador",
    "Kastamonu Eflani",
    "Kemalpaşa",
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
    "Rosalia Dark",

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


/* =========================
   FILE NAME EXCEPTIONS
========================= */

/*
Most filenames automatically follow:

Muğla Beyazı
↓
mugla-beyazi.jpg

Only filenames that don't follow that rule
need to be written here.
*/

const imageOverrides = {

    "bazalt": "bazalt.jpg",

    "manyas-beyazi": "manyas-beyazi.jpeg"

};


/* =========================
   IMAGE FILE
========================= */

function getImageFile(name) {

    /*
    Bazalt++++ is called that in the catalog,
    but the actual file is bazalt.jpg.
    */

    if (name === "Bazalt++++") {
        return "bazalt.jpg";
    }


    const slug = slugifyTr(name);


    /*
    Check whether this stone has
    a special filename.
    */

    if (imageOverrides[slug]) {
        return imageOverrides[slug];
    }


    /*
    Normal case:
    mugla-beyazi.jpg
    calacatta.jpg
    verde-guatemala.jpg
    etc.
    */

    return `${slug}.jpg`;
}


/* =========================
   CREATE STONE OBJECTS
========================= */

const stones = stoneNames.map(name => {

    /*
    Normal ID is generated from its name.
    */

    let id = slugifyTr(name);


    /*
    Bazalt++++ would otherwise create
    a strange ID, so simplify it.
    */

    if (name === "Bazalt++++") {
        id = "bazalt";
    }


    return {

        id: id,

        name: name,

        category: getCategory(name),

        color: getColor(name),

        /*
        Temporary.
        We'll assign the real
        Casual / Premium / Deluxe values later.
        */

        series: "casual",

        image: `images/marbles/${getImageFile(name)}`

    };

});


console.log(stones);

console.log(stones[0]);
console.log(stones[0].image);