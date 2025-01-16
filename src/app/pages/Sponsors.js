import React from "react";
import "../components/css/Sponsors.css";

// Sponsor logos
const patelImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/patelBrothers.png`;
const indiaBazarImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/IndiaBazaar.png`;
const dfwIcsImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/DFWICS.jpg`;
const guptaAgarwalImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/GuptaAgarwal.jpg`;
const sbImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/sb.jpeg`;

const Sponsors = () => {
  const sponsors = [
    {
      id: 1,
      name: "Patel Brothers",
      logo: patelImg,
      website: "https://www.patelbros.com/",
    },
    {
      id: 2,
      name: "India Bazaar",
      logo: indiaBazarImg,
      website: "https://www.indiabazaardfw.com/",
    },
    {
      id: 3,
      name: "DFW ICS",
      logo: dfwIcsImg,
      website: "http://www.dfwics.org/",
    },
    {
      id: 4,
      name: "SB International, Inc.",
      logo: sbImg,
      website: "https://sbisteel.com/",
    },
    {
      id: 5,
      name: "Gupta Agarwal Charitable Foundation",
      logo: guptaAgarwalImg,
      website: "https://www.guptacapitalgroup.com/philanthropy",
    },
  ];

  return (
    <section className="Sponsors-section py-5">
      <div className="Sponsors-container">
        <h1 className="py-3 text-center">Our Sponsors</h1>

        {/* Header Text */}
        <div className="Sponsors-text">
          <p>
            Thank you for your continued and much-appreciated support to Radha
            Krishna Temple of Dallas.
          </p>
          <p>
            Contact the temple at{" "}
            <a href="tel:+14696884996">
              <strong>(469) 688-4996</strong>
            </a>{" "}
            for additional information on becoming a sponsor.
          </p>
        </div>

        {/* Sponsor Logos */}
        <div className="Sponsors-logos d-flex justify-content-center flex-wrap">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.id}
              href={sponsor.website}
              target="_blank"
              rel="noopener noreferrer"
              className="Sponsor-link p-2"
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} Logo`}
                className="Sponsor-logo"
                width={200} // You can set a specific width and height
                height={200} // Adjust as necessary for the logos
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
