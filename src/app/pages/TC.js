"use client";

import React from "react";
import TermsAndConditions from "../components/TermsAndConditions";
import Footer from "../components/Footer";

export default function TC() {
  const goBack = () => {
    window.location.href = "/sanskriti"; // Redirects directly to the Sanskriti page
  };

  return (
    <>
      <div className="go-back-container">
        <button className="btn button-custom btn-lg" onClick={goBack}>
          Go Back
        </button>
      </div>
      <TermsAndConditions />
      <Footer />
    </>
  );
}
