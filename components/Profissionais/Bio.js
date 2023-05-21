import Image from "next/image";

import styles from "../../styles/Profissionais/Bio.module.css";

export default function Bio({ bio, imgSrc, imgAlt, sortLeft }) {
  return (
    <section className={styles.bio}>
      {sortLeft && <p>{bio}</p>}
      <div className={styles["img-card"]}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          layout="fill"
          objectFit="cover"
          objectPosition="top center"
        />
      </div>
      {!sortLeft && <p>{bio}</p>}
    </section>
  );
}
