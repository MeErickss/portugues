// Botão "Voltar ao Topo"
const scrollTopButton = document.getElementById("scrollTop");

window.onscroll = () => {
  scrollTopButton.style.display = window.scrollY > 300 ? "block" : "none";
};

scrollTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });


function loadContent(url) {
  const mainElement = document.querySelector('main[data-main]');
  const buttons = document.querySelectorAll('nav button');

  mainElement.innerHTML = "<p>Carregando...</p>";

  buttons.forEach(button => {
    if (button.getAttribute('onclick').includes(url)) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Erro ao carregar o conteúdo.');
      }
      return response.text();
    })
    .then(html => {
      mainElement.innerHTML = html;
    })
    .catch(error => {
      mainElement.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
    });
}

