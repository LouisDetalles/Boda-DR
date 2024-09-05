import React from 'react';

import './Vestimenta.css';

//imagenes
import VestimentaImg from "images/INVITACION-5movil.png"

const Vestimenta = () => {

  
  return ( 
    <div>
  <>  
    <div className='header-container-FechaLugar-vestimenta'>
              <figure>
                <img
                  className='img-vestimenta'
                  alt='VestimentaImg'
                  src={ VestimentaImg }
                />
              </figure>   
    </div>  
  </>


    </div>
  )
}

export default Vestimenta;