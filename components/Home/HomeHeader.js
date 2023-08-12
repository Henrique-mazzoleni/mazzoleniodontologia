import styles from '../../styles/Home/HomeHeader.module.css';

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <div className={styles['header-content']}>
        <h1 className={styles.title}>
          Aqui a sua saúde oral é nossa prioridade!
        </h1>
      </div>
    </header>
  );
}
