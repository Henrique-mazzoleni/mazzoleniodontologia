import Link from 'next/link';
import Image from 'next/image';
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
          <a
            href="https://www.google.com/maps/dir//''/@-23.6043023,-46.7292401,12z/data=!4m9!4m8!1m0!1m5!1m1!1s0x94ce5a1077e46f6d:0xab4f2b7f2fb50a4a!2m2!1d-46.6591997!2d-23.604318!3e3?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faBus} size="2x" />
              <p>ROTAS DE TRANSPORTE PÚBLICO</p>
            </button>
          </a>
          <a
            // href="https://waze.com/ul?ll=-23.60361299,-46.65980458&navigate=yes"
            href="https://www.waze.com/live-map/directions/sao-paulo/sao-paulo?navigate=yes&to=place.ws.row.10760007.170"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className={styles.btn}>
              <FontAwesomeIcon icon={faRoute} size="2x" />
              <p>USE O WAZE ATÉ A CLÍNICA</p>
            </button>
          </a>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faPhone} size="2x" />
            <h4>
              Tel.: <span>11 3499-0490 / 11 95000-2799</span>
            </h4>
          </div>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <h4>
              Whatsapp:{' '}
              <span className={styles.whats}>
                <a
                  href="https://wa.me/5511950002799"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  11 95000-2799
                </a>
              </span>
            </h4>
          </div>
          <div className={styles.row}>
            <FontAwesomeIcon icon={faClock} size="2x" />
            <h4>
              <span>Segunda-Sexta - 9:00-17:30</span>
            </h4>
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
              icon={require('../../public/images/logo_icon.ico')}
              onClick={toggleOpen}
            >
              {isOpen && (
                <InfoWindow onCloseClick={toggleOpen}>
                  <p>
                    Av. Moema 170 cj.154 - Planalto Paulista - São Paulo - SP
                  </p>
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
