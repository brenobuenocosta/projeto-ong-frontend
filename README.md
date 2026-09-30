# Plataforma Web - ONG

Projeto acadêmico desenvolvido ao longo da disciplina de Desenvolvimento Web
Front End, para uma plataforma institucional de uma ONG fictícia. O
repositório contém **duas versões** do mesmo projeto, representando duas
etapas distintas do aprendizado.

## Estrutura do repositório

```
projeto-ong-completo/
├── sem-javascript/    → versão estática (HTML + CSS puro)
└── com-javascript/    → versão SPA (HTML + CSS + JavaScript)
```

## Diferenças entre as versões

| Aspecto | `sem-javascript/` | `com-javascript/` |
|---|---|---|
| Navegação | 3 arquivos HTML separados (`index.html`, `projetos.html`, `cadastro.html`), cada clique recarrega a página | Um único `index.html`; navegação via hash (`#/rota`), sem recarregar a página (SPA) |
| Validação do formulário | Apenas atributos nativos do HTML5 (`required`, `pattern`, `type`) | Atributos nativos + verificação campo a campo em JavaScript, com mensagens de erro inline e feedback em tempo real |
| Persistência de dados | Nenhuma - o formulário não salva nada | Cadastros salvos no `localStorage` do navegador, listados na própria página |
| Máscaras de campo | Nenhuma | Aplicadas via biblioteca IMask (CPF, telefone, CEP, estado) |
| Formatação de datas | N/A | Biblioteca Day.js, formatando a data de nascimento nos cadastros salvos |
| Estrutura de pastas | `html/`, `assets/css/`, `assets/img/` | `html/`, `css/`, `images/`, `js/` (com subpastas `modules/`, `templates/`, `data/`) |
| Organização do código | CSS em um único arquivo | JavaScript modularizado (ES6 Modules) por responsabilidade: roteamento, validação, armazenamento, renderização |
| Modo escuro | Sim (`prefers-color-scheme`) | Sim (`prefers-color-scheme`) |
| Acessibilidade | Marcação semântica (`header`, `nav`, `main`, `footer`) | Semântica + skip link, `aria-expanded`, `aria-current`, `aria-invalid`/`aria-describedby`, foco por teclado no menu hambúrguer |

## Tecnologias utilizadas

- HTML5 semântico
- CSS3 (variáveis nativas, Grid, Flexbox, media queries)
- JavaScript (ES6 Modules) - apenas em `com-javascript/`
- [Day.js](https://day.js.org/) - formatação de datas (via CDN)
- [IMask](https://imask.js.org/) - máscaras de campo (via CDN)
- `localStorage` - persistência local dos cadastros

## Pré-requisitos

- Um navegador atualizado
- Para a versão `com-javascript/`: um servidor local (ex.: extensão **Live
  Server** do VS Code), já que o uso de `<script type="module">` é bloqueado
  pelo navegador ao abrir o arquivo diretamente (`file://`)

## Como executar localmente

### `sem-javascript/`
Basta abrir `sem-javascript/html/index.html` diretamente no navegador
(duplo clique funciona normalmente).

### `com-javascript/`
1. Abra a pasta `com-javascript/html/` no VS Code
2. Clique com o botão direito em `index.html` → "Open with Live Server"
   (ou rode `python -m http.server` dentro da pasta `html/` pelo terminal)
3. Acesse o endereço local exibido (ex.: `http://127.0.0.1:5500`)

## Versionamento

O histórico de commits segue o padrão [Conventional Commits](https://www.conventionalcommits.org/)
(`feat:`, `fix:`, `refactor:`, `chore:`), facilitando a leitura do
progresso do projeto por qualquer pessoa que abra o repositório.

## Autor

Breno de Assis Bueno Costa - projeto desenvolvido como parte do curso de
Engenharia de Software.
