"use client";

import React from "react";
import CarromRules from "../components/CarromRules";
import Footer from "../components/Footer";

export default function Chess() {
  const goBack = () => {
    window.location.href = "/sanskriti"; // Redirects directly to the Sanskriti page
  };
  return (
    <section>
      <button className="btn button-custom btn-lg" onClick={goBack}>
        Go Back
      </button>
      <CarromRules />
      <Footer />
    </section>
  );
}
