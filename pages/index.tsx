import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Door Game</title>
      </Head>
      <main className={styles.main_container}>
        <h1 className={styles.home_title}>Alguma coisa aconteceu</h1>
        <Link href={"/game"}>
          <div className={styles.door_inside}>
            <div className={styles.door_over}></div>
          </div>
        </Link>
        <h2 className={styles.home_subtitle}>Entre na porta. </h2>
      </main>
    </>
  );
}
