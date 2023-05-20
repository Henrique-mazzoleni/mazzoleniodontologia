import styles from '../styles/Citacao.module.css'

export default function Citacao({ texto }) {
    return (
        <section className={styles.citacao} >
            <h3>{texto}</h3>
        </section>
    )
}