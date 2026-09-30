// js/modules/validacaoFormulario.js
// ÚNICA responsabilidade: checar a validade dos campos e injetar/remover
// mensagens de erro no DOM. Não sabe nada sobre localStorage nem sobre
// o que acontece depois de um formulário ser válido.

const mensagensPattern = {
  cpf: "CPF inválido. Use o formato 000.000.000-00.",
  telefone: "Telefone inválido. Use o formato (00) 00000-0000.",
  cep: "CEP inválido. Use o formato 00000-000.",
  estado: "Use a sigla do estado com 2 letras (ex.: GO).",
};

function obterMensagemErro(input) {
  if (input.validity.valueMissing) return "Este campo é obrigatório.";
  if (input.validity.typeMismatch) return "Formato de e-mail inválido.";
  if (input.validity.patternMismatch) return mensagensPattern[input.id] || "Valor em formato inválido.";
  return "Valor inválido.";
}

function exibirErroCampo(input) {
  const campo = input.closest(".campo");
  if (!campo) return;
  campo.classList.add("campo-invalido");
  let mensagemEl = campo.querySelector(".mensagem-erro");
  if (!mensagemEl) {
    mensagemEl = document.createElement("span");
    mensagemEl.className = "mensagem-erro";
    campo.appendChild(mensagemEl);
  }
  mensagemEl.textContent = obterMensagemErro(input);
}

function limparErroCampo(input) {
  const campo = input.closest(".campo");
  if (!campo) return;
  campo.classList.remove("campo-invalido");
  const mensagemEl = campo.querySelector(".mensagem-erro");
  if (mensagemEl) mensagemEl.remove();
}

export function validarCampo(input) {
  if (input.checkValidity()) {
    limparErroCampo(input);
    return true;
  }
  exibirErroCampo(input);
  return false;
}

export function validarFormulario(form) {
  let formValido = true;
  form.querySelectorAll("input").forEach((input) => {
    if (!validarCampo(input)) formValido = false;
  });
  return formValido;
}
