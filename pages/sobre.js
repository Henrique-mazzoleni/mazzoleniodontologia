import { Fragment } from "react";
import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "../styles/Sobre/Sobre.module.css";
import Header from "../components/Header";
import Description from "../components/Description";
import Citacao from "../components/Citacao";
import Diferenciais from "../components/Sobre/Diferenciais";
import Galeria from "../components/Sobre/Galeria";
import Whatsapp from '../components/Whatsapp';

export default function Sobre() {
  return (
    <Fragment>
      <HeadComponent
        title="Sobre"
        content="Clínica odontológica multidisciplinar especializada - atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado."
      />
      <Navbar />
      <Header title="A Clínica" />
      <main className={styles.main}>
        <Description
          imgSrc="/images/Mazzoleni_logo.jpg"
          imgAlt="recepcionista atendendo"
          text={[
            'Fundada em 2007 no bairro de Moema, a clínica se estabeleceu dando foco ao atendimento ético e minimamente invasivo, sempre focando em procedimentos conservadores com o intuito de preservar as estruturas naturais dos pacientes. Para tanto, desde o início, diversos atendimentos são exectuados sob magnficação ótica com o auxílio do microscópio operatório. Em 2016 a clínica passou por uma ampliação, para melhor atender seus clientes. A aquisição de novas tecnologias no entanto é uma prática constante, sempre em busca de fornecer o que há de mais moderno em tratamento odontológico.',
          ]}
        />
        <Diferenciais />
        <Citacao texto="Ambiente agradável e salas equipadas com tecnologia de ponta" />
        <Galeria />
      </main>
      <Whatsapp />
      <Footer />
    </Fragment>
  );
}
