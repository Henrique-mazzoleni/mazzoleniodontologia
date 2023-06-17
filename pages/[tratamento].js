import { Fragment } from 'react';

import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import tratamentosData from './api/data.json';
import Description from '../components/Description';
import Whatsapp from '../components/Whatsapp';

export default function Tratamento({ tratamentos }) {
  const router = useRouter();
  const { nome, descricao, imgAlt, imgSrc } = tratamentos
    .filter((tipo) =>
      tipo.tratamentos.some((trat) => trat.nome === router.query.tratamento)
    )[0]
    .tratamentos.filter((trat) => trat.nome === router.query.tratamento)[0];

  return (
    <Fragment>
      <Navbar />
      <Header title={nome} />
      <Description text={descricao} imgSrc={imgSrc} imgAlt={imgAlt} />
      <Whatsapp />
      <Footer />
    </Fragment>
  );
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: tratamentosData
      .map((tipo) => tipo.tratamentos)
      .flat()
      .map((obj) => ({
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
