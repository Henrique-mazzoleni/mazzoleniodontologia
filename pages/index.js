import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bem vindo a Clínica odontológica Mazzoleni
        </h1>

        <p className={styles.description}>
          Atendemos todas as especialidades com o mais alto rigor técnico e as
          últimas tecnologias disponíveis no mercado.
        </p>
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
