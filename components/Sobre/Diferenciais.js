import IconCard from "../UI/IconCard";

import {
  faMapLocationDot,
  faCar,
  faSyringe,
  faXRay,
  faMicroscope,
  faTeeth,
} from '@fortawesome/free-solid-svg-icons';

import styles from '../../styles/Sobre/Diferenciais.module.css';

export default function Diferenciais() {
  const listaDiferenciais = [
    {
      titulo: 'Localização Privilegiada a 200m do metrô',
      icone: faMapLocationDot,
    },
    {
      titulo: 'Convênio com estacionamento local',
      icone: faCar,
    },
    {
      titulo: 'Anestesia eletrônica',
      icone: faSyringe,
    },
    {
      titulo: 'Radiografia Digital',
      icone: faXRay,
    },
    {
      titulo: 'Microscopia operatória',
      icone: faMicroscope,
    },
    {
      titulo: 'Alinhadores invisíveis',
      icone: faTeeth,
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
