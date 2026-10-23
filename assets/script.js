document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.querySelector(".site-nav");
  const menu = document.getElementById("navLinks");
  const navHeight = () => (nav ? nav.getBoundingClientRect().height : 0);

  const updateNav = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // Explicit anchor handling avoids fixed-header offsets and mobile collapse issues.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const id = link.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();

      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }

      const top = target.getBoundingClientRect().top + window.scrollY - navHeight() - 12;
      window.history.replaceState(null, "", id);
      window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  });
});
