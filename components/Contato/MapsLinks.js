import Link from 'next/link';
import { useEffect, useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faClock,
  faPhone,
  faBus,
  faRoute,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';

import styles from '../../styles/Contato/MapLinks.module.css';

export default function MapLinks() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  });
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen((state) => !state);

  useEffect(() => {
    if (isLoaded) toggleOpen();
  }, [isLoaded]);

  return (
    <section className={styles['map-links']}>
      <div className={styles.links}>
        <div className={styles['link-rows']}>
          <Link href="tel:11 3499-0490">
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faPhone} size="2x" />
              <p onClick={() => "window.location.href='tel:'11 3499-0490"}>
                LIGAR PARA AGENDAR UM EXAME
              </p>
            </button>
          </Link>
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
      <div className={styles.map}>
        {isLoaded ? (
          <GoogleMap
            zoom={16}
            center={{ lat: -23.60416, lng: -46.65907 }}
            mapContainerClassName={styles['map-container']}
          >
            <Marker
              position={{ lat: -23.60416, lng: -46.65907 }}
              onClick={toggleOpen}
            >
              {isOpen && (
                <InfoWindow onCloseClick={toggleOpen}>
                  <h3>Clínica Mazzoleni Odontologia</h3>
                </InfoWindow>
              )}
            </Marker>
          </GoogleMap>
        ) : (
          <div>Loading... </div>
        )}
      </div>
    </section>
  );
}
