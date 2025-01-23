import "./HeroSec.css";
import "./Team.css";
import "./Gallery.css";
import Faq from "./Faq";
import Team from "./Team";
import CountUp from "react-countup";
import Counter from "./Counter";
import Gallery from "./Gallery";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react"

const HeroSection = () => {
  const navigate = useNavigate();
  const counters = [
    { id: 1, label: "Buildings", value: 20 },
    { id: 2, label: "Servers", value: 150 },
    { id: 3, label: "Employees", value: 500 },
    { id: 4, label: "Projects Completed", value: 1200 },
  ];
  const teachers = [
    {
      id: 1,
      name: "Alice Johnson",
      subject: "Mathematics",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.59 PM.jpeg",
    },
    {
      id: 2,
      name: "Mark Smith",
      subject: "Physics",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.58 PM (2).jpeg",
    },
    {
      id: 3,
      name: "Sophia Brown",
      subject: "Chemistry",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.01 PM.jpeg",
    },
    {
      id: 4,
      name: "James Wilson",
      subject: "English",
      image:
        "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.55 PM.jpeg",
    },
  ];

  const [modalSrc, setModalSrc] = useState<string | null>(null);

  const images = [
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM.jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.57 PM (2).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.02 PM (1).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.05 PM.jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM (1).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.02 PM (1).jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.05 PM.jpeg",
    "../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.08 PM (1).jpeg",
  ];
  const notices = [
    "Welcome to the Notice Board!",
    "Exam schedule has been released. Check the official portal.",
    "Annual Sports Day is scheduled for next month.",
    "Maintenance alert: The library will be closed this Friday.",
    "Submit your project reports by the end of this week.",
  ];


  const [currentDateTime, setCurrentDateTime] = useState<string>("");

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
          <button type="button" className="btn btn-primary df">About Us</button>
          
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

      <div className="notice-board">
        <h1>Notice Board</h1>
        <ul>
          {notices.map((notice, index) => (
            <li key={index}>{notice}</li>
          ))}
        </ul>
      </div>
      <section className="infrastructure-counters">
        <h2 className="section-title">Infrastructure Overview</h2>

        <Counter />
        <div className="action-btn">
          <button type="button" className="btn btn-success">
            Explore More
          </button>
        </div>
      </section>

      <Team />

      <div>
        <div />
        <Gallery />
      </div>
      <Faq />
    </>
  );
};

export default HeroSection;
