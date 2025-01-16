"use client";

import React from "react";
import ChessRules from "../components/ChessRules";
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
      <ChessRules />
      <Footer />
    </section>
  );
}
