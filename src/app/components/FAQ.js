import React, { useState } from "react";

import FAQItem from "./FAQItem";
import Link from "next/link"; // Import Link from Next.js

import "./css/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: "What is Sanskriti?",
      answer:
        "Sanskriti is a cultural extravaganza by JK-Yog’s Bal Mukund and Youth Club. This is a great platform for youth of different age groups to showcase their talent.",
    },
    {
      question: "When and how will Sanskriti RKT 2025 be conducted?",
      answer: (
        <ul>
          <li>
            Sanskriti 2024 will be conducted in person, from{" "}
            <strong>January 24th, 2025</strong> to{" "}
            <strong>January 26th, 2025</strong> at the Radha Krishna Temple of
            Dallas, Allen, TX.
          </li>
          <li>
            <strong>The award ceremony is on</strong> 2nd Feb, 2025 at 5 PM (1st
            Floor Hall, CICE).
          </li>
          <li>
            To get access to the schedule, kindly visit{" "}
            <a href="#schedule">Schedule</a>.
          </li>
        </ul>
      ),
    },
    {
      question: "Where could we get access to the lists of contests?",
      answer: (
        <span>
          To get access to the list of contests, kindly visit{" "}
          <a href="#contests">List of Contest</a>.
        </span>
      ),
    },
    {
      question: "What are the highlights of Sanskriti?",
      answer: (
        <span>
          <ul>
            <li>Special trophies & medals for winners in each category.</li>
            <li>Certificates will be given for participation.</li>
            <li>Kids can participate in more than one contest.</li>
            <li>
              Food is available for purchase at Yugal Kunj for all three days.
            </li>
            <li>
              All proceeds support the charitable activities of JKYog & Radha
              Krishna Temple.
            </li>
          </ul>
        </span>
      ),
    },
    {
      question: "Where could we get access to the rules of the contests?",
      answer: (
        <span>
          To get the access to the rules of the contests, kindly visit{" "}
          <a
            href="https://www.radhakrishnatemple.net/sanskriti-rules"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanskriti-Rules
          </a>
          .
        </span>
      ),
    },
    {
      question:
        "Where could we check for the registration fee for the different age groups?",
      answer: (
        <span>
          <ul>
            <li>
              <strong>Onstage Solo Contest</strong> – $20 per participant per
              contest
            </li>
            <li>
              <strong>All other contests</strong> – $15 per participant per
              contest
            </li>
            <li>
              <strong>Entry Fee</strong>: $5 for each accompanying guest
              (children above 5 yrs, youth, and adults) for Onstage contest
            </li>
            <li>
              <strong>Group Contest</strong> (Dance & Singing Contest) - $15 per
              participant in the Group
            </li>
          </ul>
          <p>
            Discounted Bundle Packages (Register under the specific Bundle
            Package to get the discount):
          </p>
          <ul>
            <li>
              <strong>Bundle Package 1</strong> – 10% discount if register for
              any 3 contests for the same participant
            </li>
            <li>
              <strong>Bundle Package 2</strong> – 15% discount if register for
              any 5 contests for the same participant
            </li>
            <li>
              <strong>Bundle Package 3</strong> – 25% discount if register for
              any 7 contests for the same participant
            </li>
          </ul>
        </span>
      ),
    },
    {
      question:
        "What are the contact details that would help in getting further details about Sanskriti?",
      answer: (
        <span>
          Email:{" "}
          <a href="mailto:SanskritiRKT@jkyog.org">SanskritiRKT@jkyog.org</a>
          <br />
          Text: 972-415-9296
        </span>
      ),
    },
    {
      question:
        "Where could we go through the terms and conditions of the different contests of Sanskriti?",
      answer: (
        <span>
          To get access to the terms and conditions of the contests, kindly
          visit{" "}
          <Link
            href={`${process.env.NEXT_PUBLIC_IMAGE_URL}terms-and-conditions`}
          >
            Terms And Conditions
          </Link>
          .
        </span>
      ),
    },
    {
      question: "How can I help / volunteer?",
      answer: (
        <span>
          Fill out the volunteer form:{" "}
          <a
            href="https://www.radhakrishnatemple.net/Sanskriti-Volunteers"
            target="_blank"
            rel="noopener noreferrer"
          >
            Volunteer Opportunity
          </a>
          <a
            href="https://forms.gle/TeCeD1LcZasYzkDz7"
            target="_blank"
            rel="noopener noreferrer"
          >
            .
          </a>
        </span>
      ),
    },
  ];

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h1 className="faq-title">FAQs</h1>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={activeIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
