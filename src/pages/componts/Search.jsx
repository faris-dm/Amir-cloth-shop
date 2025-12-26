// import React from "react";
// import Search from "lucide-react";

// function SearchSec() {
//   const searchDev =
//     "flex items-center rounded-md px-3 py-2 w-full max-w-lg bg-[#b0b0b0]";
//   return (
//     <>
//       <div className={searchDev}>
//         <Search className="w-5 h-5 text-gray-500" />
//         <input type="text" placeholder="Search" className={searchInputStyle} />
//       </div>
//     </>
//   );
// }

// export default SearchSec;
import React from "react";
// Correct: Lucide icons must be inside { }
import { Search } from "lucide-react";

function SearchSection() {
  // Container style
  const searchDev =
    "flex items-center rounded-md px-3 py-2 w-full max-w-lg bg-[#b0b0b0]";

  // FIX: This was missing, causing your "ReferenceError"
  const searchInputStyle =
    "bg-transparent outline-none ml-2 w-full text-black placeholder-gray-600";

  return (
    <>
      <div className={searchDev}>
        {/* The Icon */}
        <Search className="w-5 h-5 text-gray-500" />

        {/* The Input */}
        <input
          type="text"
          placeholder="Search items..."
          className={searchInputStyle}
        />
      </div>
    </>
  );
}

export default SearchSection;
