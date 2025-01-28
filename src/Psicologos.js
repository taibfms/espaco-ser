import React, { useEffect } from "react";
import "./Psicologos.css";
import ana from "./images/ana.JPG";
import junior from "./images/junior.JPG";
import valeria from "./images/valeria.JPG";
import giuliana from "./images/giuliana.JPG";
import leandro from "./images/leandro.JPG";
import juliana from "./images/juliana.JPG";
import gianna from "./images/gianna.JPG";

const Psicologos = () => {
  useEffect(() => {
    const hash = window.location.hash; // Captura o hash atual na URL
    if (hash === "#psicologos") {
      const section = document.getElementById("psicologos");
      if (section) {
        const topPosition = section.offsetTop - 100; // Ajusta para centralizar
        window.scrollTo({
          top: topPosition,
          behavior: "smooth",
        });
      }
    }
  }, []); // Só executa ao carregar o componente

  return (
    <section className="psicologos-section" id="psicologos">
      <h2 className="title">Conheça Nossos Profissionais!</h2>
      <div className="profissionais-container">
        <div className="profissional-card">
          <img src={ana} alt="Ana" className="profissional-foto" />
          <h3 className="profissional-nome">Ana Carolina Carvalho</h3>
          <p><h4>Atendimento Materno Infantil</h4>

Formada em Psicologia pela UNIP, está em constante aperfeiçoamento, cursando especializações em Terapia Cognitiva Comportamental pela PUC-RS e Saúde Mental Perinatal. Sua prática é voltada para o cuidado integral de mães, crianças e famílias, com foco na promoção de saúde mental e emocional nesse período tão importante.

No Espaço d'(O) SER, atua na área de Atendimento Materno Infantil, oferecendo suporte qualificado e acolhedor para questões relacionadas à maternidade, desenvolvimento infantil e vínculo familiar, sempre com base em uma abordagem sensível e científica.</p>
        </div>
        <div className="profissional-card">
          <img src={junior} alt="Vander Junior" className="profissional-foto" />
          <h3 className="profissional-nome">Vander J. S. Junior</h3>
          <p>
          <h4>Psicanalista, Supervisor e Professor</h4>

Com graduação em Letras e formação posterior em Psicanálise, possui ampla experiência na prática clínica, supervisão e ensino. Sua atuação se destaca pelo comprometimento com o desenvolvimento pessoal e profissional, promovendo reflexões profundas.
No Espaço d'(O) SER, atua como psicanalista, supervisor e professor, oferecendo atendimentos, supervisões e contribuições teóricas que enriquecem o trabalho de outros profissionais da área.  
          </p>
        </div>
        <div className="profissional-card">
          <img src={valeria} alt="Valeria" className="profissional-foto" />
          <h3 className="profissional-nome">Valéria Carraro</h3>
          <p> <h4>Psicanalista</h4>

Com formação em Letras - Português e Espanhol e título de Mestre em Educação, Valéria Carraro traz uma rica bagagem acadêmica e humanística para sua prática psicanalítica. 
No Espaço d'(O) SER, Valéria atua como psicanalista, oferecendo um ambiente acolhedor e ético para aqueles que buscam enfrentar os desafios emocionais e psíquicos do cotidiano.</p>
        </div>
        <div className="profissional-card">
          <img src={giuliana} alt="Giuliana" className="profissional-foto" />
          <h3 className="profissional-nome">
            Giuliana Lopes Ferriello Mergulhão
          </h3>
          <p><h4>Psicanalista | Fundadora do Espaço d'(O) SER</h4>

Formada em Psicologia, combina sua expertise na área com a prática psicanalítica. Como fundadora do Espaço d'(O) SER, desempenha um papel central na criação de um ambiente dedicado ao acolhimento e à reflexão, promovendo o cuidado com a saúde psíquica.

Sua atuação como psicanalista reflete um compromisso com a escuta qualificada e o aprofundamento das questões humanas, proporcionando um espaço seguro.</p>
        </div>

        <div className="profissional-card">
          <img src={leandro} alt="Leandro" className="profissional-foto" />
          <h3 className="profissional-nome">
            Leandro de Souza Mota
          </h3>
          <p><h4>Psicanalista</h4>
          Formado em Psicanálise Clínica e em Processos Gerenciais,  Leandro está no último ano de Psicologia. Atualmente, está cursando Psicanálise no Instituto Escut’arte, aprofundando continuamente seus conhecimentos na área.

Sua trajetória alia expertise em gestão e psicanálise, proporcionando uma escuta integrativa e reflexiva frente aos desafios contemporâneos. Com foco no desenvolvimento humano e com experiência em grandes empresas, Leandro aplica sua sensibilidade e vivência profissional para auxiliar na promoção de transformações significativas nas questões atuais que envolvem o sujeito.
        </p>
        </div>

        <div className="profissional-card">
          <img src={gianna} alt="Gianna" className="profissional-foto" />
          <h3 className="profissional-nome">
          Gianna Lopes Ferriello
          </h3>
          <p><h4>Psicoterapeuta Ambulatorial</h4>
          Psicóloga com 18 anos de formação e mais de uma década de experiência clínica. Com especialização  em Psicoterapia Ambulatorial com abordagem psicanalítica pela Unifesp, também possui capacitação em Gestão de Qualidade de Vida no Trabalho pela FIA. Atualmente cursa Psicopedagogia no SENAC e Certificação para Educador Parental em diálogo com a psicanálise no Instituto Maternittà. Participa de grupos de estudos e cartéis pela SPO e seminários no Espe sobre fundamentos da psicanálise. Com mais de 15 anos de atuação em Saúde Ocupacional, dedicou-se à gestão e prevenção no ambiente corporativo.
        </p>
        </div>

        <div className="profissional-card">
          <img src={juliana} alt="Juliana" className="profissional-foto" />
          <h3 className="profissional-nome">
          Juliana F. Simões Bdayoui

          </h3>
          <p><h4>Psicoterapeuta Breve Psicanalítica</h4>
          Juliana é graduada e mestre em Psicologia pela PUC-SP, com especialização em Psicoterapia Breve Psicanalítica pelo Sedes Sapientiae-SP e em Psicologia Hospitalar e Saúde Mental da Mulher. No Espaço d' (O) SER, dedica-se ao atendimento de crianças, pré-adolescentes, adolescentes e adultos, além de atuar com Psicoterapia Breve de Casal. Com sólida formação acadêmica e vasta experiência clínica, oferece um cuidado sensível e qualificado, focado no acolhimento e no desenvolvimento emocional, sempre adaptado às necessidades específicas de cada paciente e contexto familiar.
        </p>
        </div>

      </div>
    </section>
  );
};

export default Psicologos;
