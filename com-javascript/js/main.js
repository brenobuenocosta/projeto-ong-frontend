// js/main.js
// Ponto de entrada da aplicação. Mantém pouca lógica própria -
// apenas importa e inicializa os módulos responsáveis por cada responsabilidade.

import { initRouter } from "./modules/router.js";
import { initNavegacao } from "./modules/navegacao.js";
import { initFormCadastro } from "./modules/formCadastro.js";
import { initMascaras } from "./modules/mascaras.js";

document.addEventListener("DOMContentLoaded", () => {
  // Os módulos que ESCUTAM o evento "route:rendered" precisam registrar
  // seus listeners ANTES de initRouter() ser chamado - caso contrário,
  // perdem o evento disparado pela primeira renderização.
  initNavegacao();
  initFormCadastro();
  initMascaras();
  initRouter();
});
