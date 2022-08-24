import { Fragment } from "react";

import HeadComponent from "../components/HeadComponent";
import HomeHeader from "../components/Home/HomeHeader";
import Infos from "../components/Home/Infos";
import Description from "../components/Home/Description";
import Tratamentos from "../components/Home/Tratamentos";
import Depoimentos from "../components/Home/Depoimentos";
import Footer from "../components/Footer";

import styles from "../styles/Home/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <HeadComponent
        title="Home"
        content="Clínica odontológica multidisciplinar especializada - atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado."
      />

      <HomeHeader />
      <main className={styles.main}>
        <Infos />
        <Description />
        <Tratamentos />
        <Depoimentos />
      </main>

      <Footer />
    </Fragment>
  );
}
