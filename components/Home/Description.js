import Image from "next/image";

import styles from "../../styles/Home/Description.module.css";

export default function Description() {
  return (
    <section className={styles.description}>
      <div className={styles.image}>
        <Image
          src="/images/Equipo.jpg"
          alt="Picture of the treatment room and dental equipment"
          placeholder="empty"
          layout="fill"
          objectFit="cover"
        />
        <div className={styles.overlay}></div>
      </div>
      <div className={styles.text}>
        <p>
          Atendemos todas as especialidades com o mais alto rigor técnico e as
          últimas tecnologias disponíveis no mercado.
        </p>
      </div>
    </section>
  );
}
