import { useState } from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <h2 className="logo">Wakka Govt HS School</h2>
      <div className={`menu ${menuOpen ? "close-icon" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <Link to="/" className={(location.pathname === '/' ? 'active': 'inactive')} onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={(location.pathname === '/about' ? 'active': 'inactive')} onClick={toggleMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/events" className={(location.pathname === '/events' ? 'active': 'inactive')} onClick={toggleMenu}>
            Events
          </Link>
        </li>
        <li>
          <Link to="/contact" className={(location.pathname === '/contact' ? 'active': 'inactive')} onClick={toggleMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
