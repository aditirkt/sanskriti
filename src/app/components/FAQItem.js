import React from "react";
import PropTypes from "prop-types";

const FAQItem = ({ question, answer, isOpen, onToggle }) => {
  return (
    <div className={`faq-item ${isOpen ? "open" : ""}`}>
      <div
        className="faq-header"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
      >
        <h5>{question}</h5>
        <button className="toggle-button" aria-label={`Toggle ${question}`}>
          {isOpen ? "-" : "+"}
        </button>
      </div>
      {isOpen && <div className="faq-body">{answer}</div>}
    </div>
  );
};

FAQItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FAQItem;
