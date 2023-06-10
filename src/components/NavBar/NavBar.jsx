import React from 'react';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav">
    <h2>Math Magicians</h2>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <div className="line" />
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <div className="line" />
      <li>
        <a href="/quote">Quote</a>
      </li>
    </ul>
  </nav>
);
export default NavBar;
