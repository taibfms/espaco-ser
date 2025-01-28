import React from 'react';
import { Carousel } from 'react-bootstrap';
import carrossel1 from './images/carrossel1.png'
import carrossel2 from './images/carrossel2.png'
import carrossel3 from './images/carrossel3.png'
import './SimpleCarousel.css'



const SimpleCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrossel1}
          alt="Primeira Imagem"
        />
   
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrossel2}
          alt="Segunda Imagem"
        />
        
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={carrossel3}
          alt="Terceira Imagem"
        />
       
      </Carousel.Item>
    </Carousel>
  );
};

export default SimpleCarousel;
