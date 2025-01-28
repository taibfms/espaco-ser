import React, { useState, useEffect } from 'react';
import './ImageHoverEffect.css';
import image1 from './images/image1.JPG';
import image2 from './images/image2.jpg';
import image3 from './images/image3.png';

const ImageHoverEffect = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const handleImageClick = (index) => {
    setActiveImage(activeImage === index ? null : index);
  };

  const handleMouseEnter = (index) => {
    if (!isMobile) {
      setActiveImage(index);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setActiveImage(null);
    }
  };

  useEffect(() => {
    const updateMedia = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    updateMedia();
    window.addEventListener('resize', updateMedia);

    return () => window.removeEventListener('resize', updateMedia);
  }, []);

  const images = [image1, image2, image3];

  return (
    <div id="ImageHoverEffect">
      <h2 className="section-title">Nossos Serviços</h2>

      <div className="image-container">
        {[
          {
            title: 'Psicoterapia Infantil, Pré e Adolescente',
            description:
              'Foco no bem-estar emocional e social de crianças, oferecendo suporte em desenvolvimento, comunicação e comportamento.',
            whatsappLink:
              'https://wa.me/5511914262013?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20a%20psicoterapia%20para%20crianças,%20pré-adolescentes%20e%20adolescentes.%20Poderiam%20me%20enviar%20mais%20informações,%20por%20favor?',
          },
          {
            title: 'Psicanálise',
            description:
              'A psicanálise baseia-se na escuta atenta e na fala livre, explorando subjetividade e como as experiências ressoam internamente no analisando.',
            whatsappLink:
              'https://wa.me/5511914262013?text=Olá,%20estou%20interessado(a)%20no%20atendimento%20psicanalítico%20oferecido%20por%20vocês.%20Poderiam%20me%20explicar%20como%20funciona%20e%20como%20agendar?',
          },
          {
            title: 'Cursos',
            description:
              'O Espaço do Ser em parceria com o Instituto Escutarte, oferece formação psicanalítica focada em Freud, Lacan, prática clínica e aprendizagem contínua.',
            whatsappLink:
              'https://wa.me/5511914262013?text=Olá,%20quero%20saber%20mais%20detalhes%20sobre%20o%20curso%20de%20formação%20em%20psicanálise.%20Como%20funciona?%20Poderiam%20me%20enviar%20as%20informações?',
          },
        ].map((content, index) => (
          <div
            className="image-wrapper"
            key={index}
            onClick={() => handleImageClick(index)} // Lógica de clique
            onMouseEnter={() => handleMouseEnter(index)} // Lógica de hover
            onMouseLeave={handleMouseLeave} // Lógica de hover
          >
            <img src={images[index]} alt={`Imagem ${index + 1}`} />
            {(isMobile ? activeImage === index : activeImage === index) && (
              <div className="image-text">
                <h3>{content.title}</h3>
                <p>{content.description}</p>
                <a href={content.whatsappLink} target="_blank" rel="noopener noreferrer">
                  Saiba Mais
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageHoverEffect;
