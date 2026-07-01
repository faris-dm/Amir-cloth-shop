// src/components/Icon.jsx (The Fix)

import React from "react";

// 1. Accepts onClick and isOpen state as props
function Icon({ onClick, isOpen }) {
  return (
    <div className="inline" onClick={onClick}>
      <svg
        // 2. Uses the isOpen prop to determine rotation
        className={`w-6 h-6 transition-transform duration-300 text-center mx-[50%] cursor-pointer ${
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
    </div>
  );
}

export default Icon;
