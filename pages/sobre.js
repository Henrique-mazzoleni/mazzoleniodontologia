import { Fragment } from "react";
import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "../styles/Sobre/Sobre.module.css";

export default function Sobre() {
  return (
    <Fragment>
      <HeadComponent
        title="Sobre"
        content="Clínica odontológica multidisciplinar especializada - atendemos todas as especialidades com o mais alto rigor técnico e as últimas tecnologias disponíveis no mercado."
      />
      <Navbar />
      <Footer />
    </Fragment>
  );
}
