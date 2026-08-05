import React from "react";
import { Search } from "lucide-react";
import ProductCard from "./ProductCard";
import Sitman from "../../images/back.png";
import Slow   from "../../images/small.png"
import Tshirt from "../../images/whiteMan.png";

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
    image: Sitman,
    category: "Shirts",
    title: "Classic Shirt",
    price: 45,
  },
  {
    id: 2,
    image: {Slow},
    category: "Jeans",
    title: "Slim Fit Jeans",
    price: 60,
  },
  {
    id: 3,
    image: {Tshirt},
    category: "Jackets",
    title: "Denim Jacket",
    price: 90,
  },
  {
    id: 4,
    image: "https://placehold.co/300x400",
    category: "T-Shirts",
    title: "Basic Tee",
    price: 25,
  },
];

function ProductsList() {
  return (
    <div>
      {/* // Page wrapper — holds Sidebar (25%) + Main content (75%) side by side // */}
      {/* flex-col on mobile (stacked), flex-row on larger screens (side by side) */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* SIDEBAR — 25% width on large screens, full width on mobile */}
        <div className="w-full lg:w-1/4">
          {/* Sidebar component will be imported and placed here */}
          {/* <Sidebar /> */}
        </div>

        {/* MAIN CONTENT — 75% width on large screens, full width on mobile */}
        <div className="w-full lg:w-3/4 px-4">
          {/* Breadcrumb — always aligned left */}
          <div className="text-sm text-gray-500">Home / Products</div>

          {/* Page title — bold black, medium size */}
          <h1 className="text-xl font-bold text-black mt-2">PRODUCTS</h1>

          {/* Search bar + Category filters row */}
          {/* Stacked on mobile, side by side on larger screens */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4">
            {/* Search bar — gray background, icon left, placeholder text right */}
            <div className="flex items-center justify-between bg-gray-100 rounded-md px-3 py-2 w-full sm:w-1/2">
              <Search className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-500">Search products...</span>
            </div>

            {/* Category pills — wrap onto multiple lines if they don't fit */}
            <div className="flex flex-wrap gap-2 w-full sm:w-1/2">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-3 py-1.5 rounded-md border border-gray-300 text-gray-600 text-sm"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
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
  );
}

export default ProductsList;
