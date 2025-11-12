document.addEventListener("DOMContentLoaded", () => {
  // Pick sensible blocks site-wide. Exclude header/footer and anything marked data-no-reveal.
  const SELECTOR = [
    "main > *",
    "section",
    "article",
    ".container > section",
    ".container > div",
    ".grid > *",
    ".card",
    ".review-card",
    ".commitment__card",
    ".steps-grid .step",
    ".luxury__right", ".luxury__media",
    ".hero-split .hero-text", ".hero-split .hero-image",
    ".about__gallery > *",
    ".stats__grid > *",
    ".pillars__grid > *",
    ".faq-item",
    ".cta-container",
    ".join__container", "about__title", "about__text"
    
  ].join(",");

  const inHeaderOrFooter = el =>
    el.closest("#header") || el.closest("#footer") ||
    el.closest("header") || el.closest("footer");

  // Collect targets
  const targets = Array.from(document.querySelectorAll(SELECTOR))
    .filter(el =>
      !inHeaderOrFooter(el) &&
      !el.hasAttribute("data-no-reveal") &&
      el.offsetParent !== null &&               // visible in layout
      el.getBoundingClientRect().height > 24 && // avoid tiny elements
      el.getBoundingClientRect().width > 24
    );

  // Mark for reveal (avoid double-adding)
  targets.forEach((el, i) => {
    if (!el.classList.contains("reveal")) el.classList.add("reveal");
    // Optional gentle cascade (per row feel)
    el.dataset.delay = (i % 3) + ""; // 0,1,2
  });

  // Observe & reveal once
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

  document.querySelectorAll(".reveal").forEach(el => io.observe(el));
});