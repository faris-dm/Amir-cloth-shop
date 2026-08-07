import { useState } from "react";
import { Search } from "lucide-react";

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

function SearchAndCategories() {
  const [query, setQuery] = useState("");

  return (
    <div className="mt-4">
      {/* SEARCH BAR — smaller/normal size now, full width always */}
      <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1.5 w-full lg:w-auto lg:flex-1">
        <Search className="w-4 h-4 text-gray-500 shrink-0" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-500 w-full"
        />
      </div>

      {/* "Filters" label row — only shown on small/medium screens, sits to the side */}
      <div className="flex lg:hidden items-center justify-between mt-3">
        <h4 className="text-sm font-semibold text-gray-800">Filters</h4>
      </div>

      {/* CATEGORY PILLS */}
      {/* Small/medium screens: normal wrapping row below the Filters label */}
      {/* Large screens: exactly 2 rows, sits beside the search bar */}
      <div
        className="
          flex flex-wrap gap-2 mt-3
          lg:mt-0 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:auto-cols-max lg:gap-2
        "
      >
        {categories.map((category) => (
          <button
            key={category}
            className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 text-sm whitespace-nowrap"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default SearchAndCategories;
