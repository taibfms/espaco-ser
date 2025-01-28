import React, { useState } from "react";
import "./EspacoModal.css";
import foto1 from "./images/modal1.JPG";
import foto2 from "./images/modal2.jpg";
import foto3 from "./images/modal3.jpg";
import foto4 from "./images/modal4.jpg";
import foto5 from "./images/modal5.jpg";
import foto6 from "./images/modal6.jpg";
import foto7 from './images/modal7.jpg';
import foto8 from './images/modal8.jpg';
import foto9 from './images/modal9.jpg';
import foto10 from './images/modal10.jpg';

const EspacoModal = ({ closeModal }) => {
  const images = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10]; // Lista de imagens
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar a imagem atual

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Vai para a próxima imagem
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleOverlayClick = () => {
    closeModal(); // Fecha o modal ao clicar na sobreposição
  };

  const stopPropagation = (e) => {
    e.stopPropagation(); // Impede que cliques no conteúdo fechem o modal
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content" onClick={stopPropagation}>
        <button className="close-button" onClick={closeModal}>
          &times;
        </button>
        <button className="previous-button" onClick={handlePrevious}>
        &lt;
        </button>
        <img
          src={images[currentIndex]}
          alt={`Foto ${currentIndex + 1}`}
          className="modal-image"
        />
        <button className="next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </div>
  );
};

export default EspacoModal;
