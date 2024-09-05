import React from 'react';

import './FechaLugar.css';

//imagenes 
import Fecha from "images/INVITACION-3desktop.png"
/*import Hora from "images/Recurso 17@2x.png"*/

import FechaMovil from "images/INVITACION-3movil.png"
/*import HoraMovil from "images/Recurso 17@2x Movil.png"*/

const FechaLugar = () => {

  
  return ( 
    <div style={{backgroundColor:"#eff9e8", color:"White", }}>
  <>  

  {/* Imagen Principal Desktop*/}
    <div className='header-container-FechaLugar'>
                <img
                  className='fecha-img'
                  alt='Fecha'
                  src={ Fecha }
                />
    </div>  

    {/*
    <div className='header-container-FechaLugar-two'>
              <figure>
                <img
                  className='hora-img'
                  alt='Hora'
                  src={ Hora }
                />
              </figure>   
    </div> 
    */}


    {/* Imagen Principal Movil*/}

    <div className='header-container-FechaLugar-Movil'>
                <img
                  className='fechaMovil-img'
                  alt='Fecha'
                  src={ FechaMovil }
                />
    </div> 

    {/*
    <div className='header-container-FechaLugar-two-Movil'>
                <img
                  className='horaMovil-img'
                  alt='Hora'
                  src={ HoraMovil }
                /> 
    </div>  
    */}
  </>


    </div>
  )
}

export default FechaLugar;