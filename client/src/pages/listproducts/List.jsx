import React, { useState, useRef } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import ProductCard from "./ProductCard"; // now actually used
import Sitman from "../../images/back.png";
import Slow from "../../images/small.png";
import Tshirt from "../../images/whiteMan.png";
import Sidebar from "../componts/sidebar";

const categories = [
  "NEW",
  "SHIRT",
  "POLO SHIRT",
  "SHORT",
  "SUITS",
  "BEST SELLERS",
  "T-SHIRT",
  "JEANS",
  "JACKETS",
  "COATS",
];

const products = [
  {
    id: 1,
    image: Sitman, // fixed: was already correct
    category: "Shirts",
    title: "Classic Shirt",
    price: 45,
  },
  {
    id: 2,
    image: Slow, // fixed: removed the { } wrapper
    category: "Jeans",
    title: "Slim Fit Jeans",
    price: 60,
  },
  {
    id: 3,
    image: Tshirt, // fixed: removed the { } wrapper
    category: "Jackets",
    title: "Denim Jacket",
    price: 90,
  },
  {
    id: 4,
    image: Sitman,
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
  {
    id: 4,
    image: Slow,
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
  {
    id: 4,
    image: Sitman,
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
  {
    id: 4,
    image: Sitman,
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
  {
    id: 4,
    image: Slow,
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
  {
    id: 4,
    image: Sitman,
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
];

function ProductsList() {
  // Controls whether the FilterBar drawer is open on small/medium screens
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  // this is  for the search
  const [query, setQuery] = useState("");
  const [old, setNew] = useState("");

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-start mt-30">
        {/* SIDEBAR SLOT — visible normally from lg upward, hidden below lg */}
        <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-4 ">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/4 px-4">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 sm:text-center">
            Home / Products
          </div>

          {/* Title */}
          <h1 className="text-xl font-bold text-black sm:text-center text-left  my-2">
            PRODUCTS
          </h1>

          {/* SEARCH + FILTERS LABEL + CATEGORY SECTION */}
          {/* Small & medium screens: stacked (search -> filters label -> category) */}
          {/* Large screens: search and category flex side by side, category wraps into 2 rows */}
          <div className="mt-4 md:flex md:items-start md:gap-6">
            {/* SEARCH BAR */}
            {/* Full width on small screens, exactly half width from md upward (md and lg both get 50/50) */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1.5 w-full md:w-1/2">
              {/* Icon size fixed — was growing weirdly (h-8/h-10/h-15 with fixed w-4, causing a stretched/distorted icon) */}
              {/* Now width and height grow together, staying proportional at each breakpoint */}
              <Search className="w-7 h-7  lg:h-15 sm:w-5 sm:h-10 text-gray-500 shrink-0 rounded-2xl" />

              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search.."
                // text-right pushes the typed/placeholder text to the opposite side from the icon
                // text size now grows on larger screens instead of staying fixed at text-sm
                className="bg-transparent outline-none  text-sm sm:text-base lg:text-lg text-gray-700 placeholder:text-gray-500 w-full"
              />
            </div>

            {/* "Filters" label — shown below md only, since md now shows the side-by-side layout */}
            <div className="flex md:hidden items-center justify-between mt-3">
              <h4 className="text-sm font-semibold text-gray-800">Filters</h4>
            </div>

            {/* CATEGORY PILLS */}
            {/* Below md: wraps normally underneath the Filters label */}
            {/* md and up: takes the other half of the row, forced into exactly 2 rows */}
            <div
              className="
      flex flex-wrap gap-2 mt-3
      md:mt-0 md:w-1/2 md:grid md:grid-rows-2 md:grid-flow-col md:auto-cols-max
    "
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setNew(category)}
                  className={`px-10 py-1.5 rounded-md border border-gray-300 text-gray-600 text-sm whitespace-nowrap
                    ${
                      old === category
                        ? "bg-black text-white  border-black-900"
                        : "bg-white text-black border-gray-300 hover:border-gray-400"
                    }
                    `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FILTERS BUTTON — only shown below lg, sits cleanly below the category row */}
          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex lg:hidden items-center gap-2 mt-4 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {/* PRODUCT GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-8 pb-9">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                category={product.category}
                title={product.title}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>

      {/* OVERLAY — appears behind the filter drawer, closes it when clicked */}
      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* FILTER DRAWER — slides in from the left, only relevant below lg */}
      <div
        className={`
           fixed top-0 left-0 h-full w-4/5 sm:w-110
          bg-white z-50 lg:hidden
          overflow-y-auto
          transition-transform duration-200
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          {/* <h2 className="font-bold text-[#282828]">Filters</h2> */}
          <button onClick={() => setIsFilterOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <Sidebar />
      </div>
    </div>
  );
}

export default ProductsList;
