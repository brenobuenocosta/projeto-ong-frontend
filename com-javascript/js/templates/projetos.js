// js/templates/projetos.js
// Gera o HTML da página "Projetos e Como Ajudar".
// Os cartões de campanha são gerados dinamicamente a partir de um array de dados,
// em vez de marcação HTML fixa repetida manualmente para cada campanha.

import { campanhas } from "../data/campanhas.js";

// Converte cada objeto de campanha em um bloco de HTML (Template Literal),
// e junta tudo em uma única string com join("") - sem vírgulas entre os blocos.
function renderCardsCampanhas(listaCampanhas) {
  return listaCampanhas
    .map(
      (campanha) => `
        <article class="card">
          <h3>${campanha.titulo}</h3>
          <p>${campanha.descricao}</p>
        </article>
      `
    )
    .join("");
}

export function renderProjetos() {
  return `
    <section id="doacao">
      <h2>Campanhas de Doação</h2>

      <div class="cards-grid">
        ${renderCardsCampanhas(campanhas)}
      </div>

      <h3>Formas de Contribuição</h3>
      <ul>
        <li>PIX: contato@ong.org</li>
        <li>Transferência bancária</li>
        <li>Doação de itens na sede</li>
      </ul>
    </section>

    <section id="voluntariado">
      <h2>Como se Voluntariar</h2>
      <ol>
        <li>Preencha o formulário de interesse</li>
        <li>Participe da reunião de boas-vindas</li>
        <li>Escolha a frente de atuação (educação, alimentação ou eventos)</li>
        <li>Comece a atuar com acompanhamento da equipe</li>
      </ol>
      <article class="card">
        <h3>Frentes de Atuação</h3>
        <p>Voluntários podem atuar em reforço escolar, distribuição de alimentos ou organização de eventos beneficentes.</p>
      </article>
    </section>
  `;
}
