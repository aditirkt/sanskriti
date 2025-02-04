"use client";
import React, { useState } from "react";
import Link from "next/link"; // Use Next.js Link component
import { Navbar, Nav, Container } from "react-bootstrap";
import "./css/NavigationBar.css";

const NavigationBar = ({ onLinkClick }) => {
  // Construct the logo URL using environment variable
  const logoUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}images/logo.png`;
  const defaultLogo = `/${process.env.NEXT_PUBLIC_IMAGE_URL}images/logo.png`; // Default fallback logo path

  const [logoSrc, setLogoSrc] = useState(logoUrl);

  // Handle image error
  const handleImageError = () => {
    setLogoSrc(defaultLogo); // Fallback to default logo
  };
  const [expanded, setExpanded] = useState(false);

  const closeNavbar = () => setExpanded(false);

  // Helper function to handle the link clicks
  const handleLinkClick = (section) => {
    // Scroll to top for the Home link
    if (section === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      onLinkClick(section);
    }
    closeNavbar();
  };

  return (
    <Navbar
      className="navbar-custom"
      expand="xl"
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          href="https://www.radhakrishnatemple.net/"
          onClick={closeNavbar}
          className="d-flex align-items-center"
        >
          {/* Using Image component from Next.js */}
          <img
            src={logoSrc}
            alt="Logo"
            onError={handleImageError} // Trigger fallback on error
            width={40}
            height={40}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Mapping over the links to reduce repetition */}
            {[
              { to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}`, label: "Home" },

              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#highlights`,
                label: "Highlights",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#glimpses`,
                label: "Glimpses of Sanskriti",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#contests`,
                label: "Contests",
              },
              {
                to: `https://www.radhakrishnatemple.net/sanskriti/all-rules`,
                label: "Rules",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#photo-gallery`,
                label: "Memories",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#testimonials`,
                label: "Testimonials",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#contact`,
                label: "Contact Us",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#faq`,
                label: "FAQs",
              },
              {
                to: `/${process.env.NEXT_PUBLIC_IMAGE_URL}#sponsors`,
                label: "Sponsors",
              },
            ].map(({ to, label }) => (
              <Nav.Link
                key={to}
                as={Link}
                href={to} // Using Next.js `Link` component
                onClick={() => handleLinkClick(to.substring(1))} // Remove "#" for internal routing
              >
                {label}
              </Nav.Link>
            ))}
          </Nav>
          <Nav.Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSdMJZzHs78G8qI0L59wX-14dZhWvWfL-V9MScFSe97_g2gEBQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeNavbar}
          >
            Feedback
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
