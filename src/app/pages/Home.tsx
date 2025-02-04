"use client";
import React, { useEffect, useState } from "react";
import NavigationBar from "../components/NavigationBar";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Contests from "../components/Contests";
import Contact from "../components/Contact";
import Register from "../components/Register";
import Testimonials from "../components/Testimonials";
import Sanskriti from "../components/Sanskriti";
import PhotoGallery from "../components/PhotoGallery";
import FAQ from "../components/FAQ.js";
import SchedulePage from "../components/SchedulePage.js";
import "../components/css/Home.css";
import Sponsors from "./Sponsors.js";
import Footer from "../components/Footer.jsx";
import Glimpses from "../components/Glimpses.js";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // Handle scroll-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section smoothly
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Intersection Observer for animation
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // Trigger animation when 10% of the section is visible
    };

    const sections = document.querySelectorAll(".anim-section");

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in"); // Add animation class
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section); // Start observing the section
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <NavigationBar onLinkClick={scrollToSection} />
      <div className="home-container">
        <section id="hero" className="anim-section">
          <Hero />
        </section>
        <section id="sanskriti" className="anim-section">
          <Sanskriti />
        </section>

        <section id="highlights" className="anim-section">
          <Highlights />
        </section>
        <section id="glimpses" className="anim-section">
          <Glimpses />
        </section>
        <section id="contests" className="anim-section">
          <Contests />
        </section>
        <section id="register" className="anim-section">
          <Register />
        </section>
        <section id="photo-gallery" className="anim-section">
          <PhotoGallery />
        </section>
        <section id="testimonials" className="anim-section">
          <Testimonials />
        </section>
        <section id="contact" className="anim-section">
          <Contact />
        </section>
        <section id="faq" className="anim-section">
          <FAQ />
        </section>
        <section id="sponsors" className="anim-section">
          <Sponsors />
        </section>
        <Footer />
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
}
