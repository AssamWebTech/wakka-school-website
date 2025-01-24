import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter: React.FC = () => {
  const counters = [
    { title: "Students", value: 1200, imgSrc: "../../../public/Assets/notice.jpg", color: "#3498db" },
    { title: "Teachers", value: 75, imgSrc: "../../../public/Assets/c2.jpeg", color: "#f39c12" },
    { title: "Classes", value: 50, imgSrc: "../../../public/Assets/notice.jpg", color: "#2ecc71" },
    { title: "Achievements", value: 150, imgSrc: "../../../public/Assets/N2.jpg", color: "#e74c3c" },
  ];

  const [countValues, setCountValues] = useState<number[]>([0, 0, 0, 0]);

  // Counter animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCountValues((prev) =>
        prev.map((value, index) =>
          value < counters[index].value ? value + 5 : value
        )
      );
    }, 30);

    return () => clearInterval(interval);
  }, [counters]);

  return (
    <section className="counter-section">
      <div className="counter-header">
        <h1 className="counter-title">Our Achievements</h1>
        <p className="counter-subtitle">
          These numbers reflect our dedication and success in education.
        </p>
      </div>
      <div className="counter-grid">
        {counters.map((counter, index) => (
          <div className="counter-card" key={index} style={{ borderLeft: `5px solid ${counter.color}` }}>
            <div className="counter-image">
              <img src={counter.imgSrc} alt={counter.title} />
            </div>
            <h2 className="counter-value">{countValues[index]}</h2>
            <p className="counter-label">{counter.title}</p>
            <div className="progress-bar">
              <div
                className="progress"
                style={{
                  width: `${(countValues[index] / counter.value) * 100}%`,
                  backgroundColor: counter.color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
