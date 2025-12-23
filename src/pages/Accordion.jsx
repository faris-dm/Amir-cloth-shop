// src/components/Accordion.jsx

import { React, useState } from "react";
import AccordionItem from "./AccordionItem"; // Import the item component

import Icon from "./icon";
// Data source for the FAQ
const faqData = [
  {
    id: 1,
    question: "What is the benefit of a separate Accordion component?",
    answer:
      "It makes your code cleaner and allows you to reuse the component anywhere in your application without duplicating code.",
  },
  {
    id: 2,
    question: "How does React handle the state here?",
    answer:
      "Each AccordionItem manages its own 'isOpen' state via the useState hook, making them independent of each other.",
  },
  {
    id: 3,
    question: "Is this structure scalable?",
    answer:
      "Yes, you can easily load 'faqData' from an external API or a JSON file instead of defining it directly in this component.",
  },
];

export default function Accordion() {
  return (
    <div className="w-full max-w-5xl bg-white shadow-xl rounded-lg overflow-hidden my-1 mx-auto">
      {faqData.map((item) => (
        <AccordionItem
          key={item.id}
          question={item.question}
          answer={item.answer}
        />
      ))}
    </div>
  );
}
