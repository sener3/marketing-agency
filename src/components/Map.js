import React from "react";

function Map() {
  return (
    <div className="flex-column-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.839057195344!2d-122.38931348422052!3d37.77037177976016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fc4fe7ace37%3A0xfa1746dd4faeb818!2s500%20Terry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094158%2C%20Statele%20Unite%20ale%20Americii!5e0!3m2!1sro!2sro!4v1607180187515!5m2!1sro!2sro"
        className="col-12"
        height="400"
        frameborder="0"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0"
      ></iframe>
    </div>
  );
}

export default Map;
