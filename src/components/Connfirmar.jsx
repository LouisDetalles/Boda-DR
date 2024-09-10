import React, { useState, useEffect } from 'react';

//imagenes Recurso 23@2x Movil
import Esperamos from "images/INVITACION-7desktop.png";
import EsperamosMovil from "images/INVITACION-7movil.png";
import LogoMain from "images/INVITACIONLOGO-LD.png";

// Estilos
import './Connfirmar.css';

function Connfirmar() {

  return (
    <div >
          <div className='header-container-Confirmar-two' style={{backgroundColor:"#eff9e8", color:"White", }} >
                <img
                  className='Esperamos-img'
                  alt='Fecha'
                  src={ Esperamos }
                />

                <img
                  className='Esperamos-img-Movil'
                  alt='Fecha'
                  src={ EsperamosMovil }
                />
                
          </div>  

          <div className='title-Dress-Code'> Dress Code: Atuendos en colores claros. </div>

          <div className='header-container-Confirmar' >

                <div className='container-btn-confirmar'>
                        <a href='https://wa.link/u1qfkh' style={{textDecoration:'none'}}>
                            <button className='btn-outline text-ubicacion'
                                >Confirmar
                            </button>
                        </a>
                </div>
                                
                  <div className='header-container-Confirmar-find' >
                    <img
                            className='LogoMain-img'
                            alt='LogoMain'
                            src={ LogoMain }
                          />
                  </div>
          </div>

    </div>

  );
}

export default Connfirmar;
