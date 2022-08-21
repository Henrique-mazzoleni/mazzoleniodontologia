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
        <div className={styles.pages}></div>
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
