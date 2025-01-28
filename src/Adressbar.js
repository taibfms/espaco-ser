import React from "react";
import './Adressbar.css';
import localizacao from './images/localizacao.png'

const Adressbar = () => {
    return (
        <div className='adress-bar'>
            <img src={localizacao} alt="endereço" className="ico-adress" />
            <p>Rua Cristiano Viana, 1182 - Cerqueira César 05411-002</p>
        </div>
    );
};

export default Adressbar;
