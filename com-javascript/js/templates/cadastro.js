// js/templates/cadastro.js
// Gera o HTML da página "Cadastro" (formulário).

export function renderCadastro() {
  return `
    <form id="form-cadastro" novalidate>
      <fieldset>
        <legend>Dados Pessoais</legend>

        <div class="campo">
          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" required placeholder="Digite seu nome completo">
        </div>

        <div class="campo">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="seuemail@exemplo.com">
        </div>

        <div class="campo">
          <label for="telefone">Telefone</label>
          <input type="tel" id="telefone" name="telefone" pattern="\\(\\d{2}\\) \\d{5}-\\d{4}" placeholder="(00) 00000-0000">
        </div>

        <div class="campo">
          <label for="nascimento">Data de Nascimento</label>
          <input type="date" id="nascimento" name="nascimento" required>
        </div>

        <div class="campo">
          <label for="cpf">CPF</label>
          <input type="text" id="cpf" name="cpf" pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}" placeholder="000.000.000-00" required>
        </div>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>

        <div class="campo">
          <label for="endereco">Endereço</label>
          <input type="text" id="endereco" name="endereco" required placeholder="Rua, número, bairro">
        </div>

        <div class="campo">
          <label for="cep">CEP</label>
          <input type="text" id="cep" name="cep" pattern="\\d{5}-\\d{3}" placeholder="00000-000" required>
        </div>

        <div class="campo">
          <label for="cidade">Cidade</label>
          <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade">
        </div>

        <div class="campo">
          <label for="estado">Estado</label>
          <input type="text" id="estado" name="estado" maxlength="2" pattern="[A-Za-z]{2}" placeholder="GO" required>
        </div>
      </fieldset>

      <div id="form-feedback"></div>

      <div class="form-actions">
        <button type="submit">Cadastrar</button>
      </div>
    </form>

    <section id="cadastros-salvos">
      <h2>Cadastros salvos neste navegador</h2>
      <div id="lista-cadastros"></div>
    </section>
  `;
}
