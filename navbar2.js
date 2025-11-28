document.addEventListener("DOMContentLoaded", () => {
  // =======================================
  // --- 1. NAVBAR JAVASCRIPT (Hamburger and Accordion) ---
  // =======================================
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");
  const dropdownItems = document.querySelectorAll(
    ".nav-links .has-dropdown > a"
  );
  const isMobile = () => window.getComputedStyle(hamburger).display === "flex";

  if (hamburger && navLinks) {
    // A. Main Mobile Menu Toggle
    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      hamburger.classList.toggle("active");
    });

    // B. Mobile Dropdown Toggle for 'has-dropdown' items
    dropdownItems.forEach((link) => {
      link.addEventListener("click", (e) => {
        if (isMobile()) {
          e.preventDefault();

          const parentLi = link.closest("li");
          const dropdownMenu = parentLi.querySelector(".dropdown-menu");

          if (dropdownMenu) {
            // Close all other dropdowns
            document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
              if (menu !== dropdownMenu) {
                menu.classList.remove("show");
              }
            });

            // Toggle the 'show' class for the current dropdown menu
            dropdownMenu.classList.toggle("show");
          }
        }
        // Desktop: Link behavior is handled by pure CSS :hover
      });
    });

    // C. Close the mobile menu when a non-dropdown link is clicked
    const simpleLinks = document.querySelectorAll(
      "#navLinks > li a:not(.has-dropdown > a)"
    );

    simpleLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (isMobile() && navLinks.classList.contains("show")) {
          setTimeout(() => {
            navLinks.classList.remove("show");
            hamburger.classList.remove("active");
            document.querySelectorAll(".dropdown-menu.show").forEach((menu) => {
              menu.classList.remove("show");
            });
          }, 300);
        }
      });
    });
  } // End if (hamburger && navLinks)

  // =======================================
  // --- 2. FOOTER JAVASCRIPT (Set Current Year) ---
  // =======================================
  const yearSpan = document.getElementById("current-year");

  // Checks the whole copyright bar content for the year placeholder
  const copyrightBar = document.querySelector(".copyright-bar p");
  if (copyrightBar) {
    const currentYear = new Date().getFullYear();
    // Finds the last four digits (assuming a copyright year) and replaces it
    copyrightBar.innerHTML = copyrightBar.innerHTML.replace(
      /(\d{4})/,
      currentYear
    );
  }
});
