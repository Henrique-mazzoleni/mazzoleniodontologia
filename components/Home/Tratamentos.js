import Link from 'next/link';

import IconCard from '../UI/IconCard';

import styles from '../../styles/Home/Tratamentos.module.css';

import { faTooth } from '@fortawesome/free-solid-svg-icons';

export default function Tratamentos({ listaTratamentos }) {
  return (
    <section className={styles.tratamentos}>
      <h2>Nossos Tratamentos</h2>
      <div className={styles.display}>
        {listaTratamentos.map(({ nome }, i) => (
          <Link key={`${nome}`} href={`/${nome}`} passHref legacyBehavior>
            <IconCard titulo={nome} icon={faTooth} linkClass="link" />
          </Link>
        ))}
      </div>
    </section>
  );
}
