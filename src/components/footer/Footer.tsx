import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';
import { faCalendarAlt, faClock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const SchoolFooter = () => {
  return (
    <footer className="school-footer">
      <div className="container-fluid">
        <div className='row d-flex justify-content-center px-5' style={{ paddingTop: '4rem', paddingBottom: '3rem' }}>
          {/* School Logo and Name */}
          <div className="col-md-3 col-12 footer-logo pb-5">
            <img src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM.jpeg" alt="School Logo" className="school-logo" />
            <h2>MySchool</h2>
          </div>

          <div className="col-md-3 col-12 d-flex flex-column gap-3 footer-block pb-5">
            <h3 className='footer-title'>Get In Touch</h3>
            <p>123 Main street, 2nd block <br/> Opposite some landmark <br/>P.O - Wakka, P.S - Wakka,<br/> Wakka - 123456, Arunachal Pradesh</p>
            <div className='d-flex gap-3 align-items-center'><FontAwesomeIcon icon={faPhone} className='text-warning' />+917003477678, +919876234567</div>
            <div className='d-flex gap-3 align-items-center'><FontAwesomeIcon icon={faEnvelope} className='text-warning' />info@gmail.com</div>
          </div>

          <div className="col-md-3 col-12 d-flex flex-column gap-3 footer-block pb-5">
            <h3 className='footer-title'>City Office</h3>
            <p>123 Main street, 2nd block <br/> Wakka - 123456, Arunachal Pradesh</p>
            <h3 className='footer-title'>School Office Hours</h3>
            <div className='d-flex gap-3 align-items-center'><FontAwesomeIcon icon={faClock} className='text-warning' />8 AM - 4 PM</div>
            <div className='d-flex gap-3 align-items-center'><FontAwesomeIcon icon={faCalendarAlt} className='text-warning' />Monday - Saturday</div>
          </div>

          <div className="col-md-3 col-12 d-flex flex-column gap-3 footer-block pb-5">
            <h3 className='footer-title'>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>

        <div className='row'>
          <div className="col-12 footer-bottom py-4 text-center d-flex flex-column gap-1">
            <p>&copy; 2025 MySchool. All rights reserved.</p>
            <p>Owned and operated by Assam WebTech</p>
            <p>Address: 123 School Street, City, Country</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SchoolFooter;
