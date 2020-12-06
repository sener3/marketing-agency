import React from "react";
import ContactForm from "../components/ContactForm";
import Map from "../components/Map";
function HomePage() {
  return (
    <div>
      <div className="parallax-container">
        <h1 className="text-white-uppercase text-center hero-text">
          marketing agency welcomes you
        </h1>
      </div>
      <section id="about">
        <div className="container-1700">
          <div className="row">
            <div className="col-12 col-md-6">
              <img src="./images/book.webp" />
            </div>
            <div className="col-12 col-md-6 bg-pink py-5 py-md-0">
              <div className="text-white ml-3">
                <h6 className="text-white-uppercase">who we are</h6>
                <p className="my-3">Innovative Solutions</p>
                <p>
                  We’ve been helping brands develop and define their voice since
                  2023. The times may have changed, but our love for creativity
                  and problem-solving hasn't. We’re driven by technology and
                  innovation to ensure we fulfill our key mission of helping our
                  clients find their successful future. Get in touch so that we
                  can kickstart your branding today.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container-1700">
          <div className="row">
            <div className="col-12 col-md-4 container-relative">
              <img src="./images/package-design.webp" />
              <div className="text-position-center">
                <h6 className="text-white-uppercase text-center mb-5">
                  package design
                </h6>
                <p className="text-white">let us handle everything</p>
              </div>
            </div>
            <div className="col-12 col-md-4 container-relative">
              <img src="./images/web-design.webp" />
              <div className="text-position-center">
                <h6 className="text-white-uppercase text-center mb-5">
                  web design
                </h6>
                <p className="text-white">results you'll love</p>
              </div>
            </div>
            <div className="col-12 col-md-4 container-relative">
              <img src="./images/print-design.webp" />
              <div className="text-position-center">
                <h6 className="text-white-uppercase text-center mb-5">
                  print design
                </h6>
                <p className="text-white">we do it right</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactForm />
      <Map />
    </div>
  );
}

export default HomePage;
