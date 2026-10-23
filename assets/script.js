document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  const nav = document.querySelector(".site-nav");
  const updateNav = () => {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  // Close the mobile menu after selecting a section.
  document.querySelectorAll("#navLinks .nav-link, #navLinks .btn").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navLinks");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});
