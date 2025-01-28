import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id='Contact'>
      <div className="contact-container">
        <div className="contact-form">
          <h2 id='title'>Entre em Contato</h2>
          <form action="https://formspree.io/f/mgvekvnw" method="POST">
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-mail:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefone:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Deixe sua mensagem:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="captcha">
              <button type="submit">Enviar</button>
            </div>
          </form>
        </div>
        <div className="contact-map">
          <h2 id='title'>Endereço</h2>
          <div className="map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4214406125693!2d-46.68375482376718!3d-23.553302761297847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5790392e98d9%3A0x12f005398c1786d!2sR.%20Cristiano%20Viana%2C%201182%20-%20Cerqueira%20C%C3%A9sar%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005411-002!5e0!3m2!1spt-BR!2sbr!4v1729544239765!5m2!1spt-BR!2sbr"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              style={{ border: '0' }}
            ></iframe>
            <p>Rua Cristiano Viana, 1182 - Cerqueira César 05411-002</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
