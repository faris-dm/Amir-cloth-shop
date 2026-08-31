import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search, SlidersHorizontal, X, ArrowLeft } from "lucide-react";
import ProductCard from "./ProductCard";
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

function ProductsList() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:2300/api/products")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((json) => {
        setProducts(json.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  // FILTER: search by title
  let filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  // FILTER: by selected category pill (skip when nothing selected)
  if (selectedCategory) {
    filteredProducts = filteredProducts.filter(
      (product) => product.category === selectedCategory
    );
  }

  // Clicking the already-active pill deselects it (shows all again)
  const handleCategoryClick = (category) => {
    setSelectedCategory((prev) => (prev === category ? "" : category));
  };

  return (
    <div>
      <div className="flex flex-col lg:flex-row w-full items-start mt-30">
        {/* SIDEBAR SLOT — visible from lg upward */}
        <div className="hidden lg:block lg:w-1/4 lg:sticky lg:top-4">
          <Sidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="w-full lg:w-3/4 px-4">
          {/* BACK BUTTON */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-3"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <div className="text-sm text-gray-500 sm:text-center">
            Home / Products
          </div>

          <h1 className="text-xl font-bold text-black sm:text-center text-left my-2">
            PRODUCTS
          </h1>

          <div className="mt-4 md:flex md:items-start md:gap-6">
            {/* SEARCH BAR */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1.5 w-full md:w-1/2">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-gray-500 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search.."
                className="bg-transparent outline-none text-sm sm:text-base lg:text-lg text-gray-700 placeholder:text-gray-500 w-full"
              />
            </div>

            <div className="flex md:hidden items-center justify-between mt-3">
              <h4 className="text-sm font-semibold text-gray-800">Filters</h4>
            </div>

            {/* CATEGORY PILLS */}
            <div
              className="
                flex flex-wrap gap-2 mt-3
                md:mt-0 md:w-1/2 lg:grid lg:grid-rows-2 lg:grid-flow-col lg:auto-cols-fr
              "
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryClick(category)}
                  className={`px-4 py-1.5 rounded-md border border-gray-300 text-gray-600 text-sm whitespace-nowrap
                    ${
                      selectedCategory === category
                        ? "bg-black text-white border-black-900"
                        : "bg-white text-black border-gray-300 hover:border-gray-400"
                    }
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsFilterOpen(true)}
            className="flex lg:hidden items-center gap-2 mt-4 px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>

          {filteredProducts.length === 0 ? (
            <p>No products available.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-8 pb-9">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  category={product.category}
                  title={product.title}
                  price={product.price}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {isFilterOpen && (
        <div
          onClick={() => setIsFilterOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
        />
      )}

      {/* FILTER DRAWER */}
      <div
        className={`
          fixed top-0 left-0 h-full w-4/5 sm:w-[380px]
          bg-white z-50 lg:hidden
          overflow-y-auto
          transition-transform duration-200
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="flex items-center justify-between px-5 pt-5">
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
