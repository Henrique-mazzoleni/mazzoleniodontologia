import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.wrapper}>
      <footer className={styles.footer}>
        <div className={styles.logo}>
          <Image
            src="/images/Mazzoleni_logo.jpg"
            alt="Mazzoleni Logo"
            placeholder="empty"
            layout="fill"
            objectFit="cover"
            objectPosition="top center"
          />
        </div>
        <ul className={styles.pages}>
          <h3>Páginas</h3>
          <li>&gt; Home</li>
          <li>&gt; A Clínica</li>
          <li>&gt; Noticias</li>
          <li>&gt; Contato</li>
        </ul>
        <div className={styles.endereco}>
          <h3>Endereço</h3>
          <p>
            Av. Moema 170 cj.154
            <br />
            Planalto Paulista - São Paulo - SP
            <br />
            Telefone: 11 3499-0490
            <br />
            Celular: 11 95000-2799
            <br />
            Email: mazzoleni.odontologia@gmail.com
          </p>
        </div>
        <div className={styles.links}>
          <a
            href="https://www.facebook.com/Mazzoleni-Odontologia-100229098203417/?ref=page_internal"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a
            href="https://www.instagram.com/mazzoleniodontologia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://wa.me/5511950002799"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
          </a>
        </div>
      </footer>
    </div>
  );
}
