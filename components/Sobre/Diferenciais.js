import IconCard from "../UI/IconCard";

import {
  faMapLocationDot,
  faClock,
  faList,
  faSun,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";

import styles from "../../styles/Sobre/Diferenciais.module.css";

export default function Diferenciais() {
  const listaDiferenciais = [
    {
      titulo: "Localização Privilegiada",
      icone: faMapLocationDot,
    },
    {
      titulo: "Horários Especiais de Atendimento",
      icone: faClock,
    },
    {
      titulo: "Check-Up Digital",
      icone: faList,
    },
    {
      titulo: "Day Clinic",
      icone: faSun,
    },
    {
      titulo: "Atendimento trilíngue (português, inglês e espanhol)",
      icone: faEarthAmericas,
    },
  ];
  return (
    <section className={styles.diferenciais}>
      <h2>Diferenciais</h2>
      <div className={styles.display}>
        {listaDiferenciais.map((dif, i) => (
          <IconCard key={i} titulo={dif.titulo} icon={dif.icone} />
        ))}
      </div>
    </section>
  );
}
