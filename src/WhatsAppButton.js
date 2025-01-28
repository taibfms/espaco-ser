import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from './images/whatsapp-icon.png'; // Caminho para o ícone do WhatsApp

const WhatsAppButton = () => {
 

  return (
    <a
      href="https://api.whatsapp.com/send?phone=5511914262013&text=Ol%C3%A1,%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!" 
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
