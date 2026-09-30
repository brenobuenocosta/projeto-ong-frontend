// js/templates/home.js
// Responsável apenas por gerar o HTML da página "Início".
// Não manipula o DOM diretamente - só retorna uma string de template.

export function renderHome() {
  return `
    <section id="sobre">
      <h2>Sobre nós</h2>
      <img src="../images/equipe.jpg" alt="Equipe de voluntários da ONG reunida durante uma ação social na comunidade">
      <p>
        Somos uma organização dedicada a transformar vidas através de ações sociais.
        Atuamos há mais de 10 anos apoiando famílias em situação de vulnerabilidade,
        oferecendo educação, alimentação e acolhimento.
      </p>
    </section>

    <section id="contato">
      <h2>Contato</h2>
      <p>E-mail: contato@ong.org</p>
      <p>Telefone: (62) 0000-0000</p>
      <p>Endereço: Rua Exemplo, 123 - Anápolis, GO</p>
    </section>
  `;
}
