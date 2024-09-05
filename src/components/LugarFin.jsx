import React from 'react';

//Componentes 
import Vestimenta from 'components/Vestimenta';
//imagenes
import tantra from 'images/PARROQUIA-NTRA-SENORA-DEL-VALLE.jpg';

//Estilos y diseño
import './LugarFin.css'


const LugarFin = () => {


  return (
    <>
      <div className='body-container'>

        {/* ----------- Desktop ----------------*/}
        <div className='us-container' >

            {/* Info */}
            <div className='us-wrap-Info'
            >

                  <h1 className='title-Lugar'> 
                  Lugar: Parroquia Nuestra Señora del Valle
                  </h1>
                  <div className='sub-title-Lugar'> Calle 50 entre Av. Pedro León Torres y carrera 21. </div>
                  
                  
                <div className='us-text'>
                    <a href='https://maps.app.goo.gl/RjN1WVc2YHks6VyR8' className=''>
                      <button className='btn-outline-one text-ubicacion main-green'
                          >Ver Ubicación
                      </button>
                    </a>
                </div>
            </div>

            {/* Imagen Principal */}
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-once="true" 
              data-aos-duration="800"
            >
              <a className='us-wrap' >
                  <img
                    className='us-img'
                    alt='tantra'
                    src={ tantra }
                  />
              </a>

            </div>
        </div>

        <Vestimenta/>
        
      </div>
    </>
  )
}

export default LugarFin;

