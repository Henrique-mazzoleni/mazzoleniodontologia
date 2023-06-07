import { Fragment } from 'react';
import Header from '../components/Header';
import Infos from '../components/Home/Infos';
import Footer from '../components/Footer';

import styles from '../styles/Contato/Contato.module.css';
import Navbar from '../components/Navbar';
import MapLinks from '../components/Contato/MapsLinks';

export default function Contato() {
  return (
    <Fragment>
      <Navbar />
      <Header title="Contato" />;
      <main className={styles.main}>
        <Infos />
        <MapLinks />
      </main>
      <Footer />
    </Fragment>
  );
}
