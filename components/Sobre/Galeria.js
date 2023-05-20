import { useCallback, useEffect, useState } from "react";

import Image from "next/image";

import styles from "../../styles/Sobre/Galeria.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const listaFotos = [
  {
    src: "/images/galeria/recepcao.jpg",
    alt: "recepcao da clínica mazzoleni",
  },
  {
    src: "/images/galeria/recepcao_vista_entrada.jpg",
    alt: "vista da recepcao da entrada da clínica",
  },
  {
    src: "/images/galeria/sala_de_atendimento_leo.jpg",
    alt: "Sala de atendimento Dr. Leonardo",
  },
  {
    src: "/images/galeria/escritorio_leo.jpg",
    alt: "Escritorio Dr. Leonardo",
  },
  {
    src: "/images/galeria/sala_de_atendimento_ju.jpg",
    alt: "Sala de atendimento Dra. Juliana",
  },
  {
    src: "/images/galeria/sala_escritorio_ju.jpg",
    alt: "Escritório Dr. Juliana",
  },
  {
    src: "/images/galeria/esterelizacao.jpg",
    alt: "Sala de esterelizacao",
  },
];

const FotoCard = ({ imgSrc, imgAlt, onAction }) => {
  return (
    <div className={styles.imgCard} onClick={onAction}>
      <Image
        src={imgSrc}
        alt={imgAlt}
        layout="fill"
        objectFit="cover"
        objectPosition="center center"
      />
    </div>
  );
};

export default function Galeria() {
  const [fotoSelected, setFotoSelected] = useState(null);
  const [fotoIndex, setFotoIndex] = useState(0);

  const fotoSelectHandler = (foto, index) => {
    setFotoSelected(foto);
    setFotoIndex(index);
  };

  const fotoRemoveHandler = () => {
    setFotoSelected(null);
  };

  const nextFotoHandler = useCallback(() => {
    const newIndex = fotoIndex === 6 ? 0 : fotoIndex + 1;
    setFotoIndex(newIndex);
    setFotoSelected(listaFotos[newIndex]);
  }, [fotoIndex]);

  const prevFotoHandler = useCallback(() => {
    const newIndex = fotoIndex === 0 ? 6 : fotoIndex - 1;
    setFotoIndex(newIndex);
    setFotoSelected(listaFotos[newIndex]);
  }, [fotoIndex]);

  useEffect(() => {
    const keyPressHandler = ({ key }) => {
      if (["ArrowDown", "ArrowRight"].includes(key)) nextFotoHandler();
      if (["ArrowUp", "ArrowLeft"].includes(key)) prevFotoHandler();
      if (["Escape", "Backspace", "Delete", "q"].includes(key))
        fotoRemoveHandler();
    };

    window.addEventListener("keydown", keyPressHandler);

    return () => window.removeEventListener("keydown", keyPressHandler);
  }, [nextFotoHandler, prevFotoHandler]);

  if (!fotoSelected)
    return (
      <section className={styles.galeria}>
        {listaFotos.map((foto, i) => (
          <FotoCard
            key={i}
            imgSrc={foto.src}
            imgAlt={foto.alt}
            onAction={fotoSelectHandler.bind(null, foto, i)}
          />
        ))}
      </section>
    );

  return (
    <div className={styles["foto-overlay"]}>
      <div className={styles["img-overlay-card"]}>
        <Image
          src={fotoSelected.src}
          alt={fotoSelected.alt}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </div>
      <button className={styles["change-btn"]} onClick={prevFotoHandler}>
        <FontAwesomeIcon icon={faChevronLeft} size="3x" />
      </button>
      <button className={styles["change-btn"]} onClick={nextFotoHandler}>
        <FontAwesomeIcon icon={faChevronRight} size="3x" />
      </button>
      <button className={styles["close-btn"]} onClick={fotoRemoveHandler}>
        <FontAwesomeIcon icon={faXmark} size="3x" />
      </button>
    </div>
  );
}
