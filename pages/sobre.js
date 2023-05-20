import { Fragment } from "react";
import HeadComponent from "../components/HeadComponent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import styles from "../styles/Sobre/Sobre.module.css";
import Header from "../components/Header";
import Description from "../components/Description";
import Citacao from "../components/Citacao";
import Diferenciais from "../components/Sobre/Diferenciais";

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
          imgSrc="/images/clínica.jpg"
          imgAlt="recepcionista atendendo"
          text={[
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, tenetur, cumque dignissimos quia autem non optio alias provident amet est perferendis nobis veritatis unde nostrum consequatur. Debitis cupiditate a molestias.",
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam minus sed amet assumenda mollitia quod blanditiis recusandae corrupti dignissimos sit.",
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi commodi, facere hic earum enim officia sunt quis ipsam harum architecto minima facilis sequi tempore reiciendis recusandae explicabo doloremque alias provident debitis saepe, ipsa neque, dolorum veritatis. Autem, porro asperiores voluptates, optio sequi, ab aperiam quod officiis ipsam quidem ea deleniti.",
          ]}
        />
        <Diferenciais />
        <Citacao 
          texto="Ambiente agradável e salas equipadas com tecnologia de ponta"
        />
      </main>
      <Footer />
    </Fragment>
  );
}
