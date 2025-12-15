// src/components/AccordionItem.jsx

import React, { useState, useRef } from "react";
import Icon from "./icon";

// Requires the custom 'max-height' transition utility configured earlier.

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="`border-b border-gray-200 ">
      {/* Header Button */}
      <button
        className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50 focus:outline-none transition duration-150"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span>{question}</span>

        {/* <Icon /> */}
        <svg
          className={`w-6 h-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Content */}
      <div
        ref={contentRef}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
        // Dynamic styling based on the 'isOpen' state
        style={{
          maxHeight: isOpen ? contentRef.current.scrollHeight : 0,
          padding: isOpen ? "1rem" : "0 1rem",
        }}
      >
        <div className="bg-gray-50 text-gray-700 p-4 pt-0">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
