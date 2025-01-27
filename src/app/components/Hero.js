import React from "react";
import { useRouter } from "next/navigation"; // Use `useRouter` from `next/navigation`
import "./css/hero.css";

// Logo URL
const logo = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/Sanskriti-RKT.png`;

const Hero = () => {
  const router = useRouter(); // Now using `useRouter` from `next/navigation`
  const handleButtonClick = () => {
    router.push("https://rktdallas.live/sanskriti-awards-rsvp");
  };

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

          <p className="date-time-custom">February 2nd, 2025</p>

          {/* Register Button */}

          <button
            className="btn button-custom btn-lg"
            onClick={handleButtonClick}
            aria-label="Register for Sanskriti RKT 2025"
          >
            RSVP
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
