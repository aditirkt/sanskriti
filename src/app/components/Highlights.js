import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Use `useRouter` from `next/navigation`
import "./css/hero.css";

// Logo URL
const logo = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/Sanskriti-RKT.png`;

const Hero = () => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const [isLogoVisible, setIsLogoVisible] = useState(false);
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isDateVisible, setIsDateVisible] = useState(false);
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const router = useRouter(); // Now using `useRouter` from `next/navigation`

  useEffect(() => {
    // Overlay animation starts first
    const overlayTimeout = setTimeout(() => setIsOverlayVisible(true), 50);

    // Logo appears after overlay
    const logoTimeout = setTimeout(() => setIsLogoVisible(true), 50);

    // Title appears after logo
    const titleTimeout = setTimeout(() => setIsTitleVisible(true), 100);

    // Date appears after title
    const dateTimeout = setTimeout(() => setIsDateVisible(true), 200);

    // Button appears last
    const buttonTimeout = setTimeout(() => setIsButtonVisible(true), 200);

    // Cleanup timeouts when component is unmounted
    return () => {
      clearTimeout(overlayTimeout);
      clearTimeout(logoTimeout);
      clearTimeout(titleTimeout);
      clearTimeout(dateTimeout);
      clearTimeout(buttonTimeout);
    };
  }, []);

  const handleButtonClick = () => {
    router.push("https://www.tickettailor.com/events/sanskritirkt2025/1434827");
  };

  return (
    <section className="hero-section">
      {isOverlayVisible && (
        <div className="d-flex min-vh-100 justify-content-center align-items-center hero-background">
          {/* Information Box */}
          <div className="info-box text-center">
            {/* Event Logo */}
            {isLogoVisible && (
              <img
                src={logo}
                alt="Sanskriti RKT 2025 Logo"
                className="event-logo"
                width={400} // Adjust width as needed
                height={300} // Adjust height as needed
              />
            )}

            {/* Hero Title */}
            {isTitleVisible && (
              <h1 className="display-1 fw-bold title-txt-shadow">
                Sanskriti RKT 2025
              </h1>
            )}

            {/* Event Date */}
            {isDateVisible && (
              <p className="date-time-custom">24th - 26th January, 2025</p>
            )}

            {/* Register Button */}
            {isButtonVisible && (
              <button
                className="btn button-custom btn-lg"
                onClick={handleButtonClick}
                aria-label="Register for Sanskriti RKT 2025"
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
