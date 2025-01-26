
import { Link } from 'react-router-dom';
import './FaqSection.css'

const FaqSection = () => {

  return (
    <section className="row faq-section py-5 bg-gray-50 justify-content-center">
      <div className="col-12 text-center d-flex flex-column gap-1 mb-5">
        <h2 className="global-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do
        </p>
      </div>

      <div className="accordion col-md-8 col-12" id="faq">
        <div className="accordion-item faq-item">
          <h2 className="accordion-header">
            <button className="accordion-button faq-question collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse" data-bs-parent="#faq">
            <div className="accordion-body faq-answer">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item faq-item">
          <h2 className="accordion-header">
            <button className="accordion-button faq-question collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="collapsetwo" className="accordion-collapse collapse" data-bs-parent="#faq">
            <div className="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>

      <div className='col-12 text-center text-gray-600 text-base mt-2'>
        <p>
          Didn’t find the answer you are looking for?{' '}
          <Link to="/contact" className="contact-support">
            Contact our support
          </Link>
        </p>
      </div>
    </section>
  )
}

export default FaqSection;
