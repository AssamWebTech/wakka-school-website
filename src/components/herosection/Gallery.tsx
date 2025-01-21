import React from 'react'
import './Gallery.css'

const Gallery = () => {
  return (
    <>
    <div className="section-header text-center g-1">
        <h2>Our Gallery</h2>
        <p>Learn from the best educators in the field</p>
      </div>
        <div className="image-grid-container">
      <div className="image-column">
        <img
          src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.09 PM.jpeg"
          className="image-item"
          alt="Boat on Calm Water"
        />
        <img
          src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.09 PM.jpeg"
          className="image-item"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div className="image-column">
        <img
          src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.55 PM.jpeg"
          className="image-item"
          alt="Mountains in the Clouds"
        />
        <img
          src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.51.01 PM.jpeg"
          className="image-item"
          alt="Boat on Calm Water"
        />
        
      </div>

      <div className="image-column">
        <img
          src="../../../public/Assets/p1.jpeg"
          className="image-item"
          alt="Waves at Sea"
        />
        <img
          src="../../../public/Assets/WhatsApp Image 2025-01-20 at 2.50.58 PM.jpeg"
          className="image-item"
          alt="Yosemite National Park"
        />
      </div>
      
    </div>
    
    </>
  )
}

export default Gallery
