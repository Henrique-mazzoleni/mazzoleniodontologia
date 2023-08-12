import { Fragment } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Bio from '../components/Profissionais/Bio';
import Whatsapp from '../components/Whatsapp';

export default function Profissionais() {
  return (
    <Fragment>
      <Navbar />
      <Header title="Profissionais" />
      <Bio
        imgSrc="/images/bios/Leonardo.jpg"
        imgAlt="Dr. Leonardo Mazzoleni"
        bio="Prof. Me. Leonardo B. Mazzoleni - CROSP 77504 - Graduado em Odontologia pela USP em 2002; Especialista em endodontia pela USP em 2006; Mestre em Bio-odontologia pela UNIB em 2013. Professor de endodontia na graduação e pós-graduação da Universidade Metodista de São Paulo. Atua na clínica geral e com enfoque em endodontia microscópica convencional e cirúrgica."
        sortLeft={false}
      />
      <Bio
        imgSrc="/images/bios/juliana.jpg"
        imgAlt="Dra. Juliana Kobayashi"
        bio="Dra. Juliana M. Kobayashi - CROSP 77436 - Graduada em Odontologia pela USP em 2002; Especialista em ortodontia pela Associação Paulista de Cirurgiões Dentistas em 2008. Atua na área de reabilitação protética com ênfase em estética e na área de ortodontia convencional e com alinhadores."
        sortLeft={true}
      />
      <Bio
        imgSrc="/images/bios/Rafael.jpg"
        imgAlt="Dr. Raphael N. Augusto"
        bio="Dr. Raphael N. Augusto - CROSP 77513 - Graduado em odontologia pela USP em 2002; Especialista em implantodontia pela Associação Paulista de Cirurgiões Dentistas em 2008. Atua na área de cirurgia oral menor com enfase em implantodontia e cirurgia de enxertia óssea."
        sortLeft={false}
      />
      <Whatsapp />
      <Footer />
    </Fragment>
  );
}
