import React from 'react';
import './WhatsAppButton.css';
import whatsappIcon from './images/whatsapp-icon.png'; // Caminho para o ícone do WhatsApp

const WhatsAppButton = () => {
  const whatsappNumber = '5511914262013'; // Número do WhatsApp com código do país
  const whatsappMessage = 'Olá, gostaria de mais informações!'; // Mensagem pré-definida

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsappIcon} alt="WhatsApp" className="whatsapp-icon" />
    </a>
  );
};

export default WhatsAppButton;
