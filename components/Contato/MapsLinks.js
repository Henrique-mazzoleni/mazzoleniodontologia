import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faPhone,
  faBus,
  faRoute,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/Contato/MapLinks.module.css';

export default function MapLinks() {
  return (
    <section className={styles['map-links']}>
      <div className={styles.links}>
        <div className={styles['link-rows']}>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <p>LIGAR PARA AGENDAR UM EXAME</p>
          </button>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faBus} size="2x" />
            <p>ROTAS DE TRANSPORTE PÚBLICO</p>
          </button>
          <button className={styles.btn}>
            <FontAwesomeIcon icon={faRoute} size="2x" />
            <p>USE O WAZE ATÉ A CLÍNICA</p>
          </button>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <h4>Tel.: 11 3499-0490 / 11 95000-2799</h4>
          </div>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <h4>Whatsapp: 11 95000-2799</h4>
          </div>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faClock} size="2x" />
            <h4>Segunda-Sexta - 8:00-17:00</h4>
          </div>
        </div>
      </div>
      <div className={styles.map}></div>
    </section>
  );
}
