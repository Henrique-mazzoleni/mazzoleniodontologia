import Image from "next/image";

import styles from "../styles/Description.module.css";

export default function Description() {
  return (
    <section className={styles.description}>
      <div className={styles.image}>
        <Image
          src="/Equipo.jpg"
          alt="Picture of the treatment room and dental equipment"
          placeholder="empty"
          layout="fill"
          width={2048}
          height={1365}
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
