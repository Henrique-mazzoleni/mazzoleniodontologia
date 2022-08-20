import styles from "../../styles/Home/Tratamentos.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

const ListaTratamentos = [
  "ATM",
  "Check-up Digital",
  "Clareamento",
  "Dentística Estética",
  "Endodontia",
  "Facetas em Porcelana",
  "Implantodontia",
];

const TratamentoCartao = (props) => {
  return (
    <div className={styles.card}>
      <FontAwesomeIcon icon={faTooth} size="2x" />
      <h3>{props.tratamento}</h3>
    </div>
  );
};

export default function Tratamentos() {
  return (
    <section className={styles.tratamentos}>
      <h2>Nossos Tratamentos</h2>
      <div className={styles.display}>
        {ListaTratamentos.map((tratamento) => (
          <TratamentoCartao tratamento={tratamento} />
        ))}
      </div>
    </section>
  );
}
