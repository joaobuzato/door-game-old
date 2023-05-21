import Link from "next/link";

import styles from "../styles/Game.module.css";

const Game = () => {
  return (
    <main className={styles.main}>
      <p>Este é um jogo sobre abrir portas. Você verá.</p>
      <Link href="/game/0000">Começar jogo.</Link>
    </main>
  );
};

export default Game;
