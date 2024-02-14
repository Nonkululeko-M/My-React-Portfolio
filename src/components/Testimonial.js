import React from "react";

const Testimonial = () => {
  return (
    <section id="Testimonials">
      <div className="wrapper">
        <section id="testimonials">
          <header>
            <h2>Testimonials</h2>
          </header>
          <div className="content">
            <div className="testimonial">
              <h3>John Doe</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida tellus nec justo tincidunt.</p>
            </div>
            {/* Add more testimonials here */}
          </div>
        </section>
      </div>
    </section>
  );
}

export default Testimonial;
