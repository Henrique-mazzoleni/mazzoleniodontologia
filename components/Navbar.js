import styles from '../styles/Navbar.module.css';
import Link from 'next/link';

export default function Navbar () {
    return <nav className={styles.navbar}>
        <div className={styles.logo}>Mazzoleni Odontologia</div>
        <div className={styles.links}>
            <Link href='/'>Home</Link>
            <Link href='/'>Sobre</Link>
            <Link href='/'>Tratementos</Link>
            <Link href='/'>Noticias</Link>
            <Link href='/'>Contatos</Link>
        </div>
    </nav>
}