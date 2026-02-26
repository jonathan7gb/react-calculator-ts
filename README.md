# Calculator React-TS

Uma calculadora web desenvolvida com React, TypeScript, Tailwind CSS e Vite.

## 📋 Sobre o projeto

Aplicação de calculadora interativa que permite realizar operações matemáticas básicas e expressões com parênteses diretamente no navegador.

## ✨ Funcionalidades

- **Operações aritméticas básicas**: soma (`+`), subtração (`-`), multiplicação (`×`) e divisão (`/`)
- **Números decimais**: suporte ao ponto decimal (`.`)
- **Expressões com parênteses**: agrupamento de sub-expressões usando `(` e `)`
- **Botão C (Clear)**: limpa o display e reinicia a operação atual
- **Display em tempo real**: exibe a expressão digitada e o resultado calculado
- **Resultados precisos**: resultados arredondados em até 3 casas decimais
- **Interface responsiva**: layout centralizado com design limpo e moderno

## 🛠️ Tecnologias utilizadas

| Tecnologia | Versão | Descrição |
|---|---|---|
| [React](https://react.dev/) | 19 | Biblioteca para construção de interfaces |
| [TypeScript](https://www.typescriptlang.org/) | 5.9 | Superset tipado do JavaScript |
| [Vite](https://vite.dev/) | 7 | Ferramenta de build e servidor de desenvolvimento |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Framework de estilização utilitário |
| [mathjs](https://mathjs.org/) | 15 | Biblioteca de avaliação de expressões matemáticas |

## 🗂️ Estrutura do projeto

```
src/
├── components/
│   ├── button.tsx       # Botões numéricos, de operação e de cálculo
│   ├── calculador.tsx   # Componente principal com a lógica da calculadora
│   ├── display.tsx      # Componente de exibição da expressão/resultado
│   └── header.tsx       # Cabeçalho da aplicação
├── App.tsx              # Componente raiz
├── main.tsx             # Ponto de entrada da aplicação
└── index.css            # Estilos globais
```

## 🚀 Como executar

### Pré-requisitos

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- npm

### Instalação e execução

```bash
# Clone o repositório
git clone https://github.com/jonathan7gb/react-calculator-ts.git
cd react-calculator-ts

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:5173` no navegador.

### Scripts disponíveis

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor de desenvolvimento com HMR |
| `npm run build` | Gera o build de produção (`dist/`) |
| `npm run preview` | Pré-visualiza o build de produção localmente |
| `npm run lint` | Executa a verificação de lint com ESLint |
