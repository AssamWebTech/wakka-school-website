import { useNavigate } from "react-router-dom";
import "./HeroSec.css";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    // Update the date and time dynamically
    const updateDateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      setCurrentDateTime(now.toLocaleDateString("en-US", options));
    };

    // Update every second
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);
  
  return (
    <>
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="../../../public/Assets/c3.jpeg"
              className="d-block w-100 h-60"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/Assets/c22.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/Assets/c23.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="../../../public/Assets/c24.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden ">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className="extra-sec">
        <h2 className="font">
          Welcome to Wakka Best CBSE Board School in India
        </h2>

        <hr className="line" />

        <div className="container text-center ">
          <div className="row">
            
            <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1 className="about-title">About Us</h1>
          <p className="about-paragraph">
            Welcome to our website! We are dedicated to providing exceptional
            services that empower individuals and organizations. Our mission is
            to deliver innovative solutions with a focus on quality, creativity,
            and client satisfaction. Whether you are looking for technology
            solutions, consultation, or a platform to grow, we are here to
            assist you.
          </p>
          <p className="about-paragraph">
            Our team comprises highly skilled professionals who work tirelessly
            to meet and exceed your expectations. Join us on our journey to
            create a better, more connected future.
          </p>
          <button type="button" className="btn btn-primary df" onClick={() => navigate('/about')}>About Us</button>
          
        </div>
        
        <div className="about-image">
          <img
            src="../../../public/Assets/p1.jpeg"
            alt="About Us"
            className="responsive-image"
          />
        </div>
      </div>
      
    </section>
    </div>
    
    </div>
      </div>
      <div>
        <section className="notice-section">
          <div className="notice-container">
            <div className="notice-image">
              <img
                src="../../../public/Assets/N2.jpg"
                alt="Notice Board"
                className="responsive-image"
              />
            </div>
            <div className="notice-content">
              <h1 className="notice-title">Notice Updates</h1>
              <p className="notice-date-time">Date & Time: {currentDateTime}</p>
              <p className="notice-paragraph">
                Stay informed with the latest updates and announcements! Here, you
                will find essential information, upcoming events, and important
                notices. Keep checking this section regularly to stay updated with
                what's happening.
              </p>
              <p className="notice-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae
                sapien ut purus feugiat efficitur non a nisl. Suspendisse potenti.
                Ut volutpat fermentum metus, sed vestibulum nisi ultrices id.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
