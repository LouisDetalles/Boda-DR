import React, { useRef } from 'react';
import Navbar from 'components/Navbar';
import Family from 'components/Family';
import FechaLugar from 'components/FechaLugar';
import LugarFin from 'components/LugarFin';
import Countdown from 'components/Countdown';
import FiltroIg from 'components/FiltroIg';
import Connfirmar from 'components/Connfirmar';
import './Home.css';

const Home = () => {
  const familyRef = useRef(null);
  const fechaLugarRef = useRef(null);
  const countdownRef = useRef(null);
  const lugarFinRef = useRef(null);
  const filtroIgRef = useRef(null);
  const confirmarRef = useRef(null);

  const scrollToSection = (ref) => {
    const targetPosition = ref.current.getBoundingClientRect().top + window.scrollY - 100;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duración del desplazamiento en milisegundos
    let startTime = null;
  
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };
  
    const ease = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    };
  
    requestAnimationFrame(animation);

    console.log(ref.current.getBoundingClientRect().top);
  };


  return ( 
    <div style={{ backgroundColor: "#eff9e8" }}>
      {/* Menú de Opciones */}
      <Navbar 
        scrollToSection={scrollToSection} 
        refs={{ 
          familyRef, 
          fechaLugarRef, 
          countdownRef, 
          lugarFinRef, 
          filtroIgRef, 
          confirmarRef 
        }} 
      />

      <div className='header-container'></div>  

      <div ref={familyRef}>
        <Family /> {/* La familia Peralta te invita a la celebración */}
      </div>
      <div ref={fechaLugarRef}>
        <FechaLugar /> {/* Fecha y Lugar Detallado */}
      </div>
      <div ref={countdownRef}>
        <Countdown />  {/* Conteo Regresivo */}
      </div>
      <div ref={lugarFinRef}>
        <LugarFin />   {/* Ubicación del Club */}
      </div>
      <div ref={filtroIgRef}>
        <FiltroIg />   {/* Filtro Ig */}
      </div>
      <div ref={confirmarRef}>
        <Connfirmar/>  {/* Confirmar */}
      </div>
    </div>
  );
}

export default Home;
