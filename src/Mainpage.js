
import React, { useState } from 'react';
import './MainPage.css';
import sobrenos from './images/sobrenos.png'
import profissionais from './images/profissionais.PNG'
import aluguel from './images/aluguel.jpg'
import espaco from './images/espaco.png'
import { Link } from 'react-router-dom';
import EspacoModal from './EspacoModal';


const MainPage = () => {

  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  const handleSaibaMaisClick = () => {
    setShowModal(true); // Exibe o modal
  };

  const closeModal = () => {
    setShowModal(false); // Fecha o modal
  };

  // Função para detectar o clique fora do modal e fechar
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal(); // Fecha o modal se o clique for fora do conteúdo do modal
    }
  };


  const catalogo = "https://www.canva.com/design/DAGZrKL84rc/0uokFa9nYY9ZTY2JN3y0Uw/view?utm_content=DAGZrKL84rc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hd4b6ae4ddd"
  
  

  return (
    <div className="profile-section" id='sobrenos'>

      <div className="divider-horizontal"></div>


      <img src={sobrenos} alt="Descrição da Imagem" className="img-sobrenos" />
      <div className="profile-card">
        <div className="profile-content">
          <h3 id='title'>Quem Somos</h3>
          <p>
            O Espaço d'(O) SER surgiu com o objetivo de promover encontros e fortalecer conexões humanas. Oferecemos salas acolhedoras para atendimentos de Psicanálise e Psicologia, com foco em parcerias que ampliam nossas atividades, como a colaboração com o Instituto Escutarte, responsável por uma formação contínua em Psicanálise.
            Nossa clínica psicanalítica conta com profissionais especializados no atendimento de adultos, enquanto a Psicologia Infantil vem ganhando destaque devido à crescente demanda. Em parceria com escolas, atendemos crianças, pré-adolescentes, adolescentes e oferecemos suporte a famílias e equipes pedagógicas, promovendo um cuidado completo e integrado.
          </p>

        </div>
      </div>


      <div className="divider-horizontal"></div>


      <img src={profissionais} alt="Descrição da Imagem" className="img-profissionais" />

      <div className="profileprof-card" id='profissionais'>
        <div className="profile-content">
          <h3 id='title'>Profissionais</h3>
          <p>
          Os profissionais desempenham um papel fundamental no cuidado da saúde psíquica e emocional dos indivíduos. Com uma formação sólida, eles são capacitados a compreender o sofrimento humano e a oferecer suporte, através da escuta, em momentos de conflitos psíquicos ou transição. A equipe utiliza abordagens da Psicologia, mas também a Psicanálise tem a sua força no Espaço d’(O) SER, e em todas as abordagens O Espaço visa utilizar as técnicas de acordo com a necessidade de cada indivíduo.
Os atendimentos são realizados tanto no formato presencial quanto online, garantindo um ambiente seguro e acolhedor.
Além disso, promove-se o acesso aos sentimentos, pensamentos e emoções, possibilitando a conscientização sobre a importância da saúde psíquica na sociedade e ajudando a desestigmatizar questões psicológicas. Com empatia e escuta ativa, os profissionais criam um espaço de acolhimento para que os indivíduos possam explorar suas emoções e desafios. Seu trabalho é essencial para promover o bem-estar e o autoconhecimento, contribuindo para uma vida mais equilibrada e saudável.
          </p>

          <Link to="./Psicologos#psicologos">
            <button className="profile-button" id='wpp'>Saiba Mais</button>

          </Link>
          <a
            href="https://wa.me/5511914262013?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta%20com%20um%20de%20seus%20profissionais."
            target='_blank'
            className='wpp-1'
            rel="noopener noreferrer"

          >
            Agendamentos
          </a>

        </div>
      </div>




      <div className="divider-horizontal"></div>

      <img src={aluguel} alt="Descrição da Imagem" className="img-aluguel" />

      <div className="profile-card" id='aluguel'>

        <div className="profile-content">
          <h3 id='title'>Aluguel de Salas</h3>
          <p className='aluguel-text'>
            Nossas salas de atendimento são ideais para profissionais de Psicologia, Psicanálise e áreas relacionadas ao desenvolvimento pessoal e à exploração do ser. Com opções para atendimentos presenciais e online, os espaços são acolhedores, bem equipados e prontos para proporcionar uma experiência de conforto e privacidade tanto para o profissional quanto para os pacientes. A locação pode ser feita de forma flexível, por hora ou por período, permitindo que cada profissional organize sua agenda de acordo com a demanda de atendimentos, garantindo qualidade e tranquilidade no ambiente de trabalho.


          </p>
          <br />
          <a
            href={catalogo}
            target='_blank'
            className="wpp"

          >
            Catálogo
          </a>

          <a
            href="https://wa.me/5511914262013?text=Oi,%20gostaria%20de%20saber%20mais%20sobre%20o%20aluguel%20de%20salas."
            target='_blank'
            className="wpp"
            rel="noopener noreferrer"
          >
            Contato
          </a>



        </div>
      </div>

      <div className="divider-horizontal"></div>





      <img src={espaco} alt="Descrição da Imagem" className="img-espaco" />
      <div className="profile-card" id='espaco'>
        <div className="profile-content">
          <h3 id='title' className='title-espaco'>O Espaço</h3>
          <p>
            Nosso espaço conta com uma equipe de profissionais altamente qualificados, incluindo psicanalistas e psicólogos infantis. Cada um desses profissionais é capacitado para oferecer um atendimento personalizado, atendendo às necessidades de diferentes faixas etárias e demandas específicas. Com foco no bem-estar e desenvolvimento do paciente, nossos profissionais proporcionam um acompanhamento especializado, sempre com respeito e comprometimento, garantindo um atendimento de excelência em diversas áreas da saúde psíquica e emocional.
          </p>
          <button className="profile-button" onClick={handleSaibaMaisClick}>Fotos</button>
        </div>
      </div>
      {showModal && <EspacoModal closeModal={closeModal} />}
      <div className="divider-horizontal"></div>
    </div>
  );
};

export default MainPage;
