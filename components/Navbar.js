import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const image = (
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
  );

  const text = (
    <div className={styles["logo-text"]}>
      <h3>Mazzoleni Odontologia</h3>
    </div>
  );

  const [logo, setLogo] = useState(image);
  const [navClass, setNavClass] = useState(`${styles['navbar-top']} ${styles.navbar}`)

  const scrollHandler = () => {
    if (window.pageYOffset === 0) {
      setLogo(image);
      setNavClass(`${styles['navbar-top']} ${styles.navbar}`)
    } else {
      setLogo(text);
      setNavClass(`${styles['navbar-scroll']} ${styles.navbar}`)
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <nav className={navClass}>
      <div className={styles.content}>
        {logo}
        <ul className={styles.links}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">Sobre</Link>
          </li>
          <li>
            <Link href="/">Tratementos</Link>
          </li>
          <li>
            <Link href="/">Noticias</Link>
          </li>
          <li>
            <Link href="/">Contatos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
