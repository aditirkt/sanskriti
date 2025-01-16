"use client";
import React, { useState } from "react";
import Link from "next/link"; // Use Next.js Link component
import { Navbar, Nav, Container } from "react-bootstrap";
import "./css/NavigationBar.css";

const logo = `${process.env.NEXT_PUBLIC_IMAGE_URL}/images/logo.png`; // Fixed environment variable for logo path

const NavigationBar = ({ onLinkClick }) => {
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
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            className="navbar-logo d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Mapping over the links to reduce repetition */}
            {[
              { to: "/rkt-sanskriti", label: "Home" },
              { to: "#schedule", label: "Schedule" },
              { to: "/rkt-sanskriti#highlights", label: "Highlights" },
              { to: "/rkt-sanskriti#contests", label: "Contests" },
              { to: "/rkt-sanskriti#photo-gallery", label: "Memories" },
              { to: "/rkt-sanskriti#testimonials", label: "Testimonials" },
              { to: "/rkt-sanskriti#contact", label: "Contact Us" },
              { to: "/rkt-sanskriti#faq", label: "FAQs" },
              { to: "/rkt-sanskriti#sponsors", label: "Sponsors" },
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
            href="https://www.radhakrishnatemple.net/Sanskriti-Volunteers"
            onClick={closeNavbar}
          >
            Volunteer Opportunities
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
