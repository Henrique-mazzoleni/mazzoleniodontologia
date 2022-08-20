import Navbar from "../Navbar";

import styles from '../../styles/Home/HomeHeader.module.css';

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay} />
      <Navbar />
      <div className={styles["header-content"]}>
        <h1 className={styles.title}>
          Deus da dente <br />
          pra quem nao precisa.
        </h1>
      </div>
    </header>
  );
}
