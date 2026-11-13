const tables = [
    {
        id: 1,
        name: "Muğla Beyazı",
        model: "mugla_beyazi",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3000,

        prices: {
            60: 3000,
            70: 3600,
            80: 4800,
            90: 6000,
            100: 7600
        },

        image: "images/tables/mugla-beyazi-cafe.png",
        detailImage: "images/table-details/mugla-beyazi-real.png"
    },

    {
        id: 2,
        name: "Silvia Beige",
        model: "silvia_beige",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3000,

        prices: {
            60: 3000
        },

        image: "images/tables/silvia-cafe.png",
        detailImage: "images/table-details/silvia-beige-real.png"
    },

    {
        id: 3,
        name: "Golden Mist",
        model: "golden_mist",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3000,

        prices: {
            60: 3000,
            70: 3600,
            80: 4800,
            90: 6000,
            100: 7600
        },

        image: "images/tables/golden-mist-cafe.png",
        detailImage: "images/table-details/golden-mist-real.png"
    },

    {
        id: 4,
        name: "Aurelia Gold",
        model: "aurelia_gold",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3000,

        prices: {
            60: 3000,
            70: 3600,
            80: 4800,
            90: 6000,
            100: 7600
        },

        image: "images/tables/aurelia-gold-cafe.png",
        detailImage: "images/table-details/aurelia-gold-real.png"
    },

    {
        id: 5,
        name: "Adranos",
        model: "adranos",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3600,

        prices: {
            60: 3600,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/adranos-cafe.png",
        detailImage: "images/table-details/adranos-real.png"
    },

    {
        id: 6,
        name: "Emperador",
        model: "emperador",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3000,

        prices: {
            60: 3000,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/emperador-cafe.png",
        detailImage: "images/table-details/emperador-real.png"
    },

    {
        id: 7,
        name: "Akhisar Beji",
        model: "akhisar_beji",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3300,

        prices: {
            60: 3300,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/akhisar-cafe.png",
        detailImage: "images/table-details/akhisar-beji-real.png"
    },

    {
        id: 8,
        name: "Spider Beige",
        model: "spider_beige",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3300,

        prices: {
            60: 3300,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/spider-cafe.png",
        detailImage: "images/table-details/spider-beige-real.png"
    },

    {
        id: 9,
        name: "Tundra Gri",
        model: "tundra_gri",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 3600,

        prices: {
            60: 3600,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/tundra-cafe.png",
        detailImage: "images/table-details/tundra-gri-real.png"
    },

    {
        id: 10,
        name: "Traverten",
        model: "traverten",
        material: "Traverten",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/traverten-cafe.png",
        detailImage: "images/table-details/traverten-real.png"
    },

    {
        id: 11,
        name: "Verde Guatemala",
        model: "verde_guatemala",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/verde-cafe.png",
        detailImage: "images/table-details/verde-guatemala-real.png"
    },

    {
        id: 12,
        name: "Elazığ Petrol Yeşili",
        model: "elazig_petrol_yesili",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/elazig-petrol-cafe.png",
        detailImage: "images/table-details/elazig-petrol-yesili-real.png"
    },

    {
        id: 13,
        name: "Star Galaxy",
        model: "star_galaxy",
        material: "Granit",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4500,

        prices: {
            60: 4500,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/galaxy-cafe.png",
        detailImage: "images/table-details/star-galaxy-real.png"
    },

    {
        id: 14,
        name: "Alexander Black",
        model: "alexander_black",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 6600,

        prices: {
            60: 6600,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/alexander-black-cafe.png",
        detailImage: "images/table-details/alexander-black-real.png"
    },

    {
        id: 15,
        name: "Elazığ Vişne",
        model: "elazig_visne",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 6600,

        prices: {
            60: 6600,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/visne-cafe.png",
        detailImage: "images/table-details/elazig-visne-real.png"
    },

    {
        id: 16,
        name: "Menekşe",
        model: "menekse",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200
        },

        image: "images/tables/menekse-cafe.png",
        detailImage: "images/table-details/menekse-real.png"
    },

    {
        id: 17,
        name: "Leylak",
        model: "leylak",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/leylak-cafe.png",
        detailImage: "images/table-details/leylak-real.png"
    },

    {
        id: 18,
        name: "Sofita Bej",
        model: "sofita_bej",
        material: "Mermer",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/sofita-cafe.png",
        detailImage: "images/table-details/sofita-bej-real.png"
    },

    {
        id: 19,
        name: "Ash Black",
        model: "ash_black",
        material: "Granit",
        category: "cafe-restaurant",
        shape: "yuvarlak",

        price: 4200,

        prices: {
            60: 4200,
            70: null,
            80: null,
            90: null,
            100: null
        },

        image: "images/tables/ash-black-cafe.png",
        detailImage: "images/table-details/ash-black-real.png"
    },

    {
        id: 20,
        name: "Traverten Orta Sehpa",
        model: "travertine_coffee",
        type: "Orta Sehpa",
        material: "Traverten",
        category: "dining",
        shape: "dikdortgen",
        price: 18500,
        prices: {
            90: 18500,
            100: 21000,
            110: 23500,
            120: 26000
        },
        image: "images/tables/home-living/travertine-coffee.png"
    },

    {
        id: 22,
        name: "Elazığ Vişne Yuvarlak Orta Sehpa",
        model: "elazig_visne_round_coffee",
        type: "Orta Sehpa",
        material: "Mermer",
        category: "dining",
        shape: "yuvarlak",
        price: 22500,
        prices: {
            80: 22500,
            90: 26000,
            100: 30500
        },
        image: "images/tables/home-living/elazig-visne-round-coffee.png"
    },

    {
        id: 23,
        name: "Elazığ Petrol Yeşili Blok Orta Sehpa",
        model: "elazig_petrol_block_coffee",
        type: "Orta Sehpa",
        material: "Mermer",
        category: "dining",
        shape: "kare",
        price: 20500,
        prices: {
            80: 20500,
            90: 24000,
            100: 28000
        },
        image: "images/tables/home-living/elazig-petrol-block-coffee.png"
    },

    {
        id: 24,
        name: "Verde Guatemala Yuvarlak Orta Sehpa",
        model: "verde_guatemala_round_coffee",
        type: "Orta Sehpa",
        material: "Mermer",
        category: "dining",
        shape: "yuvarlak",
        price: 25500,
        prices: {
            80: 25500,
            90: 29500,
            100: 34500
        },
        image: "images/tables/home-living/verde-guatemala-round-coffee.png"
    },

    {
        id: 25,
        name: "Leylak Orta Sehpa",
        model: "leylak_coffee",
        type: "Orta Sehpa",
        material: "Mermer",
        category: "dining",
        shape: "yuvarlak",
        price: 28500,
        prices: {
            70: 28500,
            80: 32500,
            90: 37000
        },
        image: "images/tables/home-living/leylak-coffee.png"
    }
];

const porcelainTables = [
    { id: 26, name: "Lush", model: "porcelain_lush", texture: "images/porcelain/lush.png", image: "images/tables/porcelain/lush-cafe.png", detailImage: "images/table-details/lush-real.jpg" },
    { id: 27, name: "Calacatta Borghini", model: "porcelain_calacatta_borghini", texture: "images/porcelain/calacatta-borghini.png", image: "images/tables/porcelain/calacatta-borghini-cafe.png", detailImage: "images/table-details/calacatta-borghini-real.jpg" },
    { id: 28, name: "Calacatta Oro", model: "porcelain_calacatta_oro", texture: "images/porcelain/calacatta-oro.png", image: "images/tables/porcelain/calacatta-oro-cafe.png", detailImage: "images/table-details/calacatta-oro-real.jpg" },
    { id: 29, name: "White Traverten", model: "porcelain_white_traverten", texture: "images/porcelain/white-traverten.png", image: "images/tables/porcelain/white-traverten-cafe.png", detailImage: "images/table-details/white-traverten-real.jpg" },
    { id: 30, name: "Taj Mahal", model: "porcelain_taj_mahal", texture: "images/porcelain/taj-mahal.png", image: "images/tables/porcelain/taj-mahal-cafe.png", detailImage: "images/table-details/taj-mahal-real.jpg" },
    { id: 31, name: "Beige Traverten", model: "porcelain_beige_traverten", texture: "images/porcelain/beige-traverten.png", image: "images/tables/porcelain/beige-traverten-cafe.png", detailImage: "images/table-details/beige-traverten-real.jpg" },
    { id: 32, name: "Silver Root", model: "porcelain_silver_root", texture: "images/porcelain/silver-root.png", image: "images/tables/porcelain/silver-root-cafe.png", detailImage: "images/table-details/silver-root-real.jpg" },
    { id: 33, name: "Pietra Grey", model: "porcelain_pietra_grey", texture: "images/porcelain/pietra-grey.png", image: "images/tables/porcelain/pietra-grey-cafe.png", detailImage: "images/table-details/pietra-grey-real.jpg" },
    { id: 34, name: "Patagonia", model: "porcelain_patagonia", texture: "images/porcelain/patagonia.png", image: "images/tables/porcelain/patagonia-cafe.png", detailImage: "images/table-details/patagonia-real.jpg" },
    { id: 35, name: "Lustre", model: "porcelain_lustre", texture: "images/porcelain/lustre.png", image: "images/tables/porcelain/lustre-cafe.png", detailImage: "images/table-details/lustre-real.jpg" },
    { id: 36, name: "Calacatta Black", model: "porcelain_calacatta_black", texture: "images/porcelain/calacatta-black.png", image: "images/tables/porcelain/calacatta-black-cafe.png", detailImage: "images/table-details/calacatta-black-real.jpg" }
].map(table => ({
    ...table,
    type: "Kafe Masası",
    material: "Porselen",
    category: "cafe-restaurant",
    shape: "yuvarlak",
    price: 6000,
    pricePending: false,
    availableSizes: [60],
    prices: { 60: 6000 },
    image: table.image
}));

tables.push(...porcelainTables);
