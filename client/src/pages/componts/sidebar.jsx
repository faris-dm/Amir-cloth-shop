import React, { useState } from "react";
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
  const [normal, selected] = useState("");
  const [openSection, setOpenSection] = useState("category");
  const [isOpen, setIsOpen] = useState(true);

  function toggleSection(id) {
    setOpenSection(openSection === id ? null : id);
  }

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  return (
    // FIX: full width by default, capped on larger screens instead of a hardcoded ml-5
    <div className="w-full max-w-full sm:max-w-sm px-4 sm:px-0 sm:ml-5">
      <div>
        <h2 className={titleStyle}>Filter</h2>
      </div>

      <section>
        <div>
          {/* SIZES — FIX: wraps instead of overflowing on narrow screens */}
          <div className="sizes mt-4">
            <h4 className="font-bold text-lg pb-4">Sizes</h4>
            <div className="flex flex-wrap gap-3 sm:gap-5">
              {Sizes.map((item) => (
                <button
                  key={item}
                  onClick={() => selected(item)}
                  className={`w-11 h-9 sm:w-12 sm:h-10 flex items-center justify-center border text-sm sm:text-base font-medium
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

          {/* AVAILABILITY — FIX: w-95 replaced with w-full so it respects parent width at any screen size */}
          <div>
            <div className="border-b border-gray-200 py-4 w-full">
              <button
                onClick={toggleOpen}
                className="flex items-center justify-between w-full"
              >
                <h3 className="text-base sm:text-lg font-semibold">
                  Availability
                </h3>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="flex flex-col gap-3 mt-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="in-stock"
                      className="w-4 h-4 rounded border-gray-300 accent-black shrink-0"
                    />
                    <label className="text-sm sm:text-md font-normal text-gray-900">
                      Available <span className="text-gray-800">(128)</span>
                    </label>
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 accent-black shrink-0"
                    />
                    <label className="text-sm sm:text-md text-gray-700">
                      Out of Stock <span className="text-gray-400">(12)</span>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* CATEGORY / COLORS / PRICE / ETC — FIX: w-94 replaced with w-full */}
          <div className="w-full">
            {filterSections.map((section) => (
              <div
                key={section.id}
                className="border-b border-gray-200 py-5 sm:py-7"
              >
                <button
                  onClick={() => toggleSection(section.id)}
                  className="flex items-center justify-between w-full"
                >
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900">
                    {section.title}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-500 transition-transform shrink-0 ${
                      openSection === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openSection === section.id && (
                  <div className="flex flex-col gap-2 mt-3">
                    {section.items.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 text-sm sm:text-md text-gray-700 mb-1"
                      >
                        <input
                          type="checkbox"
                          className="w-4 h-4 accent-black shrink-0"
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
