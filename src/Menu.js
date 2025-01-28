import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Menu.css';
import logo from './images/logo.png'; // Importe a logo
import menuico from './images/menuico.png'; // Importe o ícone do menu

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do menu em telas menores
  const location = useLocation(); // Hook para detectar mudanças na URL
  const menuRef = useRef(null); // Referência para o menu
  const logoRef = useRef(null); // Referência para a logo

  const toggleMenu = () => setIsOpen(!isOpen); // Alterna o estado do menu

  // Função para scroll suave para uma seção específica
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50; // Ajuste do offset para compensar headers fixos ou outros elementos
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: sectionPosition, behavior: 'smooth' });
    }
  };

  // UseEffect para rolar para a seção após a navegação
  useEffect(() => {
    if (location.hash) {
      scrollToSection(location.hash.slice(1)); // Remove o '#' e chama a rolagem suave
    }
  }, [location]);

  // Fechar o menu ao clicar fora dele ou na logo
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Se o clique for fora do menu e da logo, fecha o menu
      if (menuRef.current && !menuRef.current.contains(event.target) && !logoRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    // Limpa o evento quando o componente for desmontado
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <nav className="menu" ref={menuRef}>
      <div className="logo" ref={logoRef} onClick={() => setIsOpen(false)}>
        <img src={logo} alt="Logo" className="logo-img" />
      </div>
      <div className={`toggle-menu`} onClick={toggleMenu}>
        <img src={menuico} alt="Menu Icon" className="menu-icon" />
      </div>
      <div className={`menu-items ${isOpen ? 'active' : ''}`}>
        <ul>
          {[
            { label: 'Home', link: '/#MainPage' },
            { label: 'Quem Somos', link: '/#sobrenos' },
            { label: 'Nossos Serviços', link: '/#ImageHoverEffect' },
            { label: 'O Espaço', link: '/#espaco' },
            { label: 'Profissionais', link: '/#profissionais' },
            { label: 'Aluguel de Salas', link: '/#aluguel' },
            { label: 'Contato', link: '/#Contact' },
          ].map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <Link to={item.link} onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              </li>
              {index !== 6 && <div className="divider-vertical"></div>} {/* Evita divider após o último item */}
            </React.Fragment>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
