import React from 'react';
import './NavBar.css';
import carrito from '../CartWidget/img/carrito.png';
import { NavLink } from 'react-router-dom';

function navbar(props) {
    return (
      <div className="nav-container">
        
          <h1 className="titulo">SOFFIO</h1>
          <ul className="nav">
            <li>
              <NavLink
                to="/category/superheroes"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                SUPERHÉROES
              </NavLink>{" "}
            </li>
            <li>
              <NavLink
                to="/category/villanos"
                className={(nav) => (nav.isActive ? "nav-active" : "")}
              >
                VILLANOS
              </NavLink>{" "}
            </li>
            <li>CONTACTOS</li>
          </ul>
          <img src={carrito} className="img-carrito" />
        
      </div>
    );
}

export default navbar;


