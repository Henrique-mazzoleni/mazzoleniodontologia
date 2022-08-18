import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

import Navbar from "../components/Navbar";
import Infos from "../components/Infos";
import Description from "../components/Description";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mazzoleni Odontologia</title>
        <meta
          name="description"
          content="Clínica odontológica multidisciplinar especializada - atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <div className={styles.overlay} />
        <Navbar />
        <div className={styles["header-content"]}>
          <h1 className={styles.title}>
            Deus da dente <br />pra quem nao precisa.
          </h1>
        </div>
      </header>
      <main className={styles.main}>
        <Infos />
        <Description />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.facebook.com/Mazzoleni-Odontologia-100229098203417/?ref=page_internal"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image
              src="/Mazzoleni_logo.jpg"
              alt="Mazzoleni Logo"
              width={128}
              height={85}
            />
          </span>
        </a>
      </footer>
    </Fragment>
  );
}
