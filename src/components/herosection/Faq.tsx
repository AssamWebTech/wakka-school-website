
import './Faq.css'
import { useState } from 'react';
const Faq = () => {

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleAccordion = (index: number) => {
      if (activeIndex === index) {
        setActiveIndex(null); // Collapse if already open
      } else {
        setActiveIndex(index); // Expand the clicked section
      }
    }

  return (
    <>
       <section className="faq-section py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
          </p>
        </div>

        <div className="faq-list">
          {['How to create an account?', 'How can I make payment using Paypal?', 'Can I cancel my plan?', 'How can I reach support?'].map((question, index) => (
            <div key={index} className="faq-item">
              <button
                type="button"
                className="faq-button"
                onClick={() => toggleAccordion(index)}
              >
                <span className="faq-question">{question}</span>
                <svg
                  className={`faq-icon ${activeIndex === index ? 'rotate-180' : ''}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>
                    Amet minim mollit non deserunt ullamco est sit{' '}
                    <a href="#" className="faq-link">aliqua dolor</a> do amet sint. Velit officia consequat duis enim velit mollit.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-base mt-9">
          Didn’t find the answer you are looking for?{' '}
          <a href="#" className="contact-support">
            Contact our support
          </a>
        </p>
      </div>
    </section>
    </>
  )
}

export default Faq
