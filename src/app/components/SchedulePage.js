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
          <li>
            <BulletHeader text="Deadline to Register">
              <ul className="sub-list">
                <li>
                  <span>10th Jan 2025</span> for Scheduled On-Stage & Off-Stage
                  Contests
                </li>
                <li>
                  <span>25th Jan 2025</span> for Walk-In/ Off-Stage Contests
                </li>
              </ul>
            </BulletHeader>
          </li>
          <li>
            <BulletHeader text="Date">24th – 26th Jan, 2025</BulletHeader>
          </li>
          <li>
            <BulletHeader text="Competition Days" />
            <ul className="sub-list">
              <li>24th Jan: 5 pm - 9 pm</li>
              <li>25th Jan: 9 am - 9 pm</li>
              <li>26th Jan: 10 am - 5 pm</li>
            </ul>
          </li>
          <li>
            <BulletHeader text="Award Ceremony">
              2nd Feb, 2025 at 5 PM (1st Floor Hall, CICE)
            </BulletHeader>
          </li>
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
