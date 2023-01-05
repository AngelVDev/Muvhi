import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.svg';

import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <img
          id="logoHenry"
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="muvhiLogo"
        />
      </div>
      <nav>
        <ul className="list">
          <li className="list-item">
            <NavLink exact to="/">
              Home
            </NavLink>
            <NavLink to="/favs">Favoritas</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
