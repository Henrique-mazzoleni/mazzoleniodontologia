import { Fragment } from 'react';

import { useRouter } from 'next/router';
import Image from 'next/image';

import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import tratamentosData from './api/data.json';
import Description from '../components/Description';
import Whatsapp from '../components/Whatsapp';

import styles from '../styles/tratamentos.module.css';

export default function Tratamento({ tratamentos }) {
  const router = useRouter();
  const { nome, descricao, imgAlt, imgSrc, imgList } = tratamentos.filter(
    (trat) => trat.nome === router.query.tratamento
  )[0];

  return (
    <Fragment>
      <Navbar />
      <Header title={nome} />
      <Description text={descricao} imgSrc={imgSrc} imgAlt={imgAlt} />
      <Whatsapp />
      {imgList.length > 0 && (
        <section className={styles.galeria}>
          {imgList.map((caso) => {
            return (
              <article key={caso.title} className={styles.caso}>
                {caso.title !== 'unico' ? <h2>{caso.title}</h2> : ''}
                <div className={styles['caso-fotos']}>
                  {caso.fotos.map((img) => (
                    <div key={img.src} className={styles['foto-container']}>
                      <Image
                        src={img.src}
                        alt={img.alt}
                        layout="fill"
                        objectFit="cover"
                        objectPosition="top center"
                      />
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </section>
      )}
      <Footer />
    </Fragment>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: tratamentosData.map((obj) => ({
      params: {
        tratamento: obj.nome,
      },
    })),
  };
}

export function getStaticProps() {
  return {
    props: { tratamentos: tratamentosData },
  };
}
