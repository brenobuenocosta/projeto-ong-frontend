// js/modules/listaCadastros.js
// ÚNICA responsabilidade: transformar os dados salvos (vindos de
// armazenamento.js) em HTML e exibi-los na tela. Não sabe nada sobre
// validação de formulário, e só conhece o localStorage indiretamente,
// através da função importada - nunca chama localStorage.getItem() direto.

import { buscarCadastros } from "./armazenamento.js";

export function renderizarListaCadastros() {
  const container = document.getElementById("lista-cadastros");
  if (!container) return;

  const cadastros = buscarCadastros();

  if (cadastros.length === 0) {
    container.innerHTML = "<p>Nenhum cadastro salvo ainda.</p>";
    return;
  }

  container.innerHTML = cadastros
    .map((pessoa) => {
      const nascimentoFormatado = window.dayjs
        ? window.dayjs(pessoa.nascimento).format("DD/MM/YYYY")
        : pessoa.nascimento;

      return `
        <article class="card">
          <span class="badge badge-success">Cadastrado</span>
          <h3>${pessoa.nome}</h3>
          <p>${pessoa.email} — ${pessoa.cidade}/${pessoa.estado}</p>
          <p>Nascimento: ${nascimentoFormatado}</p>
        </article>
      `;
    })
    .join("");
}
