import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.content}>
        <div className={styles.logo}>Mazzoleni Odontologia</div>
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
