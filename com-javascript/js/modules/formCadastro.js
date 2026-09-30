// js/modules/formCadastro.js
// ORQUESTRADOR: não implementa validação nem storage nem renderização -
// apenas escuta os eventos do formulário e delega cada responsabilidade
// ao módulo especializado correto (import). É a única "cola" entre eles.

import { validarFormulario, validarCampo } from "./validacaoFormulario.js";
import { salvarCadastro } from "./armazenamento.js";
import { renderizarListaCadastros } from "./listaCadastros.js";

const appElement = document.getElementById("app");

function limparMensagemGeral() {
  const feedback = document.getElementById("form-feedback");
  if (feedback) feedback.innerHTML = "";
}

function mostrarMensagemGeral(tipo, mensagem) {
  const feedback = document.getElementById("form-feedback");
  if (!feedback) return;
  feedback.innerHTML = `<div class="alert alert-${tipo}">${mensagem}</div>`;
}

export function initFormCadastro() {
  appElement.addEventListener("submit", (event) => {
    if (event.target.id !== "form-cadastro") return;
    event.preventDefault();

    const form = event.target;
    if (!validarFormulario(form)) {
      mostrarMensagemGeral("error", "Verifique os campos destacados antes de enviar.");
      return;
    }

    const dados = Object.fromEntries(new FormData(form).entries());
    salvarCadastro(dados);
    mostrarMensagemGeral("success", "Cadastro realizado com sucesso!");
    form.reset();
    renderizarListaCadastros();
  });

  appElement.addEventListener("input", (event) => {
    const input = event.target;
    if (!input.closest("#form-cadastro")) return;
    validarCampo(input);
    limparMensagemGeral();
  });

  document.addEventListener("route:rendered", (event) => {
    if (event.detail.path === "/cadastro") {
      renderizarListaCadastros();
    }
  });
}
