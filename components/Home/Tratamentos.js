import IconCard from '../UI/IconCard';

import styles from '../../styles/Home/Tratamentos.module.css';

import { faTooth } from '@fortawesome/free-solid-svg-icons';

const ListaTratamentos = [
  {
    tipo: 'Tratamento Estético',
    tratamentos: [
      'Laserterapia',
      'Dentística Estética',
      'Clareamento',
      'Facetas em Porcelana',
      'Implantodontia',
      'Alinhadores Ortodônticos',
      'Prótese Dentária',
    ],
  },
  {
    tipo: 'Especialidades',
    tratamentos: [
      'ATM',
      'Endodontia',
      'Odontopediatria',
      'Odontogeriatria',
      'Periodontia',
      'Ortodontia',
    ],
  },
  {
    tipo: 'Prevenção',
    tratamentos: ['Check-up Digital', 'Programa de Controle Preventivo'],
  },
];

export default function Tratamentos() {
  return (
    <section className={styles.tratamentos}>
      <h2>Nossos Tratamentos</h2>
      {ListaTratamentos.map((tipo) => (
        <div key={tipo.tipo}>
          <h3>{tipo.tipo}</h3>
          <div className={styles.display}>
            {tipo.tratamentos.map((tratamento, i) => (
              <IconCard
                key={`${tipo.tipo}_${i}`}
                titulo={tratamento}
                icon={faTooth}
              />
            ))}
          </div>
        </div>
      ))}
      {/* <div className={styles.display}>
        {ListaTratamentos.map((tratamento) => (
          <IconCard key={tratamento.id} titulo={tratamento.nome} icon={faTooth}/>
        ))} */}
      {/* </div> */}
    </section>
  );
}
