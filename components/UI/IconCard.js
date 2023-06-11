import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/UI/IconCard.module.css";
import Link from 'next/link';

export default function IconCard({ linkClass, icon, titulo, href }) {
  return (
    <div className={`${styles.card} ${styles[linkClass]}`}>
      <FontAwesomeIcon icon={icon} size="2x" />
      {href ? (
        <Link href={href}>
          <h4>{titulo}</h4>
        </Link>
      ) : (
        <h4>{titulo}</h4>
      )}
    </div>
  );
};