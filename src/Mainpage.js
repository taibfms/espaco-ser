
import React, { useState } from 'react';
import './MainPage.css';
import sobrenos from './images/sobrenos.png'
import profissionais from './images/profissionais.JPG'
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




  
  return (
    <div className="profile-section" id='sobrenos'>

      <div className="divider-horizontal"></div>


      <img src={sobrenos} alt="Descrição da Imagem" className="img-sobrenos" />
      <div className="profile-card">
        <div className="profile-content">
          <h3 id='title'>Sobre Nós</h3>
          <p>
            O Espaço d'(O) SER surgiu com o objetivo de promover encontros e fortalecer conexões humanas. Oferecemos salas acolhedoras para atendimentos de Psicanálise e Psicologia, com foco em parcerias que ampliam nossas atividades, como a colaboração com o Instituto Escutarte, responsável por uma formação contínua em Psicanálise.
            Nossa clínica psicanalítica conta com profissionais especializados no atendimento de adultos, enquanto a Psicologia Infantil vem ganhando destaque devido à crescente demanda. Em parceria com escolas, atendemos crianças, pré-adolescentes, adolescentes e oferecemos suporte a famílias e equipes pedagógicas, promovendo um cuidado completo e integrado.
          </p>
         
        </div>
      </div>


      <div className="divider-horizontal"></div>


      <img src={profissionais} alt="Descrição da Imagem" className="img-profissionais" />

      <div className="profile-card" id='profissionais'>
        <div className="profile-content">
          <h3 id='title'>Profissionais</h3>
          <p>
            As profissionais de psicologia desempenham um papel fundamental no cuidado da saúde mental e emocional dos indivíduos. Com uma formação sólida, elas são capacitadas a compreender o comportamento humano e a oferecer suporte em momentos de crise, estresse ou transição. Essas profissionais utilizam uma variedade de abordagens terapêuticas, adaptando suas técnicas às necessidades específicas de cada paciente. Além disso, elas promovem a conscientização sobre a importância da saúde mental na sociedade, ajudando a desestigmatizar questões psicológicas. Com empatia e escuta ativa, as psicólogas criam um espaço seguro para que os indivíduos possam explorar suas emoções e desafios. Seu trabalho é essencial para promover o bem-estar e o autoconhecimento, contribuindo para uma vida mais equilibrada e saudável.
          </p>
          <Link to="./Psicologos">
          <button className="profile-button">Saiba mais</button>
          
    </Link>
        </div>
      </div>




      <div className="divider-horizontal"></div>

      <img src={aluguel} alt="Descrição da Imagem" className="img-aluguel" />

      <div className="profile-card" id='aluguel'>

        <div className="profile-content">
          <h3 id='title'>Aluguel de Salas</h3>
          <p>
          Nossas salas de atendimento são ideais para profissionais de Psicologia, Psicanálise e áreas relacionadas ao desenvolvimento pessoal e à exploração do ser. Com opções para atendimentos presenciais e online, os espaços são acolhedores, bem equipados e prontos para proporcionar uma experiência de conforto e privacidade tanto para o profissional quanto para os pacientes. A locação pode ser feita de forma flexível, por hora ou por período, permitindo que cada profissional organize sua agenda de acordo com a demanda de atendimentos, garantindo qualidade e tranquilidade no ambiente de trabalho.Nossas salas de atendimento são ideais para profissionais de Psicologia, Psicanálise e áreas relacionadas ao desenvolvimento pessoal e à exploração do ser. Com opções para atendimentos presenciais e online, os espaços são acolhedores, bem equipados e prontos para proporcionar uma experiência de conforto e privacidade tanto para o profissional quanto para os pacientes. A locação pode ser feita de forma flexível, por hora ou por período, permitindo que cada profissional organize sua agenda de acordo com a demanda de atendimentos, garantindo qualidade e tranquilidade no ambiente de trabalho.
          </p>

          <a 
  href="https://wa.me/5511914262013?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20aluguel%20de%20salas%20no%20Espaço%20d%27(O)%20SER.%20Poderiam%20me%20enviar%20as%20informações,%20por%20favor?"
  className="profile-button" 
  id="wpp"
>
  Saiba Mais
</a>

        
      
        </div>
      </div>

      <div className="divider-horizontal"></div>





      <img src={espaco} alt="Descrição da Imagem" className="img-espaco" />
      <div className="profile-card" id='espaco'>
        <div className="profile-content">
          <h3 id='title'>O Espaço</h3>
          <p>
          Nosso espaço conta com uma equipe de profissionais altamente qualificados, incluindo psicanalistas, psicólogos infantis e especialistas em avaliação neuropsicológica. Cada um desses profissionais é capacitado para oferecer um atendimento personalizado, atendendo às necessidades de diferentes faixas etárias e demandas específicas. Com foco no bem-estar e desenvolvimento do paciente, nossos profissionais proporcionam um acompanhamento especializado, sempre com respeito e comprometimento, garantindo um atendimento de excelência em diversas áreas da saúde mental e emocional.
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
