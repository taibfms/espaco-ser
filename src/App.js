import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from './Mainpage';
import Psicologos from './Psicologos';
import Menu from './Menu';
import Footer from './Footer';
import Adressbar from './Adressbar';
import SimpleCarousel from './SimpleCarousel';
import CallToAction from './CallToAction';
import ImageHoverEffect from './ImageHoverEffect';
import Contact from './Contact';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import WhatsAppButton from './WhatsAppButton';


function App() {
  return (
    <Router>
      <div>
        {/* Componentes que aparecem em todas as páginas */}
        <Adressbar />
        <Menu />
        <SimpleCarousel />
        <CallToAction />
        <ImageHoverEffect />

        {/* Gerenciamento de rotas */}
        <Routes>
          {/* Rota para a página principal */}
          <Route path="/" element={<MainPage />} />

          {/* Rota para a página dos Psicólogos */}
          <Route path="/psicologos" element={<Psicologos />} />
        </Routes>

        {/* Componentes que aparecem em todas as páginas */}
        <Contact />
        <Footer />

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
