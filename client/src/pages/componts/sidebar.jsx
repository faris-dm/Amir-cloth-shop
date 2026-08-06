import React, { useState, useRef } from "react";
import { ChevronDown } from "lucide-react";

import "../../pages/home.css";

const filterSections = [
  {
    id: "category",
    title: "Category",
    items: ["T-Shirts", "Shirts", "Jeans", "Jackets", "Shoes"],
  },
  {
    id: "colors",
    title: "Colors",
    items: ["Black", "White", "Blue", "Gray", "Green"],
  },
  {
    id: "price",
    title: "Price Range",
    items: ["Under $25", "$25 - $50", "$50 - $100", "Over $100"],
  },
  {
    id: "collections",
    title: "Collections",
    items: ["Summer 2026", "Streetwear", "Formal", "Basics"],
  },
  {
    id: "tags",
    title: "Tags",
    items: ["New Arrival", "Best Seller", "On Sale", "Limited"],
  },
  {
    id: "ratings",
    title: "Ratings",
    items: ["4 stars & up", "3 stars & up", "2 stars & up"],
  },
];

const Sizes = ["XS", "S", "M", "L", "XL"];
function FilterBar() {
  const titleStyle = "text-[#282828] font-bold";
  // title style is for reptitive style created by user
  const [normal, selected] = useState("");
  //  this normal  use state is for ths sizes
  const [openSection, setOpenSection] = useState("category");

  const [isOpen, setIsOpen] = useState(true);
  //  this isOpen  useState is for the avlability accordions

  function toggleSection(id) {
    if (openSection === id) {
      setOpenSection(null);
    } else {
      setOpenSection(id);
    }
  }
  //   this functions is  for the avalible accordions
  function toggleOpen() {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }

  return (
    <div className="ml-5 ">
      <div className="">
        <h2 className={titleStyle}> Filter</h2>
      </div>
      <section>
        <div>
          {/* there is ausesate in this sections used to  shange the bg called  normal and selected */}
          <div className="sizes">
            <h4 className="font-normal text-sm pb-3">Sizes</h4>
            <div className="flex gap-5">
              {Sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => selected(item)}
                  className={`w-10 h-8 flex items-center justify-center  border text-xs font-medium
            ${
              normal === item
                ? "bg-black text-white border-black"
                : "bg-white text-black border-gray-300 hover:border-gray-400"
            }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="border-b border-gray-200 py-4 w-95">
              <button
                onClick={toggleOpen}
                className="flex items-center justify-between w-full"
              >
                <h3 className="text-lg font-semibold">Availability</h3>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/*  this isopen usesate is used  for the accordion of the avalable section */}
              {isOpen && (
                <div className="flex flex-col gap-2 mt-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="in-stock"
                      className="w-4 h-4 rounded border-gray-300 accent-black"
                    />
                    <label className="text-md font-normal text-gray-900">
                      Available <span className="text-gray-800">(128)</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-black"
                    />
                    <label className="text-sm text-gray-700">
                      Out of Stock <span className="text-gray-400">(12)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/*  this accodions is sued to diplay the category and the reating section */}
          <div className="w-94">
            {filterSections.map((section) => (
              <div key={section.id} className="border-b border-gray-200 py-4">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full"
                >
                  <h3 className="text-base font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSection === section.id && (
                  <div className="flex flex-col gap-2 mt-3">
                    {section.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-black"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default FilterBar;
