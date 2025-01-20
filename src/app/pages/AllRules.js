"use client";
import React from "react";
import Rules from "../components/Rules";
import Footer from "../components/Footer";

export default function AllRules() {
  const goBack = () => {
    window.location.href = "/sanskriti"; // Redirects directly to the Sanskriti page
  };
  return (
    <>
      <button className="btn button-custom btn-lg" onClick={goBack}>
        Go Back
      </button>
      <Rules />
      <Footer />
    </>
  );
}
