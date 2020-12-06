import React from "react";

function Footer() {
  return (
    <footer className="row text-md-center ml-3 text-blue">
      <div className="col-10 col-md-6 mb-4">
        <h5 className="font-weight-bold">Contact</h5>
        <p>
          <span className="font-weight-bold">E-mail address: </span>
          marketing@agency.com
        </p>
        <p>
          <span className="font-weight-bold">Phone Number: </span>
          123456789
        </p>
      </div>
      <div className="col-10 col-md-6">
        <h5 className="font-weight-bold">on Social Media</h5>
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram mx-4"></i>
        <i className="fab fa-twitter"></i>
      </div>
    </footer>
  );
}

export default Footer;
