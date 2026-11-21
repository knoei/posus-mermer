(() => {
    const searchButtons = [...document.querySelectorAll(".nav-search-btn")];
    if (!searchButtons.length) return;

    const pages = [
        { name: "Ana Sayfa", meta: "Sayfa", url: "index.html" },
        { name: "Doğal Taşlar", meta: "Ürünler", url: "urunler.html" },
        { name: "Masalar", meta: "Koleksiyon", url: "masalar.html" },
        { name: "Kendi Masanı Oluştur", meta: "Tasarım Aracı", url: "kombinasyon.html" },
        { name: "Sıkça Sorulan Sorular", meta: "Yardım", url: "projeler.html" },
        { name: "İletişim", meta: "Kurumsal", url: "iletisim.html" }
    ];

    const tableNames = [
        "Muğla Beyazı", "Silvia Beige", "Golden Mist", "Aurelia Gold", "Adranos",
        "Emperador", "Akhisar Beji", "Spider Beige", "Tundra Gri", "Traverten",
        "Verde Guatemala", "Elazığ Petrol Yeşili", "Star Galaxy", "Alexander Black",
        "Elazığ Vişne", "Menekşe", "Leylak", "Sofita Bej", "Ash Black",
        "Traverten Orta Sehpa", "Elazığ Vişne Yuvarlak Orta Sehpa",
        "Elazığ Petrol Yeşili Blok Orta Sehpa", "Verde Guatemala Yuvarlak Orta Sehpa",
        "Leylak Orta Sehpa", "Lush", "Calacatta Borghini", "Calacatta Oro",
        "White Traverten", "Taj Mahal", "Beige Traverten", "Silver Root",
        "Pietra Grey", "Patagonia", "Lustre", "Calacatta Black"
    ];

    const stoneNames = [
        "Aden Dark", "Adıyaman Dark Emperador", "Adıyaman Light Emperador", "Adria Mink",
        "Afrodit Imperial", "Afrodit", "Afyon Beyazı", "Afyon Gri", "Afyon Kaplan Postu",
        "Afyon Menekşe", "Afyon Supreme", "Afyon Şeker", "Akhisar Beji", "Akşehir Siyahı",
        "Alanya Siyahı", "Alexandrette Black", "Anatolian Red", "Andezit", "Arabescato",
        "Azur Açık Mavi", "Azur Beyaz", "Azur Gri Kalsit", "Balıkesir Siyahı", "Bazalt",
        "Beyaz Dolomit", "Beyaz Onyx", "Bianco Carrara Gioia", "Bianco Carrara",
        "Bianco Sivec", "Bilecik Beji", "Bilecik Pembe Bej", "Black Storm", "Botticino Bej",
        "Bruno Perla", "Burdur Bej", "Burdur Koyu Bej", "Bursa Açık Bej", "Bursa Cream Yellow",
        "Bursa Gold Bej", "Bursa Light Emperador", "Calacatta", "Claros Grey", "Crema Golden",
        "Crema Nova", "Crosto Cozza", "Dark Olive", "Diana Royal", "Eflani Beji", "Ege Bordo",
        "Ege Kahve", "Elazığ Petrol Yeşili", "Elazığ Vişne", "Golden Brown", "Golden Crystal",
        "Golpazarı Beji", "Harmankaya Beji", "Harmankaya", "Heaven White", "Irish Brown",
        "İspanyol Dark Emperador", "Kastamonu Eflani", "Kemalpaşa", "Leopard Salome", "Limra",
        "Marmara", "Maroon Marinace", "Milas Beyaz", "Milas-Sedef", "Muğla Beyazı", "Myra Beige",
        "Nero Marquina", "Nero Picasso", "Olive Maron", "Orcal", "Oro Venato", "Panda White",
        "Pars Black", "Patara Bej", "Patara Dark", "Pembe Onyx", "Pietra Grey", "Portoro Argento",
        "Portoro", "Prestige Brown", "Queen White", "Rosa Bellissimo", "Rosalia Light",
        "Rosso Alicante", "Rosso Levanto", "Royal Beige", "Royal Brown", "Rosalia Dark",
        "Rustik Yeşil", "Sahara Noir", "Sarı Honey Onyx", "Sazara Sedef", "Sienna Brown",
        "Silver Emperador", "Silver Galaxy", "Silver Grey", "Silver Sky", "Silver Wave",
        "Sivrihisar Beji", "Statuarietto", "Toros Beji", "Toros Siyahı", "Tundra Grey",
        "Uşak Beyazı", "Uşak Yeşili", "Vanilla Ice", "Venus White", "Verde Guatemala",
        "Versailles", "Vietnam White", "Volakas", "Yerli Dark Emperador",
        "Aksaray Sipahi", "Aksaray Yaylak", "Bergama Gri", "Blue Pearl", "Capao Bonito",
        "Emerald Pearl", "Hisar Gri", "Rosa Beta", "Rosa Minho", "Rosa Porrino", "Volga Blue",
        "Star Galaxy", "Ash Black", "Denizli Travertine", "Ivory Travertine", "Noce Travertine",
        "Roman Travertine", "Silver Travertine", "Walnut Travertine"
    ];

    const tableIds = [...Array.from({ length: 24 }, (_, index) => index + 1), ...Array.from({ length: 11 }, (_, index) => index + 26)];

    const tableItems = tableNames.map((name, index) => ({
        name,
        meta: index >= 24 ? "Porselen Masa" : index >= 19 ? "Orta Sehpa" : "Masa Modeli",
        url: `masa-detay.html?id=${tableIds[index]}`
    }));

    const stoneItems = [...new Set(stoneNames)].map(name => ({
        name,
        meta: "Doğal Taş",
        url: `urunler.html?search=${encodeURIComponent(name)}`
    }));

    const catalog = [...pages, ...tableItems, ...stoneItems];
    let activeResultIndex = -1;

    const normalize = value => value
        .toLocaleLowerCase("tr-TR")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/ı/g, "i");

    const overlay = document.createElement("div");
    overlay.className = "site-search";
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML = `
        <button class="site-search-backdrop" type="button" aria-label="Aramayı kapat"></button>
        <section class="site-search-dialog" role="dialog" aria-modal="true" aria-labelledby="siteSearchTitle">
            <header class="site-search-header">
                <div>
                    <span>POSEL MADENCİLİK</span>
                    <h2 id="siteSearchTitle">Ne aramıştınız?</h2>
                </div>
                <button class="site-search-close" type="button" aria-label="Aramayı kapat"><i class="fa-solid fa-xmark"></i></button>
            </header>
            <label class="site-search-field">
                <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
                <input type="search" autocomplete="off" placeholder="Taş, masa veya sayfa ara..." aria-label="Site genelinde ara">
                <kbd>ESC</kbd>
            </label>
            <div class="site-search-summary" aria-live="polite"></div>
            <div class="site-search-results"></div>
        </section>
    `;
    document.body.appendChild(overlay);

    const input = overlay.querySelector("input");
    const results = overlay.querySelector(".site-search-results");
    const summary = overlay.querySelector(".site-search-summary");
    const closeButtons = overlay.querySelectorAll(".site-search-close, .site-search-backdrop");

    function setActiveResult(index) {
        const links = [...results.querySelectorAll("a")];
        if (!links.length) return;
        activeResultIndex = (index + links.length) % links.length;
        links.forEach((link, linkIndex) => link.classList.toggle("is-active", linkIndex === activeResultIndex));
        links[activeResultIndex].focus();
    }

    function renderResults(query = "") {
        const normalizedQuery = normalize(query.trim());
        const matches = normalizedQuery
            ? catalog.filter(item => normalize(`${item.name} ${item.meta}`).includes(normalizedQuery)).slice(0, 10)
            : pages.slice(1);

        activeResultIndex = -1;
        summary.textContent = normalizedQuery
            ? `${matches.length}${catalog.filter(item => normalize(`${item.name} ${item.meta}`).includes(normalizedQuery)).length > 10 ? "+" : ""} sonuç`
            : "Hızlı erişim";

        if (!matches.length) {
            results.innerHTML = `<div class="site-search-empty"><i class="fa-regular fa-gem"></i><strong>Sonuç bulunamadı</strong><span>Farklı bir taş veya model adı deneyin.</span></div>`;
            return;
        }

        results.innerHTML = matches.map(item => `
            <a href="${item.url}">
                <span class="site-search-result-icon"><i class="fa-solid ${item.meta.includes("Taş") ? "fa-gem" : item.meta.includes("Masa") || item.meta.includes("Sehpa") ? "fa-chair" : "fa-file-lines"}"></i></span>
                <span><strong>${item.name}</strong><small>${item.meta}</small></span>
            </a>
        `).join("");
    }

    function openSearch() {
        overlay.classList.add("is-open");
        overlay.setAttribute("aria-hidden", "false");
        document.body.classList.add("site-search-open");
        input.value = "";
        renderResults();
        window.requestAnimationFrame(() => input.focus());
    }

    function closeSearch() {
        overlay.classList.remove("is-open");
        overlay.setAttribute("aria-hidden", "true");
        document.body.classList.remove("site-search-open");
        searchButtons[0]?.focus();
    }

    searchButtons.forEach(button => button.addEventListener("click", openSearch));
    closeButtons.forEach(button => button.addEventListener("click", closeSearch));
    input.addEventListener("input", () => renderResults(input.value));
    results.addEventListener("click", event => {
        if (event.target.closest("a")) closeSearch();
    });

    overlay.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            event.preventDefault();
            closeSearch();
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            setActiveResult(activeResultIndex + 1);
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setActiveResult(activeResultIndex - 1);
        }
    });
})();
