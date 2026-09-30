// js/modules/router.js
// Responsável por ler a URL (hash) atual e decidir qual template renderizar.
// É o "cérebro" da navegação da SPA: nenhuma página é recarregada,
// apenas o conteúdo dentro de <main id="app"> é trocado.

import { renderHome } from "../templates/home.js";
import { renderProjetos } from "../templates/projetos.js";
import { renderCadastro } from "../templates/cadastro.js";

// Mapa de rotas: associa cada "caminho" da hash a uma função de template e a um título de página
const routes = {
  "/inicio": { render: renderHome, title: "Nome da ONG" },
  "/projetos": { render: renderProjetos, title: "Nossos Projetos" },
  "/cadastro": { render: renderCadastro, title: "Cadastro" },
};

const appElement = document.getElementById("app");
const titleElement = document.getElementById("page-title");

function getCurrentPath() {
  // Remove o "#" do início do hash. Ex.: "#/projetos" vira "/projetos"
  const hash = window.location.hash.replace("#", "");
  return hash || "/inicio";
}

export function renderRoute() {
  const path = getCurrentPath();
  const route = routes[path] || routes["/inicio"];

  appElement.innerHTML = route.render();
  titleElement.textContent = route.title;

  // Permite que outros módulos (ex.: validação de formulário) sejam
  // religados sempre que uma nova página é renderizada.
  document.dispatchEvent(new CustomEvent("route:rendered", { detail: { path } }));
}

export function initRouter() {
  // Roda uma vez ao carregar a página...
  renderRoute();
  // ...e toda vez que a hash da URL mudar (clique em link #/algo)
  window.addEventListener("hashchange", renderRoute);
}
