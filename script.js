function initNavbar() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("show");

      // prevent body scroll when menu open on small screens
      document.body.style.overflow = navLinks.classList.contains("show")
        ? "hidden"
        : "";
    });
  }

  // Dropdown toggle for mobile
  const dropdownParents = document.querySelectorAll(".nav-links li a");
  dropdownParents.forEach((link) => {
    const dropdown = link.nextElementSibling;
    if (dropdown && dropdown.classList.contains("dropdown-menu")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        dropdown.classList.toggle("show");

        // Close other dropdowns
        document.querySelectorAll(".dropdown-menu").forEach((menu) => {
          if (menu !== dropdown) menu.classList.remove("show");
        });
      });
    }
  });

  // Close mobile menu on clicking outside
  document.addEventListener("click", (e) => {
    if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Optional: Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    }
  });
}
