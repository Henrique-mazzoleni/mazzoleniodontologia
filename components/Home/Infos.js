import styles from "../../styles/Home/Infos.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faMapLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default function Infos() {
  return (
    <section className={styles.infos}>
      <div className={styles.card}>
        <FontAwesomeIcon icon={faClock} size="2x" />
        <h3>Atendimento</h3>
        <p>
          Segunda-Sexta
          <br />
          9:00-17:30
        </p>
      </div>
      <div className={styles.card}>
        <FontAwesomeIcon icon={faMapLocationDot} size="2x" />
        <h3>Endereço</h3>
        <p>
          Av. Moema 170 cj.154
          <br />
          São Paulo
        </p>
      </div>
      <div className={styles.card}>
        <FontAwesomeIcon icon={faPhone} size="2x" />
        <h3>Telefone</h3>
        <p>
          11 3499-0490
          <br />
          11 95000-2799
        </p>
      </div>
      <div className={styles.card}>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        <h3>Whatsapp</h3>
        <p>11 95000-2799</p>
      </div>
    </section>
  );
}
