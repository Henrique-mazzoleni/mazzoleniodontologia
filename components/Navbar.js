import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Navbar.module.css";
import { Fragment, useEffect, useState } from "react";
import useWindowSize from "../hooks/useWindowSize";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const { width } = useWindowSize();
  const [mobileMode, setMobileMode] = useState(width < 430);

  useEffect(() => {
    setMobileMode(width < 430);
  }, [width]);

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

  const menu = (
    <Fragment>
      <li><Link href="/">Home</Link></li>
      <li><Link href="/">Sobre</Link></li>
      <li><Link href="/">Tratementos</Link></li>
      <li><Link href="/">Noticias</Link></li>
      <li><Link href="/">Contatos</Link></li>
    </Fragment>
  );

  const [navDeskClass, setNavDeskClass] = useState(
    `${styles["navbar-top"]} ${styles.navbar}`
  );
  const [logo, setLogo] = useState(image);
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenuHandler = () => {
    setShowLinks((state) => !state);
  };

  const menuLogo = (
    <div className={styles["menu-icon"]} onClick={toggleMenuHandler}>
      <FontAwesomeIcon icon={faBars} size="2x" />
    </div>
  );

  const scrollHandler = () => {
    if (window.scrollY === 0 && !mobileMode) {
      setNavDeskClass(`${styles["navbar-top"]} ${styles.navbar}`);
      setLogo(image);
    } else {
      setNavDeskClass(`${styles["navbar-scroll"]} ${styles.navbar}`);
      setLogo(text);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [scrollHandler]);

  return (
    <nav className={navDeskClass}>
      <div className={`${styles.content} ${styles["menu-fixed"]}`}>
        {logo}
        {mobileMode && menuLogo}
        {!mobileMode && <ul className={styles.links}>{menu}</ul>}
      </div>
      {showLinks && mobileMode && (
        <div className={`${styles.content} ${styles["menu-dropdown"]}`}>
          <ul className={styles["links-column"]}>{menu}</ul>
        </div>
      )}
    </nav>
  );
}
