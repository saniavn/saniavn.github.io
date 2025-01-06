function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-theme");

  // Optionally save theme choice in local storage
  const theme = body.classList.contains("dark-theme") ? "dark" : "light";
  localStorage.setItem("theme", theme);
}

// Load saved theme from local storage on page load
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "light";
  if (savedTheme === "dark") {
    document.body.classList.add("dark-theme");
  }
});
