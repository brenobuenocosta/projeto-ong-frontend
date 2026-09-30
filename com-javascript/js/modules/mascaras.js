// js/modules/mascaras.js
// Integração com a biblioteca externa IMask (carregada via CDN no index.html,
// disponível globalmente como `window.IMask`), usada para aplicar máscaras
// de digitação nos campos de CPF, telefone, CEP e estado - evitando ter que
// escrever manualmente a lógica de formatação em tempo real.

const configuracoesMascara = {
  cpf: { mask: "000.000.000-00" },
  telefone: { mask: "(00) 00000-0000" },
  cep: { mask: "00000-000" },
  estado: { mask: "aa", prepare: (str) => str.toUpperCase() },
};

function aplicarMascaras() {
  Object.entries(configuracoesMascara).forEach(([id, opcoes]) => {
    const campo = document.getElementById(id);
    // O campo só existe no DOM quando a rota "/cadastro" está ativa
    if (campo && window.IMask) {
      window.IMask(campo, opcoes);
    }
  });
}

export function initMascaras() {
  // Reaplica as máscaras toda vez que a página de cadastro é (re)renderizada,
  // já que os inputs são recriados a cada troca de rota
  document.addEventListener("route:rendered", (event) => {
    if (event.detail.path === "/cadastro") {
      aplicarMascaras();
    }
  });
}
