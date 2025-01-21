import React from 'react';
import './Footer.css';

const SchoolFooter = () => {
  return (
    <footer className="school-footer">
      <div className="footer-container">
        {/* School Logo and Name */}
        <div className="footer-logo">
          <img src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM.jpeg" alt="School Logo" className="school-logo" />
          <h2>MySchool</h2>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Admission</a></li>
            <li><a href="#">Academics</a></li>
            <li><a href="#">Events</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; 2025 MySchool. All rights reserved.</p>
        <p>Address: 123 School St, City, Country</p>
      </div>
    </footer>
  );
};

export default SchoolFooter;
