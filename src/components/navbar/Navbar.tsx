import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="main">
      <nav>
        <h2 className="logo">Wakka Govt HS School</h2>
        <div className={`menu ${menuOpen ? "close-icon" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/About" onClick={toggleMenu}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/Events" onClick={toggleMenu}>
              Events
            </NavLink>
          </li>
          <li>
            <NavLink to="/Notices" onClick={toggleMenu}>
              Notices
            </NavLink>
          </li>
          <li>
            <NavLink to="/Contact" onClick={toggleMenu}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
