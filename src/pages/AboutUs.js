import React from "react";

function AboutUs() {
  return (
    <section>
      <div className="container-1700">
        <div className="row">
          <div className="col-12 col-md-6 img-container">
            <img src="./images/about-us.webp" />
          </div>
          <div className="col-12 col-md-6 bg-gray py-5 py-md-0">
            <div className="text-blue ml-3 container-500">
              <h6 className="text-pink-uppercase">about us</h6>
              <p className="my-3">We Deliver Growth</p>
              <p className="mb-3">
                Our goal as a full-service Marketing Agency is to apply our
                passionate thinkers and creative team to work closely with each
                brand to create unique, creative strategies that produce
                effective results.
              </p>
              <p>
                Since 2023, Marketing Agency has been working with all-sized
                companies to help them find their one-of-a-kind message. We were
                born out of a strong desire to provide brands with the quality
                creative services they need in order to stay ahead — and we
                won’t rest until we achieve those results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
