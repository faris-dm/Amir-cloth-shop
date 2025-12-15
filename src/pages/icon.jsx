import { React, useState } from "react";

function Icon() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="inline">
        <svg
          className={`w-6 h-6 transition-transform duration-300 text-center  mx-[50%] ${
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
    </div>
  );
}

export default Icon;
