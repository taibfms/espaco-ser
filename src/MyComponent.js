import React from "react";
import { ReactComponent as Logo } from './images/logo.svg';  // Importando o SVG

const MyComponent = () => {
  return (
    <div>
      <Logo width="100" height="100" />  {/* Usando o SVG como um componente */}
    </div>
  );
};

export default MyComponent;
