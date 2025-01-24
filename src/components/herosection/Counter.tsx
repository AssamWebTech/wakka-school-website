import './Counter.css'
const Counter = () => {
  return (
    <>
       <section className="counter-section py-10 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="section-title">Numbers tell our story</h2>
          <p className="section-subtitle">
            We are driven by our accomplishments. Take a look at some of our milestones.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-center">
          <div className="counter-item">
            <h3 className="counter-value">6+</h3>
            <p className="counter-label">Years in business</p>
          </div>

          <div className="counter-item">
            <h3 className="counter-value">4821</h3>
            <p className="counter-label">Projects delivered</p>
          </div>

          <div className="counter-item">
            <h3 className="counter-value">37+</h3>
            <p className="counter-label">Team members</p>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Counter
