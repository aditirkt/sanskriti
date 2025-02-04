import React, { useState } from "react";
import "./css/SchedulePage.css";

// Reusable BulletHeader component
const BulletHeader = ({ text, children }) => (
  <span className="bullet-header">
    {text}: <span className="bullet-content">{children}</span>
  </span>
);

const SchedulePage = () => {
  return (
    <section className="schedule-section">
      <div className="schedule-container">
        <h1 className="event-title">When</h1>
        <ul className="info-list">
          <BulletHeader text="Award Ceremony">
            2nd Feb, 2025 at 4:45 PM (1st Floor Hall, CICE)
          </BulletHeader>
          <div className="schedule-para">
            Click Here to{" "}
            <a
              href={`${process.env.NEXT_PUBLIC_IMAGE_URL}winners`}
              target="_blank"
              rel="noopener noreferrer"
              className="result-link"
            >
              Watch the Results
            </a>
          </div>
          <div className="schedule-para">
            Please collect your awards/ participation certificate/Artwork on
            Sunday, Feb 9th, 2025 from Wellness Center (11:30-12:30 pm), in case
            you have not collected it.{" "}
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SchedulePage;
