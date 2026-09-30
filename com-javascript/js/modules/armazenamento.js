// js/modules/armazenamento.js
// ÚNICA responsabilidade: ler e gravar dados no localStorage.
// Não sabe nada sobre formulários, validação ou HTML - só lida com
// "Web Storage" puro. Se um dia a ONG migrar para uma API real,
// só este arquivo precisa mudar (as funções que o chamam nem percebem).

const CHAVE_STORAGE = "cadastros";

export function salvarCadastro(dados) {
  const listaAtual = buscarCadastros();
  listaAtual.push(dados);
  localStorage.setItem(CHAVE_STORAGE, JSON.stringify(listaAtual));
}

export function buscarCadastros() {
  const bruto = localStorage.getItem(CHAVE_STORAGE);
  return bruto ? JSON.parse(bruto) : [];
}
