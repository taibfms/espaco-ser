import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './Mainpage';
import Psicologos from './Psicologos';
import Adressbar from './Adressbar';
import Footer from './Footer';
import ImageHoverEffect from './ImageHoverEffect';
import Contact from './Contact';
import CallToAction from './CallToAction';
import Menu from './Menu';
import SimpleCarousel from './SimpleCarousel';
import './Routes.css'

function AppRoutes() {
  return (
    <Router>
      <Adressbar />
      <Menu />
      <Routes>
       <MainPage />
        <Route
          path="/"
          element={
            <>
              <SimpleCarousel />
              <CallToAction />
              <ImageHoverEffect />
              <MainPage />
              <Contact />
            </>
          }
        />

        <Psicologos />
        <Route path="/psicologos" element={<Psicologos    />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
