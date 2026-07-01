import React from "react";
import { useState } from "react";

function Js_Filter() {
  const [input, setinput] = useState("");
  const fruits = [
    "Banana",
    "Avocado",
    "Orange",
    "Coconut",
    "Apple",
    "Mango",
    "Kiwi",
    "Strawberry",
  ];
  const filteredList = fruits.filter((item) =>
    item.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <div className="min-h-screen bg-[#1e293b] flex items-center justify-center p-4">
        <div className="w-full max-w-sm bg-[#333] p-8 rounded-xl text-white shadow-2xl">
          <h2 className="text-xl font-bold mb-4 text-cyan-400">Filter App</h2>
          <input
            value={input}
            onChange={(e) => setinput(e.target.value)}
            className="w-full bg-cyan-400 p-2 mb-4 rounded-lg outline-none text-black font-semibold placeholder-slate-700"
            type="text"
            placeholder="Search fruits..."
          />
          <ul className="space-y-2">
            {/* 2. Condition: If our filtered list has items, map over it. Otherwise, show fallback text */}
            {filteredList.length > 0 ? (
              filteredList.map((item, index) => (
                <li
                  key={index}
                  className="bg-slate-700 p-3 pl-4 rounded-lg border border-slate-600 transition-all"
                >
                  {item}
                </li>
              ))
            ) : (
              <li className="text-rose-400 italic p-2">
                No items match your search.
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Js_Filter;
