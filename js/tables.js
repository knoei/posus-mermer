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

        image: "images/tables/mugla-beyazi-cafe.png"
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

        image: "images/tables/silvia-cafe.png"
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

        image: "images/tables/golden-mist-cafe.png"
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

        image: "images/tables/aurelia-gold-cafe.png"
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

        image: "images/tables/adranos-cafe.png"
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

        image: "images/tables/emperador-cafe.png"
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

        image: "images/tables/akhisar-cafe.png"
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

        image: "images/tables/spider-cafe.png"
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

        image: "images/tables/tundra-cafe.png"
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

        image: "images/tables/traverten-cafe.png"
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

        image: "images/tables/verde-cafe.png"
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

        image: "images/tables/elazig-petrol-cafe.png"
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

        image: "images/tables/galaxy-cafe.png"
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

        image: "images/tables/alexander-black-cafe.png"
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

        image: "images/tables/visne-cafe.png"
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

        image: "images/tables/menekse-cafe.png"
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

        image: "images/tables/leylak-cafe.png"
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

        image: "images/tables/sofita-cafe.png"
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

        image: "images/tables/ash-black-cafe.png"
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
