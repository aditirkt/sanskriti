import React, { useState, useEffect } from "react";
import "./css/Testimonials.css";

const testimonialImg = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/testimonials.JPG`;

const testimonials = [
  {
    message:
      "Every category the specialized judge in that particular area they had assigned for evaluation & very well organized.",
    author: "2023 participant parent",
  },
  {
    message:
      "Recognizing and giving opportunities for talents in the different aspects of Indian culture!",
    author: "Anonymous",
  },
  {
    message:
      "The Sanskriti fancy dress competition is a beautiful show of Indian culture every year. The kids display the diverse array of Indian success, from Jhansi ki Rani to Bhagat Singh, all while being completely adorable!",
    author: "Sumati S (Law student)",
  },
  {
    message:
      "Over the past few years, Sanskriti has provided my daughter with an invaluable platform to reconnect with her cultural heritage while honing her communication skills through diverse competitions such as public speaking, instrumental music, chess, and more. Her active involvement has significantly enhanced her self-confidence and refined her social skills.",
    author: "Manish (Plano)",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto scroll testimonials every 10 seconds (updated)
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // 10000 ms = 10 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials-section py-5">
      <h1 className="section-heading">Testimonials</h1>
      <div className="testimonials-container">
        {/* Static Image on Left */}
        <div className="testimonial-image-container">
          <img
            src={testimonialImg}
            alt="Testimonial"
            width={500} // Set a fixed width for optimization
            height={400} // Set a fixed height for optimization
            className="testimonial-img"
          />
        </div>

        {/* Testimonial Cards on Right */}
        <div className="testimonial-card">
          <div className="testimonial-message">
            <p>&quot;{testimonials[currentIndex].message}&quot;</p>
          </div>
          <p className="testimonial-author">
            - {testimonials[currentIndex].author}
          </p>
        </div>
      </div>

      {/* Dots for Navigation */}
      <div className="dots-container">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? "active" : ""}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
