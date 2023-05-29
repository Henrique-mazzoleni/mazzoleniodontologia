import { Fragment } from 'react';

import { useRouter } from 'next/router';
import Navbar from '../components/Navbar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import tratamentos from './api/data.json';
import Description from '../components/Description';

export default function Tratamento() {
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
      <Footer />
    </Fragment>
  );
}

//   return (
//       <Bio
//         imgSrc="/images/bios/Leonardo.jpg"
//         imgAlt="Dr. Leonardo Mazzoleni"
//         bio="Prof. Me. Leonardo B. Mazzoleni - CROSP 77504 - Graduado em Odontologia pela USP em 2002; Especialista em endodontia pela USP em 2006; Mestre em Bio-odontologia pela UNIB em 2013. Professor de endodontia na graduação e pós-graduação da Universidade Metodista de São Paulo. Atua na clínica geral e com enfoque em endodontia microscópica convencional e cirúrgica."
//         sortLeft={false}
//       />
//       <Bio
//         imgSrc="/images/bios/juliana.jpg"
//         imgAlt="Dra. Juliana Kobayashi"
//         bio="Dra. Juliana M. Kobayashi - CROSP 77436 - Graduada em Odontologia pela USP em 2002; Especialista em ortodontia pela Associação Paulista de Cirurgiões Dentistas em 2008. Atua na área de reabilitação protética com ênfase em estética e na área de ortodontia convencional e com alinhadores."
//         sortLeft={true}
//       />
//   );
// }
