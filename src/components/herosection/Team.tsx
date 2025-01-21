import React from 'react'
import './Team.css'
const Team = () => {
  return (
    <>
      <section className="teachers-section">
      <div className="section-header text-center">
        <h2>Meet Our Teachers</h2>
        <p>Learn from the best educators in the field</p>
      </div>

      <div className="teachers-grid">
        <div className="teacher-card animated-card">
          <img
            src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.54 PM.jpeg"
            alt="Teacher 1"
            className="teacher-image"
          />
          <div className="teacher-info">
            <h3>John Doe</h3>
            <p>Maths Instructor</p>
          </div>
        </div>

        <div className="teacher-card animated-card">
          <img
            src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.48.58 PM (3).jpeg"
            alt="Teacher 2"
            className="teacher-image"
          />
          <div className="teacher-info">
            <h3>Jane Smith</h3>
            <p>Science Instructor</p>
          </div>
        </div>

        <div className="teacher-card animated-card">
          <img
            src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.59 PM.jpeg"
            alt="Teacher 3"
            className="teacher-image"
          />
          <div className="teacher-info">
            <h3>Michael Brown</h3>
            <p>English Instructor</p>
          </div>
        </div>

        <div className="teacher-card animated-card">
          <img
            src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.55 PM.jpeg"
            alt="Teacher 4"
            className="teacher-image"
          />
          <div className="teacher-info">
            <h3>Sarah Johnson</h3>
            <p>History Instructor</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Team
