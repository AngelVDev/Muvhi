import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.svg';

import './Navbar.css';

export default function NavBar() {
  return (
    <header className="navbar">
      <div>
        <Link to={'/'}>
          <img
            id="logoHenry"
            src={Logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="muvhiLogo"
          />
        </Link>
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
