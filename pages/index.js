import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";

import HomeHeader from "../components/Home/HomeHeader";
import Infos from "../components/Home/Infos";
import Description from "../components/Home/Description";
import Tratamentos from "../components/Home/Tratamentos";

import styles from "../styles/Home/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Mazzoleni Odontologia</title>
        <meta
          name="description"
          content="Clínica odontológica multidisciplinar especializada - atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado."
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <HomeHeader />
      <main className={styles.main}>
        <Infos />
        <Description />
        <Tratamentos />
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
