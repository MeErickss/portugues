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

function loadContent(url) {
  const mainElement = document.querySelector('main[data-main]');

  // Mostra uma mensagem de carregamento enquanto busca o conteúdo
  mainElement.innerHTML = "<p>Carregando...</p>";

  // Busca o conteúdo do arquivo HTML especificado
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o conteúdo.');
      }
      return response.text();
    })
    .then(html => {
      mainElement.innerHTML = html; // Substitui o conteúdo de <main>
    })
    .catch(error => {
      mainElement.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    });
}

