import { Fragment } from "react";

import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import HomeHeader from "../components/Home/HomeHeader";
import Infos from "../components/Home/Infos";
import Tratamentos from "../components/Home/Tratamentos";
import Depoimentos from "../components/Home/Depoimentos";
import Footer from "../components/Footer";

import styles from "../styles/Home/Home.module.css";
import tratamentosData from './api/data.json';

export default function Home() {
  return (
    <Fragment>
      <HeadComponent
        title="Home"
        content="Clínica odontológica multidisciplinar especializada - atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado."
      />

      <Navbar />
      <HomeHeader />
      <main className={styles.main}>
        <Infos />
        <Description
          classProp="home-description"
          imgSrc="/images/Equipo.jpg"
          imgAlt="Sala de atendimento com equipo"
          text={[
            'Atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado.',
          ]}
        />
        <Tratamentos listaTratamentos={tratamentosData} />
        <Depoimentos />
      </main>

      <Footer />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: { tratamentosData },
  };
}