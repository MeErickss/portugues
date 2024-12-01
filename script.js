// Botão "Voltar ao Topo"
const scrollTopButton = document.getElementById("scrollTop");

window.onscroll = () => {
  scrollTopButton.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Dark/Light Mode
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  body.setAttribute("data-theme", currentTheme === "dark" ? "light" : "dark");
});
