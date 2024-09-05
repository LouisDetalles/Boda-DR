// Navbar.js
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = ({ scrollToSection, refs  }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);


  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          {click ? (
            <IoCloseOutline style={{ color: "rgba(163, 131, 80)" }} />
          ) : (
            <IoMenuOutline style={{ color: "rgba(163, 131, 80)" }} />
          )}
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <NavLink
              exact
              to="/"
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.familyRef);
                closeMobileMenu();
              }}
            >
              Inicio
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#"
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.fechaLugarRef);
                closeMobileMenu();
              }}
            >
              Fecha
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to='#'
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.lugarFinRef);
                closeMobileMenu();
              }}
            >
              Lugar
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              to="#"
              className='nav-links-two'
              activeClassName='nav-links_active'
              onClick={() => {
                scrollToSection(refs.confirmarRef);
                closeMobileMenu();
              }}
            >
              Confirmar
            </NavLink>   
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
