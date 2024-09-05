import React, { useState, useEffect } from 'react';

// Estilos
import './Countdown.css';

function Countdown() {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 22); // Añadir 25 días a la fecha actual

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='header-container-Conutdown'>
      <h1 className='title-Conutdown'>Contemos juntos para  el día de la celebración <br /> </h1>
      <div className='flex-container-main-Conutdown'>
        {timeLeft.days !== undefined ? (
          <>
            <div className='time-block'>
              <span className='time-value'>{timeLeft.days} 
                <span className='time-label-point'>:</span>
              </span>
              <span className='time-label'>DÍAS</span>
            </div>
            <div className='time-block'>
              <span className='time-value'>{timeLeft.hours}
                <span className='time-label-point'>:</span>
              </span>
              <span className='time-label'>HORAS</span>
            </div>
            <div className='time-block'>
              <span className='time-value'>{timeLeft.minutes}
                <span className='time-label-point'>:</span>
              </span>
              <span className='time-label'>MINUTOS</span>
            </div>
            <div className='time-block'>
              <span className='time-value'>{timeLeft.seconds} </span>
              <span className='time-label'>SEGUNDOS</span>
            </div>
          </>
        ) : (
          <span>Time's up!</span>
        )}
      </div>

      <h1 className='Sub-title-Conutdown'>  </h1>
    </div>
  );
}

export default Countdown;
