import Image from "next/image";

import styles from "../styles/Description.module.css";

export default function Description({ imgSrc, imgAlt, text, classProp }) {
  return (
    <section className={`${styles.description} ${styles[classProp]}`}>
      <div className={styles.image}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          placeholder="empty"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className={styles.text}>
        {text.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}
