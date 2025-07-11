"use client";
import Image from "next/image";
import styles from "./page.module.css";
import React, { useState } from "react";

function Button() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  return (
    <>
      <button className={styles.button} onClick={handleClick}>
        Clique aqui
      </button>
      <p className="counter">Esse botão foi clicado {count} vezes.</p>
    </>
  );
}

function Input() {
  const [value, setValue] = useState("");
  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <>
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={handleChange}
      />
      <p className="input-value">Você digitou: {value}</p>
    </>
  );
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>Estudo para React</h1>
        <p className={styles.description}>Botão e Input com React</p>
        <ol className={styles.grid}>
          <ul className={styles.card}>
            <Button />
          </ul>
          <ul className={styles.card}>
            <Input />
          </ul>
        </ol>
      </main>
    </div>
  );
}
