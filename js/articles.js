document.addEventListener("DOMContentLoaded", () => {
    const chips = document.querySelectorAll(".chip");
    const cards = document.querySelectorAll(".article-card");

    // Normalize string (lowercase + trim)
    const normalize = str =>
        (str || "")
            .toLowerCase()
            .replace(/\s+/g, " ")
            .trim();

    // Prepare card categories as lowercase arrays
    cards.forEach(card => {
        const cats = (card.dataset.cats || "")
            .split(",")
            .map(normalize);
        card.dataset.catsList = JSON.stringify(cats);
    });

    function filterArticles(selected) {
        const category = normalize(selected);
        cards.forEach(card => {
            const cats = JSON.parse(card.dataset.catsList);
            const match =
                category === "all" ||
                category === "all articles" ||
                cats.includes(category);
            card.classList.toggle("hidden", !match);
        });
    }

    chips.forEach(chip => {
        chip.addEventListener("click", () => {
            chips.forEach(c => c.setAttribute("aria-pressed", "false"));
            chip.setAttribute("aria-pressed", "true");
            filterArticles(chip.dataset.filter || chip.textContent);
        });
    });

    // Initialize default (show all)
    filterArticles("all");
});