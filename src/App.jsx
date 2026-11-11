import React from 'react';
import Tarjeta from './components/Tarjeta';
import heroImg from './assets/hero.png'; 

function App() {
  return (
    <main className="tarjetas-container">
      <Tarjeta 
        nombre="Lucía Fernández"
        profesion="Diseñadora UI/UX"
        imagen={heroImg}
        descripcion="Especialista en interfaces accesibles y sistemas de diseño multiplataforma."
      />
      <Tarjeta 
        nombre="Mateo Rossi"
        profesion="Desarrollador Full Stack"
        imagen="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"
        descripcion="Apasionado por la arquitectura web, microservicios y bases de datos escalables."
      />
      <Tarjeta 
        nombre="Camila Torres"
        profesion="Ingeniera de Datos"
        imagen="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300"
        descripcion="Enfocada en análisis de grandes volúmenes de datos y modelos de Machine Learning."
      />
    </main>
  );
}
export default App;