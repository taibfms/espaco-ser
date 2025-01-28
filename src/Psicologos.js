import React from 'react';
import './Psicologos.css';
import ana from './images/ana.JPG'
import junior from './images/junior.JPG'
import valeria from './images/valeria.JPG'
import giuliana from './images/giuliana.JPG'





const Psicologos = () => {
  return (
    <section className="psicologos-section" id="psicologos">
      <h2 className="title">Conheça Nossos Profissionais!</h2>
     
     
      <div className="profissionais-container">
        <div className="profissional-card">
          <img src={ana} alt="Ana" className="profissional-foto" />
          <h3 className="profissional-nome">Ana Carolina Carvalho
          </h3>
          <h4>Atendimento Materno Infantil
          </h4>
          <p className="profissional-descricao">
          Formada em Psicologia pela UNIP, está em constante aperfeiçoamento, cursando especializações em Terapia Cognitiva Comportamental pela PUC-RS e Saúde Mental Perinatal. Sua prática é voltada para o cuidado integral de mães, crianças e famílias, com foco na promoção de saúde mental e emocional nesse período tão importante.

No Espaço do Ser, atua na área de Atendimento Materno Infantil, oferecendo suporte qualificado e acolhedor para questões relacionadas à maternidade, desenvolvimento infantil e vínculo familiar, sempre com base em uma abordagem sensível e científica.
          </p>
        </div>




        <div className="profissional-card">
          <img src={junior} alt="Vander Junior" className="profissional-foto" />
          <h3 className="profissional-nome">Vander J. S. Junior
          </h3>
            <h4> Psicanalista, Supervisor e Professor
            </h4>
          <p className="profissional-descricao">
          Com graduação em Letras e formação posterior em Psicanálise, possui ampla experiência na prática clínica, supervisão e ensino. Sua atuação se destaca pelo comprometimento com o desenvolvimento pessoal e profissional, promovendo reflexões profundas.
          No Espaço do Ser, atua como psicanalista, supervisor e professor, oferecendo atendimentos, supervisões e contribuições teóricas que enriquecem o trabalho de outros profissionais da área.
          </p>
        </div>




        <div className="profissional-card">
          <img src={valeria} alt="Valeria" className="profissional-foto" />
          <h3 className="profissional-nome">Valéria Carraro
          </h3>
          <h4>Psicanalista</h4>
          <p className="profissional-descricao">
          Com formação em Letras - Português e Espanhol e título de Mestre em Educação, Valéria Carraro traz uma rica bagagem acadêmica e humanística para sua prática psicanalítica. 
          No Espaço do Ser, Valéria atua como psicanalista, oferecendo um ambiente acolhedor e ético para aqueles que buscam enfrentar os desafios emocionais e psíquicos do cotidiano.
          </p>
        </div>




        <div className="profissional-card">
          <img src={giuliana} alt="Giuliana" className="profissional-foto" />
          <h3 className="profissional-nome">Giuliana Lopes Ferriello Mergulhão
          </h3>
          <h4>Psicanalista | Fundadora do Espaço do Ser
          </h4>
          <p className="profissional-descricao">
          Formada em Psicologia, combina sua expertise na área com a prática psicanalítica. Como fundadora do Espaço do Ser, desempenha um papel central na criação de um ambiente dedicado ao acolhimento e à reflexão, promovendo o cuidado com a saúde psíquica.

Sua atuação como psicanalista reflete um compromisso com a escuta qualificada e o aprofundamento das questões humanas, proporcionando um espaço seguro.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Psicologos;
