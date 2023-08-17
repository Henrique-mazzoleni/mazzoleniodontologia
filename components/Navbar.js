import Link from 'next/link';
import Image from 'next/image';
import { Fragment, useEffect, useState } from 'react';

import useWindowSize from '../hooks/useWindowSize';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/Navbar.module.css';

import listaTratamentos from '../pages/api/data.json';

const logoImg = (
  <div className={styles.logo}>
    <Image
      src="/images/Mazzoleni_logo_dark_background_80.svg"
      alt="Mazzoleni Logo"
      layout="fill"
      objectFit="cover"
      objectPosition="top center"
    />
  </div>
);

const logoSmallImg = (
  <div className={styles['logo-small']}>
    <Image
      src="/images/Mazzoleni_logo_dark_background_small.svg"
      alt="Mazzoleni Logo"
      layout="fill"
      objectFit="contain"
      objectPosition="center center"
    />
  </div>
);

export default function Navbar() {
  const { width } = useWindowSize();
  const [mobileMode, setMobileMode] = useState(width < 575);
  const [showTratamentos, setShowTratamentos] = useState(false);

  useEffect(() => {
    setMobileMode(width < 575);
  }, [width]);

  const showTratamentosHandler = () => {
    setShowTratamentos((state) => !state);
  };

  const menu = (
    <Fragment>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/sobre">A Clínica</Link>
      </li>
      <li>
        <Link href="/profissionais">Profissionais</Link>
      </li>
      <li
        onMouseEnter={!mobileMode ? showTratamentosHandler : () => {}}
        onMouseLeave={!mobileMode ? showTratamentosHandler : () => {}}
        onClick={mobileMode ? showTratamentosHandler : () => {}}
      >
        Tratamentos &gt;
        {showTratamentos && (
          <ul className={styles['drop-down-list']}>
            {listaTratamentos.map(({ nome }, i) => (
              <li key={i}>
                <Link href={`/${nome}`}>{nome}</Link>
              </li>
            ))}
          </ul>
        )}
      </li>
      <li>
        <Link href="/contato">Contato</Link>
      </li>
    </Fragment>
  );

  const [navDeskClass, setNavDeskClass] = useState(
    `${styles['navbar-top']} ${styles.navbar}`
  );

  const [logo, setLogo] = useState(logoImg);
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenuHandler = () => {
    setShowLinks((state) => !state);
  };

  const menuLogo = (
    <div className={styles['menu-icon']} onClick={toggleMenuHandler}>
      <FontAwesomeIcon icon={faBars} size="1x" />
    </div>
  );

  useEffect(() => {
    const scrollHandler = () => {
      if (window.scrollY === 0 && !mobileMode) {
        setNavDeskClass(`${styles['navbar-top']} ${styles.navbar}`);
        setLogo(logoImg);
      } else {
        setNavDeskClass(`${styles['navbar-scroll']} ${styles.navbar}`);
        setLogo(logoSmallImg);
      }
    };

    window.addEventListener('scroll', scrollHandler);
    return () => {
      window.removeEventListener('scroll', scrollHandler);
    };
  }, [mobileMode]);

  if (mobileMode)
    return (
      <nav className={styles['navbar-mobile']}>
        <div className={styles.content}>
          {logoSmallImg}
          {menuLogo}
        </div>
        {showLinks && (
          <div className={styles['menu-dropdown']}>
            <ul className={styles['links-column']}>{menu}</ul>
          </div>
        )}
      </nav>
    );

  return (
    <nav className={navDeskClass}>
      <div className={styles.content}>
        {logo}
        <ul className={styles.links}>{menu}</ul>
      </div>
    </nav>
  );
}
