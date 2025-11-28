document.addEventListener("DOMContentLoaded", () => {
  // =======================================
  // --- 1. NAVBAR JAVASCRIPT ---
  // =======================================
  const toggleButton = document.querySelector(".mobile-toggle");
  const mobileMenu = document.getElementById("mobile-menu-items");
  const subHeaderToggles = document.querySelectorAll(".mobile-link.sub-header");

  if (toggleButton && mobileMenu) {
    // Main Mobile Menu Toggle (Hamburger Icon)
    toggleButton.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.contains("open");

      mobileMenu.classList.toggle("open");
      toggleButton.classList.toggle("is-active");

      toggleButton.setAttribute("aria-expanded", !isOpen);
      mobileMenu.setAttribute("aria-hidden", isOpen);

      // Close all sub-menus when the main menu closes
      if (isOpen) {
        subHeaderToggles.forEach((header) => {
          const targetId = header.getAttribute("data-target");
          const subMenu = document.getElementById(targetId);
          const arrow = header.querySelector(".arrow");

          if (subMenu && subMenu.style.maxHeight) {
            subMenu.style.maxHeight = null;
            arrow.textContent = "▼";
          }
        });
      }
    });

    // Nested Sub-Menu Toggles (Accordion)
    subHeaderToggles.forEach((header) => {
      header.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = header.getAttribute("data-target");
        const subMenu = document.getElementById(targetId);
        const arrow = header.querySelector(".arrow");

        if (subMenu.style.maxHeight) {
          // Close it
          subMenu.style.maxHeight = null;
          arrow.textContent = "▼";
        } else {
          // Close all other sub-menus first
          document
            .querySelectorAll(".mobile-sub-menu")
            .forEach((otherSubMenu) => {
              if (otherSubMenu !== subMenu) {
                otherSubMenu.style.maxHeight = null;
                const otherHeader = document.querySelector(
                  `[data-target="${otherSubMenu.id}"] .arrow`
                );
                if (otherHeader) {
                  otherHeader.textContent = "▼";
                }
              }
            });

          // Open the current sub-menu
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
          arrow.textContent = "▲";
        }
      });
    });
  }

  // =======================================
  // --- 2. FOOTER JAVASCRIPT (Set Current Year) ---
  // =======================================
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
