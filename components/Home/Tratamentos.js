import Link from 'next/link';

import IconCard from '../UI/IconCard';

import styles from '../../styles/Home/Tratamentos.module.css';

import { faTooth } from '@fortawesome/free-solid-svg-icons';

export default function Tratamentos({ listaTratamentos }) {
  return (
    <section className={styles.tratamentos}>
      <h2>Nossos Tratamentos</h2>
      {listaTratamentos.map(({ tipo, tratamentos }) => (
        <div key={tipo}>
          <h3>{tipo}</h3>
          <div className={styles.display}>
            {tratamentos.map(({ nome }, i) => (
              <Link
                key={`${tipo}_${i}`}
                href={`/${nome}`}
                passHref
                legacyBehavior
              >
                <IconCard titulo={nome} icon={faTooth} linkClass="link" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
