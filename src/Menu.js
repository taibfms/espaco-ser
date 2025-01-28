import React, { useState } from 'react';
import './Menu.css';
import menuico from './images/menuico.png'
import { Link } from 'react-router-dom';



const Menu = () => {
    const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura do menu em telas menores

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Alterna o estado do menu
    };

    return (
        <nav className="menu">
            <div className="logo">
                {/* Adicione sua logo aqui */}
            </div>
            <div className="toggle-menu" onClick={toggleMenu}>
                <img src={menuico} alt="Menu Icon" className="menu-icon" /> {/* Substitua 'icon.png' pelo caminho do seu ícone */}
            </div>
            <div className={`menu-items ${isOpen ? 'active' : ''}`}>
                <ul>
                    <Link to="./">
                    <li><a href="#MainPage">Home</a></li></Link>
                    <div className='divider-vertical'></div>
                    <li><a href="#sobrenos">Quem Somos</a></li>
                    <div className='divider-vertical'></div>
                    <li><a href="#ImageHoverEffect">Nossos Serviços</a></li>
                    <div className='divider-vertical'></div>
                    <li><a href="#espaco">Espaço</a></li>
                    <div className='divider-vertical'></div>
                    <Link to="./Psicologos">
                    <li><a href="#profissionais">Profissionais</a></li>
                    </Link>
                    <div className='divider-vertical'></div>
                    <li><a href="#aluguel">Aluguel de Salas</a></li>
                    <div className='divider-vertical'></div>
                    <li><a href="#Contact">Contato</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Menu;
