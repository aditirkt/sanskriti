import React from "react";
import "./css/hero.css";

// Logo URL
const logo = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/Sanskriti-RKT.png`;

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="d-flex min-vh-100 justify-content-center align-items-center hero-background">
        {/* Information Box */}
        <div className="info-box text-center">
          {/* Event Logo */}

          <img
            src={logo}
            alt="Sanskriti RKT 2025 Logo"
            className="event-logo"
            width={400} // Adjust width as needed
            height={300} // Adjust height as needed
          />

          {/* Hero Title */}

          <h1 className="display-1 fw-bold title-txt-shadow">
            Sanskriti RKT Awards 2025
          </h1>

          {/* Event Date */}

          <p className="date-time-custom">February 2nd, 2025 at 4:45 PM</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
