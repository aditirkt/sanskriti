import React from "react";
import "../components/css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="container-contact">
        <h1>Contact Information</h1>
        <p>Call: 469-795-9130</p>
        <p>
          Email:{" "}
          <a href="mailto:SanskritiRKT@jkyog.org">SanskritiRKT@jkyog.org</a>
        </p>
        <p>Text: 972-415-9296</p>
      </div>
    </section>
  );
};

export default Contact;
