import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../../styles/UI/IconCard.module.css";

export default function IconCard ({ icon, titulo }) {
    return (
      <div className={styles.card}>
        <FontAwesomeIcon icon={icon} size="2x" />
        <h3>{titulo}</h3>
      </div>
    );
  };