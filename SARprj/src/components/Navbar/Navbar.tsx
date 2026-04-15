import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-none premium-navbar sticky-top pt-4">
      <div className="container-fluid">
        {/* Logo / Brand */}
        <a className="navbar-brand d-flex flex-column text-black" href="#home">
          <img src="" alt="#" />
        </a>

        {/* Toggle per Mobile */}
         <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarContent"
          aria-controls="navbarContent" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links di navigazione */}
        <div className="collapse navbar-collapse " id="navbarContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">
              <a className="nav-link text-black px-3" href="#studio">Studio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black px-3" href="#servizi">Servizi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black px-3" href="#portfolio">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black px-3" href="#processo">Processo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-black px-3" href="#contatti">Contatti</a>
            </li>
          </ul>

          {/* Sezione Destra: Lingua e Bottone */}
          <div className="d-flex align-items-center">
            <div className="lang-switcher me-4">
              <span className="active">IT</span>
              <span className="mx-1 separator">/</span>
              <span>EN</span>
            </div>
            <a href="#preventivo" className="btn btn-outline-premium text-uppercase">
              Preventivo
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;