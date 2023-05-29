import IconCard from '../UI/IconCard';

import styles from '../../styles/Home/Tratamentos.module.css';

import { faTooth } from '@fortawesome/free-solid-svg-icons';

import listaTratamentos from '../../pages/api/data.json';

export default function Tratamentos() {
  return (
    <section className={styles.tratamentos}>
      <h2>Nossos Tratamentos</h2>
      {listaTratamentos.map(({ tipo, tratamentos }) => (
        <div key={tipo}>
          <h3>{tipo}</h3>
          <div className={styles.display}>
            {tratamentos.map(({ nome }, i) => (
              <IconCard key={`${tipo}_${i}`} titulo={nome} icon={faTooth} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
