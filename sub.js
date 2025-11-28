document.addEventListener("DOMContentLoaded", () => {
  // 1. Set the current year in the copyright notice
  const currentYearEl = document.getElementById("current-year");
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // 2. Handle Newsletter Submission (Client-side simulation)
  const newsletterForm = document.getElementById("newsletter-form");
  const emailField = document.getElementById("email-field");
  const messageEl = document.getElementById("subscription-message");

  if (newsletterForm && emailField && messageEl) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Stop the form from performing a traditional submission

      const email = emailField.value.trim();

      if (email) {
        // Display success message in gold
        messageEl.style.color = "var(--accent-color)";
        messageEl.textContent = `Thank you! ${email} has been subscribed to our legal insights newsletter.`;

        // Clear the field
        emailField.value = "";
      } else {
        // Display error message
        messageEl.style.color = "red";
        messageEl.textContent = "Please enter a valid email address.";
      }

      // Clear the message after a few seconds
      setTimeout(() => {
        messageEl.textContent = "";
      }, 5000);
    });
  }

  // Initialize CSS variables (necessary for the JS file to access them)
  // Note: In a real environment, CSS vars are usually globally available, but this ensures robustness.
  const root = document.documentElement;
  if (root) {
    root.style.setProperty("--accent-color", "#FFD700");
  }
});
