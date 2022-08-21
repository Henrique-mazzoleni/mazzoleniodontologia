import styles from "../../styles/Home/Tratamentos.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTooth } from "@fortawesome/free-solid-svg-icons";

const ListaTratamentos = [
  {
    id: "1",
    nome: "ATM",
  },
  {
    id: "2",
    nome: "Check-up Digital",
  },
  {
    id: "3",
    nome: "Clareamento",
  },
  {
    id: "4",
    nome: "Dentística Estética",
  },
  {
    id: "5",
    nome: "Endodontia",
  },
  {
    id: "6",
    nome: "Facetas em Porcelana",
  },
  {
    id: "7",
    nome: "Implantodontia",
  },
  {
    id: "8",
    nome: "Ortodontia",
  },
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
          <TratamentoCartao key={tratamento.id} tratamento={tratamento.nome} />
        ))}
      </div>
    </section>
  );
}
