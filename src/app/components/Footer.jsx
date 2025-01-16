"use client";
import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import {
  Facebook,
  Instagram,
  Pinterest,
  Globe,
  Linkedin,
} from "react-bootstrap-icons";
import { BsTwitterX } from "react-icons/bs";
import "../components/css/Footer.css";

function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setMessage("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setMessage(""); // Clear previous message

    try {
      const response = await fetch(
        `https://api.jkyog.org/api/subscribe-to-newsletter?email=${encodeURIComponent(
          email
        )}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setMessage("Thank you for subscribing!");
      } else {
        const errorData = await response.json();
        setMessage(`Error: ${errorData.message || "Something went wrong!"}`);
      }
    } catch (error) {
      setMessage("Network error. Please try again later.");
    }

    setLoading(false);
  };

  const socialLinks = [
    {
      Icon: Facebook,
      url: "https://www.facebook.com/RadhaKrishnaTempleofDallas",
      label: "Facebook",
    },
    {
      Icon: BsTwitterX,
      url: "https://twitter.com/rkt_dallas?lang=en",
      label: "X",
    },
    {
      Icon: Instagram,
      url: "https://www.instagram.com/rkt_dallas/",
      label: "Instagram",
    },
    {
      Icon: Pinterest,
      url: "https://www.pinterest.com/radhakrishnatempleofdallas",
      label: "Pinterest",
    },
    {
      Icon: Globe,
      url: "http://radhakrishnatemple.net/rkt-inspirations",
      label: "Website",
    },
    {
      Icon: Linkedin,
      url: "https://www.linkedin.com/company/radhakrishnatempleofdallas",
      label: "LinkedIn",
    },
  ];

  const footerSections = [
    {
      title: "Services",
      links: [
        { label: "Yoga and Meditation", url: "https://www.premyoga.jkyog.org" },
        {
          label: "Children Classes",
          url: "https://www.radhakrishnatemple.net/balmukund",
        },
        {
          label: "Toastmasters Youth",
          url: "https://www.radhakrishnatemple.net/toastmasters-youth",
        },
        {
          label: "Youth Club",
          url: "https://www.radhakrishnatemple.net/youthclub",
        },
        {
          label: "Senior Citizens Club",
          url: "https://www.radhakrishnatemple.net/senior-citizens-club",
        },
      ],
    },
    {
      title: "About",
      links: [
        {
          label: "First Time Visitors",
          url: "https://www.radhakrishnatemple.net/first-time-visitors",
        },
        {
          label: "Temple Progress",
          url: "https://www.radhakrishnatemple.net/temple-progress",
        },
        {
          label: "Related Links",
          url: "https://www.radhakrishnatemple.net/related-links",
        },
      ],
    },
    {
      title: "Support",
      links: [
        {
          label: "Contact Us",
          url: "https://www.radhakrishnatemple.net/contact-us",
        },
        {
          label: "Volunteer",
          url: "https://www.radhakrishnatemple.net/volunteer",
        },
        {
          label: "Temple Needs",
          url: "https://www.radhakrishnatemple.net/temple-needs",
        },
      ],
    },
  ];

  return (
    <footer className="footer-ccontainer py-5">
      <Container>
        {/* Email Subscription Section */}
        <Row className="justify-content-center mb-4">
          <Col md={8} lg={6} className="text-center">
            <h2 className="mb-4 text-dark">
              Stay Updated with the Latest News
            </h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="position-relative">
                <Form.Control
                  type="email"
                  placeholder="example@domain.com"
                  value={email}
                  onChange={handleEmailChange}
                  className="mb-2"
                />
                <Button
                  variant="dark"
                  type="submit"
                  disabled={loading}
                  className="position-absolute end-0 top-0"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </Button>
              </Form.Group>
            </Form>
            {message && (
              <Alert
                variant={message.includes("Error") ? "dark" : "success"}
                className="mt-3"
              >
                {message}
              </Alert>
            )}
          </Col>
        </Row>

        <Row>
          {/* About Section */}
          <Col md={6}>
            <p className="text-muted text-center text-md-start">
              This magnificent Hindu temple is the serene abode of Shree Radha
              Krishna where you imbibe the nectar of love for God, celebrate
              festivals with the Indian community in Dallas, practice meditation
              and yoga, enrich your children's lives with Vedic culture, or
              simply relax and enjoy the spiritual environment with your family.
              <br />
              <br />
              Non Profit 501(c)(3) organization.
              <br />
              <br />
              Federal tax ID: 26-3490578.
            </p>

            {/* Social Media Links */}
            <div className="d-flex justify-content-center justify-content-md-start mt-3">
              {socialLinks.map(({ Icon, url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-dark me-3"
                >
                  <Icon size={24} />
                  <span className="visually-hidden">{label}</span>
                </a>
              ))}
            </div>
          </Col>

          {/* Footer Sections */}
          <Col md={6}>
            <Row>
              {footerSections.map((section, index) => (
                <Col key={index} md={4} className="mb-3">
                  <h5 className="text-dark">{section.title}</h5>
                  <ul className="list-unstyled">
                    {section.links.map((link, idx) => (
                      <li key={idx}>
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted small"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
