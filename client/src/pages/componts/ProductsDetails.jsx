import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const API_BASE_URL = "http://localhost:2300";

import mainImg from "../../images/back.png";
import angle1 from "../../images/back.png";
import angle2 from "../../images/small.png";
import angle3 from "../../images/whiteMan.png";
import angle4 from "../../images/back.png";
import angle5 from "../../images/small.png";

// Thumbnail list (Section B) — each one is a different angle of the same product
// const thumbnails = [angle1, angle2, angle3, angle4, angle5];

// Available colors — later these could come from the product's DB data
const colors = [
  "#000000",
  "#FFFFFF",
  "#8B8B8B",
  "#4B5320",
  "#1E3A8A",
  "#abcab1",
];

// Available sizes
const sizes = ["XS", "S", "M", "L", "XL", "2XL"];

function ProductsDetails() {
  const [activeImage, setActiveImage] = useState(null);
  // const [activeImage, setActiveImage] = useState(mainImg);
  const { id } = useParams();
  const [images, setImages] = useState([]);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Tracks which color swatch is selected
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  // Tracks which size is selected
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/imageDetails/${id}`)
      .then((res) => res.json())
      .then((json) => {
        const data = json.data || [];
        setImages(data);
        if (data.length > 0) {
          setActiveImage(data[0].image_url);
        }
      })
      .catch((err) => console.error("Failed to load images:", err));
  }, [id]);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <div>
      {/* // gap-16 / gap-24 creates a big, clearly visible gap between the two */}
      {/* sections on large screens */}
      <div className="flex flex-col lg:flex-row gap-14 lg:gap-30 xl:gap-38 mx-4 sm:mx-8 lg:mx-16 my-6 lg:my-20 pt-30 ">
        {/* ============ IMAGE SECTION ============ */}
        <div className="w-full lg:w-1/2 gap-3.5">
          {/* Section A + Section B row */}
          {/* Small/medium: big image on top, thumbnails as a row underneath */}
          {/* Large: SWAPPED — thumbnails column on the LEFT, big image on the RIGHT */}
          <div className="flex flex-col sm:flex-row  gap-3">
            {/* SECTION A — big image display, gray background, rectangle shape */}
            <div className="bg-gray-100 rounded-md w-full h-90.5 sm:h-112.5 lg:h-200 flex items-center justify-center overflow-hidden">
              <img
                src={`${API_BASE_URL}${activeImage}`} // ✅ use this thumbnail's own image
                alt="Selected product angle"
                className="w-full h-full object-cover"
              />
            </div>

            {/* SECTION B — thumbnail picker */}
            {/* Row on small/medium (below the big image) */}
            {/* Vertical column on large screens, now sitting on the LEFT of the big image */}
            <div className="flex sm:flex-col gap-3 justify-center sm:justify-start">
              {/* {thumbnails.map((thumb, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(thumb)}
                  
                  
                  className={`
                  w-22 h-20 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 shrink-0
                  transition-opacity duration-150
                  ${
                    activeImage === thumb
                      ? "opacity-100 border-black"
                      : "opacity-50 border-gray-200 hover:opacity-75"
                  }
                `}
                >
                  <img
                    src={thumb}
                    alt={`Angle ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))} */}

              {images.map((img) => (
                <button
                  key={img.id}
                  onClick={() => setActiveImage(img.image_url)}
                  className={`
                    w-22 h-20 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 shrink-0
                    transition-opacity duration-150
                    ${
                      activeImage === img.image_url
                        ? "opacity-100 border-black"
                        : "opacity-50 border-gray-200 hover:opacity-75"
                    }
                  `}
                >
                  <img
                    src={`${API_BASE_URL}${img.image_url}`} // ✅ now responds to thumbnail clicks
                    alt="Selected product angle"
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============ DETAILS SECTION ============ */}
        <div className="w-full lg:w-1/2 lg:min-h-[600px] lg:mt-20 xl:min-h-[700px]">
          <h1 className="text-2xl font-bold text-black lg:pb-2">
            {product.title}
          </h1>

          <p className="text-xl font-semibold text-black mt-2">
            {product.price}
          </p>

          <p className="text-lg text-gray-500 mt-1">MRP incl. of all taxes</p>

          <p className="text-black text-lg mt-4 leading-relaxed">
            {product.description}
          </p>

          {/* ===== COLOR SECTION ===== */}
          {/* Now styled like the Sizes buttons — bigger rectangles with a border, not small squares */}
          <div className="my-6">
            <h4 className="text-lg text-gray-500">Color</h4>
            <div className="flex gap-6 mt-2">
              {colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  // The actual color fills the button's background directly
                  style={{ backgroundColor: color }}
                  className={`
                   w-15 h-15 rounded-md border-2
                  transition-all duration-150
                  ${
                    selectedColor === color
                      ? "border-black scale-105"
                      : "border-gray-300 hover:border-gray-400"
                  }
                `}
                />
              ))}
            </div>
          </div>

          {/* ===== SIZE SECTION ===== */}
          <div className="mt-8 mb-4">
            <h4 className="text-md font-medium text-black">Size</h4>
            <div className="flex flex-wrap gap-3 mt-3">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`
                 w-15 h-14 flex items-center justify-center rounded-md border text-sm font-medium
                  transition-colors duration-150
                  ${
                    selectedSize === size
                      ? "bg-black text-white border-black"
                      : "bg-white text-black border-gray-300 hover:border-gray-400"
                  }
                `}
                >
                  {size}
                </button>
              ))}
            </div>

            <p className="text-md text-gray-500 my-3">
              Find your size{" "}
              <span className="underline cursor-pointer text-gray-700">
                | Measurement Guide
              </span>
            </p>
          </div>

          {/* ===== ADD TO CART BUTTON ===== */}
          <button
            className="
            sm:w-full lg:w-95 mt-8 py-5  rounded-md
            bg-gray-200 text-black font-medium
            hover:bg-gray-300 active:bg-gray-400
            transition-colors duration-150 cursor-pointer
          "
          >
            ADD
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductsDetails;
