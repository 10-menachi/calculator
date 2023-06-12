import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav">
    <h2>Math Magicians</h2>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <div className="line" />
      <li>
        <Link to="/calculator">Calculator</Link>
      </li>
      <div className="line" />
      <li>
        <Link to="/quote">Quote</Link>
      </li>
    </ul>
  </nav>
);
export default NavBar;
