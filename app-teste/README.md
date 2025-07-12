## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Explicação do `page.js`

### `use client`
Diz ao Next.js usar este arquivo como Client Component, ou seja, ele será renderizado no navegador.

### Imports
- `styles` importa o módulo CSS: `page.module.css`.
- `useState` vem do React e é usado para criar estado local.

### Componente **Button**
- Utiliza `useState` para criar a variável `count` (inicialmente 0), que armazena quantas vezes o botão foi clicado.
- A função `handleClick` incrementa o valor de `count` quando o botão é clicado.
- O botão possui:
  - className para estilização via CSS Modules.
  - onClick que dispara handleClick.
- Um parágrafo (<p>) exibe o número de cliques.
### Componente **Input**
- Utiliza `useState` para criar a variável count (inicialmente 0), que armazena quantas vezes o botão foi clicado.
- A função `handleChange` é chamada toda vez que o usuário digita algo no `<input>` e captura o valor digitado (`event.target.value`) e atualiza o estado.
- No `<input>`:  
  - O `className` aplica o estilo do módulo CSS.
  -  `type="text"` define que o input é de texto.
  -`value={value}` indica que o valor exibido no input vem do estado.
  - Sempre que é digitado, o `onChange` chama `handleChange`.
- O `<p>` exibe o que o usuário digitou.

### Home
`export default function Home` exporta a função `Home` e informa ao Next.js que esta é a página principal.

**Estrutura:**
- `div className={styles.page}`: div principal com classe CSS do módulo de estilos.
- `main className={styles.main}`: tag `main` semântica para o conteúdo principal.

**Conteúdo:**
- `<h1>`: título principal *"Estudo para React"*.
- `<p>`: descrição *"Botão e Input com React"*.

**Componentes:**
- `ol className={styles.grid}`: lista ordenada que serve como container para os cards.
  O primeiro `ul` renderiza o componente `Button`.
  O segundo `ul` renderiza o componente `Input`.
