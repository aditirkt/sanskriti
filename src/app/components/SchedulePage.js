import React, { useState } from "react";
import "./css/SchedulePage.css";

// Reusable BulletHeader component
const BulletHeader = ({ text, children }) => (
  <span className="bullet-header">
    {text}: <span className="bullet-content">{children}</span>
  </span>
);

const SchedulePage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const images = [
    `${process.env.NEXT_PUBLIC_IMAGE_URL || ""}/images/day1.jpeg`,
    `${process.env.NEXT_PUBLIC_IMAGE_URL || ""}/images/day2.jpeg`,
    `${process.env.NEXT_PUBLIC_IMAGE_URL || ""}/images/day3.jpeg`,
  ];

  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <h1 className="event-title">When</h1>
        <ul className="info-list">
          <BulletHeader text="Award Ceremony">
            2nd Feb, 2025 at 4:45 PM (1st Floor Hall, CICE)
          </BulletHeader>
        </ul>
        <BulletHeader text="Schedule"></BulletHeader>
        <div className="schedule-gallery">
          {/* Thumbnails */}
          <div className="schedule-thumbnails">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="thumbnail"
                onClick={() => handleImageClick(image)}
              />
            ))}
          </div>

          {selectedImage && (
            <div className="schedule-modal" onClick={handleClose}>
              <div
                className="schedule-modal-content"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage}
                  alt="Expanded view"
                  className="schedule-modal-photo"
                />
                <button className="schedule-close-btn" onClick={handleClose}>
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SchedulePage;
