import Image from "next/image";

import styles from "../../styles/Home/Depoimentos.module.css";

const ListaDepoimentos = [
    {
        id: "d1",
        source: "/images/Annia.jpg",
        depoimento: "De graça até injeção na testa",
        autor: "Annia Mazzoleni",
    },
]

const Depoimento = (props) => {
  return (
    <div className={styles.depoimento}>
      <div className={styles["image-wrapper"]}>
        <Image src={props.source} layout="fill" objectFit="cover" />
      </div>
      <div className={styles["text-box"]}>
        <p>{props.depoimento}</p>
      </div>
      <div className={styles.autor}>
        <h3>{props.autor}</h3>
      </div>
    </div>
  );
};

export default function Depoimentos() {
  return (
    <section className={styles.depoimentos}>
      <h2>Depoimentos</h2>
      <Depoimento
        source="/images/Annia.jpg"
        depoimento="De graça até injeção na testa."
        autor="Annia Mazzoleni"
      />
    </section>
  );
}
