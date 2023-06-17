import Image from 'next/image';

import styles from '../styles/Whatsapp.module.css';

export default function Whatsapp() {
  return (
    <div className={styles.whatsapp}>
      <a
        href="https://wa.me/5511950002799"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/images/WhatsApp.svg"
          alt="whatsapp logo"
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
        />
      </a>
    </div>
  );
}
