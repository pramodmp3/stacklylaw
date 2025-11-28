function loadHTML(id, file) {
  fetch(file)
    .then((response) => {
      if (!response.ok) throw new Error("Network error");
      return response.text();
    })
    .then((data) => {
      document.getElementById(id).innerHTML = data;

      // Execute scripts inside the loaded HTML
      const scripts = document
        .getElementById(id)
        .getElementsByTagName("script");
      for (let script of scripts) {
        eval(script.innerText);
      }

      // Initialize navbar after it is loaded
      if (id === "navbar-placeholder") {
        initNavbar();
      }
    })
    .catch((err) => console.error("Error loading file:", file, err));
}

// Load navbar and footer
window.addEventListener("DOMContentLoaded", () => {
  loadHTML("navbar-placeholder", "navbar2.html");
  loadHTML("footer-placeholder", "footer2.html");
});
