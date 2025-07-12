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

## Explicao do page.js
-use cliente;
    Diz ao next.js usar este arquivo como o padrão para o cliente-side.

-import styles from "./page.module.css";
-import React, { useState } from "react";
    styles importa o modulo CSS: o page.module.css.
    useState vem do React, pra criar estado local.

- O componente do Button 
    Chame-se a função Button() com uma variavel constante 'count' com estado inicial em 0 para guardar quantas vezes o botão foi clicado.
    A função handleClick() serve para atualizar o valor a cada vez que foi clicado.
    No <Button> o ClassName aplica o estilo do CSS.
    onClick é um prop que dispara a funcao handleClick.
    E o <p> exibe quantas o botão foi clicado.

- O componente do Input
    Chama-se a função Input() com uma variavel constante 'value' com estado de string vazia que guarda o texto digitado.
    A função handleChange() é chamada toda vez que o usuário digita algo no <input>.
        O event do handleChange() é o objeto de evento do onChange.
        event.target.value é o texto dentro do <input>.
        setValue(...) atualiza o estado com o novo texto.
    No <input> o ClassName aplica o estilo do modulo CSS.
    type= "text" -> diz que o input é de texto.
    value= {value} -> o valor exibido no input vem do estado.
    Toda vez que é digitado no onChange chama-se handleChange().
    E o <p> exibe o que o usuario digitou.

- Home 
    'export default function Home' esta exportanto a função Home que diz ao next que esta é pagina principal.
    Estrutura:
        <div className={styles.page}>: Div principal que usa uma classe CSS do módulo de estilos.
        <main className={styles.main}>: Tag main semântica para o conteúdo principal.
    Conteudo:
        <h1>: Título principal "Estudo para React"
        <p>: Descrição "Botão e Input com React"
    Componentes:
        <ol className={styles.grid}>: Lista ordenada que serve como container para os cards. Dentro dela há dois <ul>.
        o primeiro renderiza o componente <Button /> e o segundo renderiza o componente <Input />