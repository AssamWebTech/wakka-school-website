
import './Hit.css'
export const Hiw = () => {
  return (
    <> <section className="how-it-works-section">
    <div className="container">
      <div className="header">
        <h2>How does it work?</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis.
        </p>
      </div>

      <div className="steps-container">
        <div className="line-decorator">
          <img
            className="decorator-line"
            src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
            alt="decorative line"
          />
        </div>

        <div className="steps-grid">
          <div className="step">
            <div className="step-icon">
              <span>1</span>
            </div>
            <h3>Create a free account</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="step">
            <div className="step-icon">
              <span>2</span>
            </div>
            <h3>Build your website</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>

          <div className="step">
            <div className="step-icon">
              <span>3</span>
            </div>
            <h3>Release & Launch</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
    </>
  )
}

export default Hiw
