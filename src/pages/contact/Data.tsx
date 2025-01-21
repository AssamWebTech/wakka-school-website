
import './Data.css'
export const Data = () => {
  return (
    <>
    <section className="contact-section">
      <div className="container">
        <div className="header">
          <h2>Locate Us</h2>
          <p>
            We’d love to hear from you! Contact us for any inquiries or visit
            our offices in your city.
          </p>
        </div>

        <div className="content">
          {/* Contact Details */}
          <div className="contact-details">
            <h3>Contact Information</h3>
            <p>
              <i className="fas fa-envelope"></i> Email:{" "}
              <a href="mailto:support@example.com">support@example.com</a>
            </p>
            <p>
              <i className="fas fa-phone-alt"></i> Phone:{" "}
              <a href="tel:+1234567890">+1 234 567 890</a>
            </p>
            <p>
              <i className="fas fa-clock"></i> Office Hours: Mon - Fri, 9 AM - 6
              PM
            </p>
          </div>

          {/* Locations */}
          <div className="locations">
            <h3>Our Locations</h3>
            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <strong>New York:</strong> 123 Main Street, NY 10001
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <strong>San Francisco:</strong> 456 Market Street, CA 94103
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>{" "}
                <strong>London:</strong> 789 Oxford Street, W1D 2ES
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
export default Data