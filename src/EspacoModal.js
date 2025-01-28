import React, { useState } from "react";
import "./EspacoModal.css";
import foto1 from "./images/modal1.jpg";
import foto2 from "./images/modal2.jpg";
import foto3 from "./images/modal3.jpg";
import foto4 from "./images/modal4.jpg";
import foto5 from "./images/modal5.jpg";

const EspacoModal = ({ closeModal }) => {
  const images = [foto1, foto2, foto3, foto4, foto5]; // Lista de imagens
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para controlar a imagem atual

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length); // Vai para a próxima imagem
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
