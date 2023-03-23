import React from "react";
import { Link } from "react-router-dom";
import { Scrollchor } from "react-scrollchor";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

const Header = (props) => {

  const toggleMenu=()=>{
    const menu=document.getElementById("MobileMenu")
    console.log(menu.style);
    if(menu.style.display==="block") menu.style.display="none"
    else menu.style.display="block"
  }


  return (
    <div data-role="Header" className="header-header">
      <nav className="header-nav">
        <div className="header-container">
          <Link to="/" className="header-navlink">
            <span id="dysamDesk">Dysam Soft</span>
            <br></br>
          </Link>
          <div className="header-menu">
            <Scrollchor to="#home" className="header-link1">
              Inicio
            </Scrollchor>
            <Scrollchor to="#services" className="header-link2">
              Servicios
            </Scrollchor>
            <Scrollchor to="#process" className="header-link2">
              Proceso
            </Scrollchor>
            <Scrollchor to="#projects" className="header-link2">
              Proyectos
            </Scrollchor>
            <Scrollchor to="#contact" className="header-link4">
              Contactanos
            </Scrollchor>
          </div>
          <button onClick={toggleMenu} className="burguer">
            <GiHamburgerMenu className="burguer"/>
          </button>
        </div>
      </nav>
      <div data-role="MobileMenu" className="header-mobile-menu" id="MobileMenu">
        <div className="header-top">
          <Link to="/" className="header-navlink1 Large" id="dysamMobile">
            Dysam Soft
          </Link>
          <div data-role="CloseMobileMenu" className="header-close-menu" onClick={toggleMenu}>
            <svg viewBox="0 0 1024 1024" className="header-icon">
              <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
            </svg>
          </div>
        </div>
        <div className="header-mid">
          <div className="header-menu1">
            <Scrollchor to="#home" className="header-link1" onClick={toggleMenu}>
              Inicio
            </Scrollchor>
            <Scrollchor to="#services" className="header-link1" onClick={toggleMenu}>
              Servicios
            </Scrollchor>
            <Scrollchor to="#process" className="header-link1" onClick={toggleMenu}>
              Proceso
            </Scrollchor>
            <Scrollchor to="#projects" className="header-link1" onClick={toggleMenu}>
              Proyectos
            </Scrollchor>
            <Scrollchor to="#contact" className="header-link1" onClick={toggleMenu}>
              Contactanos
            </Scrollchor>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
