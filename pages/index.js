import { Fragment } from "react";

import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";
import Description from "../components/Description";
import HomeHeader from "../components/Home/HomeHeader";
import Infos from "../components/Home/Infos";
import Tratamentos from '../components/Home/Tratamentos';
import Footer from "../components/Footer";

import styles from "../styles/Home/Home.module.css";
import tratamentosData from './api/data.json';
import Whatsapp from '../components/Whatsapp';

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
            'Temos como objetivo principal devolver e preservar a sua saúde oral, associando conhecimento técnico a mais de 20 anos de experiência clínica, e sempre aplicando o que há de mais atual para entregar tratamentos minimamente invasivos que preservem ao máximo as estruturas naturais dos pacientes.',
          ]}
        />
        <Tratamentos listaTratamentos={tratamentosData} />
      </main>

      <Footer />
      <Whatsapp />
    </Fragment>
  );
}

export function getStaticProps() {
  return {
    props: { tratamentosData },
  };
}