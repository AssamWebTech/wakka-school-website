import './Gallery.css'

const Gallery = () => {
  return (
    <section className='row py-5 gap-5 justify-content-center'>
      <div className="col-12 text-center">
        <h2 className='section-title'>Our Gallery</h2>
      </div>
      <div className="col-md-10 col-12 image-grid-container">
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
    </section>
  )
}

export default Gallery
