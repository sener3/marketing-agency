import React from "react";

function ContactForm() {
  return (
    <div className="bg-white py-5">
      <h3 className="text-pink-uppercase text-center">connect with us</h3>
      <form className="flex-column-center">
        <input className="col-10" type="text" name="name" placeholder="Name" />
        <input
          className="col-10"
          type="text"
          name="email"
          placeholder="Email"
        />
        <input
          className="col-10"
          type="text"
          name="subject"
          placeholder="Subject"
        />
        <textarea
          className="col-10"
          name="message"
          placeholder="Type your message here..."
        ></textarea>
        <input className="col-10" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactForm;
