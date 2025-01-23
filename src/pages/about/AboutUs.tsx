import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleRight } from '@fortawesome/free-regular-svg-icons';
import binoculars from '../../assets/binocular.png';
import target from '../../assets/target.png';
import books from '../../assets/books.jpg';

const AboutUs = () => {
  const scrollToSection = (element: HTMLElement) => {
    element.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'center' })
  };

  return (
    <main className="container-fluid">
      <section className="row">
        <div className="col-12 about-background">
          <div className="overlay">
              <div>
                <h1>Wakka HS CBSE School</h1>
                <p>123 Main Street, Wakka, Arunachal Pradesh</p>
              </div>
          </div>
        </div>
      </section>
      
      <section className="row gap-5 mx-auto py-5 justify-content-center">
        <div className="col-md-6 col-12 d-flex flex-column gap-5">
          <div id='history'>
            <h2 className='title'><img src={books} height='50px' width='50px'/> Our History</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tempore, vitae placeat libero accusantium eum nostrum eligendi deleniti repudiandae ipsam distinctio, officiis, quibusdam magnam minima similique asperiores enim animi!
            </p>
          </div>
          <div id='vision'>
            <h2 className='title'><img src={binoculars} height='50px' width='50px'/> Our Vision</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tempore, vitae placeat libero accusantium eum nostrum eligendi deleniti repudiandae ipsam distinctio, officiis, quibusdam magnam minima similique asperiores enim animi!
            </p>
          </div>
          <div id='mission'>
            <h2 className='title'><img src={target} height='50px' width='50px'/> Our Mission</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tempore, vitae placeat libero accusantium eum nostrum eligendi deleniti repudiandae ipsam distinctio, officiis, quibusdam magnam minima similique asperiores enim animi!
            </p>
          </div>
          <div id='whyjoin'>
            <h2 className='title'><img src={target} height='50px' width='50px'/> Why Join Us</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed maiores tempore, vitae placeat libero accusantium eum nostrum eligendi deleniti repudiandae ipsam distinctio, officiis, quibusdam magnam minima similique asperiores enim animi!
            </p>
          </div>
        </div>
        <div className="col-md-2 col-12 d-flex flex-column align-items-start gap-3 pt-4 px-5 pb-5 quick-links-section">
          <h2>Quick Links</h2>
          <ul className='list-group gap-2'>
            <li className='d-flex gap-3 align-items-center' onClick={() => scrollToSection(document.getElementById('history') as HTMLElement)}><FontAwesomeIcon icon={faCircleRight} />Our History</li>
            <li className='d-flex gap-3 align-items-center' onClick={() => scrollToSection(document.getElementById('vision') as HTMLElement)}><FontAwesomeIcon icon={faCircleRight} />Our Vision</li>
            <li className='d-flex gap-3 align-items-center' onClick={() => scrollToSection(document.getElementById('mission') as HTMLElement)}><FontAwesomeIcon icon={faCircleRight} />Our Mission</li>
            <li className='d-flex gap-3 align-items-center' onClick={() => scrollToSection(document.getElementById('whyjoin') as HTMLElement)}><FontAwesomeIcon icon={faCircleRight} />Why Join Us</li>
          </ul>
        </div>
      </section>
      
    </main>
    
  )
}

export default AboutUs;