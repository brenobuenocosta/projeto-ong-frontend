// js/modules/navegacao.js
// Cuida de comportamentos de interação do menu que não são navegação em si:
// fechar o menu mobile automaticamente depois que o usuário clica em um link.
// Usa event delegation no <nav>, porque o conteúdo interno pode ser
// re-renderizado e listeners presos a elementos antigos deixariam de existir.

export function initNavegacao() {
  const nav = document.querySelector("nav");
  const menuCheckbox = document.getElementById("menu-toggle");

  nav.addEventListener("click", (event) => {
    const link = event.target.closest("a");
    if (!link) return;

    if (menuCheckbox.checked) {
      menuCheckbox.checked = false;
    }

    // Links do dropdown (ex.: Doação, Voluntariado) apontam para a mesma
    // hash "#/projetos", então hashchange não dispara se já estivermos
    // nessa rota. Por isso, tratamos a rolagem manualmente aqui.
    const alvoRolagem = link.dataset.scroll;
    if (alvoRolagem) {
      // Espera a próxima renderização (caso a rota ainda não esteja ativa)
      // antes de tentar rolar até o elemento
      setTimeout(() => {
        const elemento = document.getElementById(alvoRolagem);
        if (elemento) elemento.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  });
}
