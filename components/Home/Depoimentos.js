import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "../../styles/Home/Depoimentos.module.css";

const ListaDepoimentos = [
  {
    id: "d1",
    source: "/images/depo/Annia.jpg",
    depoimento: "De graça até injeção na testa",
    autor: "Annia Mazzoleni",
  },
  {
    id: "d2",
    source: "/images/depo/Henrique.jpg",
    depoimento: "Unico problema é que familia nao da pra processar",
    autor: "Henrique Adamastor",
  },
  {
    id: "d3",
    source: "/images/depo/Gabriella.jpg",
    depoimento: "Aaavre",
    autor: "Gabriella Vuolo Mazzoleni",
  },
];

const Depoimento = (props) => {
  return (
    <div className={styles.depoimento}>
      <div className={styles["image-wrapper"]}>
        <Image src={props.source} alt={props.autor} layout="fill" objectFit="cover" />
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
  const [idx, setIdx] = useState(0);
  const [depo, setDepo] = useState(ListaDepoimentos[idx]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (idx + 1 >= ListaDepoimentos.length) {
        setIdx(0);
      } else {
        setIdx((state) => state + 1);
      } 
    }, 3000);
    setDepo(ListaDepoimentos[idx]);

    return () => clearInterval(interval)
  },[idx]);
  
  return (
    <section className={styles.depoimentos}>
      <h2>Depoimentos</h2>
      <Depoimento
        source={depo.source}
        depoimento={depo.depoimento}
        autor={depo.autor}
      />
    </section>
  );
}
