const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const themeLabel = document.getElementById("theme-label");

const savedTheme = localStorage.getItem("theme");

function updateThemeButton(theme) {
  if (theme === "dark") {
    themeToggle.setAttribute("aria-pressed", "true");
    themeIcon.textContent = "☀️";
    themeLabel.textContent = "Light Mode";
  } else {
    themeToggle.setAttribute("aria-pressed", "false");
    themeIcon.textContent = "🌙";
    themeLabel.textContent = "Dark Mode";
  }
}

if (savedTheme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
}

updateThemeButton(savedTheme === "dark" ? "dark" : "light");

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    updateThemeButton("light");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    updateThemeButton("dark");
  }
});

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.reportValidity();
    return;
  }

  formStatus.textContent = "Message sent successfully!";
  contactForm.reset();
});
