import React, { useRef } from "react";
// Removed useEffect as it's not needed for the final state of this component
import { Search, ArrowRight, ArrowLeft, MoveRight } from "lucide-react";
import "./home.css";

// img imports (kept as is)
import SitMan from "../images/SitMan.png";
import Black from "../images/blackshirt.png";
import B_shirt from "../images/Black_shirt.png";
import Blus_Tishert from "../images/pw_Tishirt.png";
import butyBlack from "../images/back.png";
import T_shirt from "../images/t-shirt.png";
import Tsmall_shirt from "../images/small.png";

const products = [
  // ... products data (kept as is) ...
  {
    id: 1,
    title: "Sneakers",
    price: "$49.99",
    material: "Leather",
    img: butyBlack,
  },
  {
    id: 2,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: T_shirt,
  },
  {
    id: 3,
    title: "Sunglasses",
    price: "$19.99",
    material: "Plastic",
    img: Tsmall_shirt,
  },
  {
    id: 4,
    title: "Headphones",
    price: "$79.99",
    material: "Metal & Plastic",
    img: Blus_Tishert,
  },
  {
    id: 5,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: T_shirt,
  },
  {
    id: 6,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: B_shirt,
  },
  {
    id: 7,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: SitMan,
  },
  {
    id: 8,
    title: "Sneakers",
    price: "$49.99",
    material: "Leather",
    img: butyBlack,
  },
];

function Home() {
  const slideRef = useRef(null);
  const SCROLL_AMOUNT = 320; // Adjusted for smoother, per-card scrolling

  const slideLeft = () => {
    if (slideRef.current) {
      // Smooth scroll is enabled by the 'scroll-smooth' class on the div
      slideRef.current.scrollLeft -= SCROLL_AMOUNT;
    }
  };

  const slideRight = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += SCROLL_AMOUNT;
    }
  };

  return (
    <div className="w-full p-6 md:p-10 lg:p-16">
      <div className="block md:flex lg:flex gap-10">
        {/* LEFT SIDE — TITLE/SEARCH SECTION (Now w-1/2 on md/lg) */}
        <div className="title space-y-4 w-full md:w-1/2 lg:w-1/2">
          {/* Small heading */}
          <div className="text-sm uppercase tracking-widest font-[300]">
            <p>NEW</p>
            <p>WOMEN</p>
            <p>KIDS</p>
          </div>

          {/* Search bar */}
          <div className="flex items-center rounded-md px-3 py-2 w-full max-w-sm bg-[#b0b0b0]">
            <Search className="w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search"
              className="ml-2 w-full outline-none cursor-pointer bg-transparent"
            />
          </div>

          {/* Big brand name and subtitles (kept as is) */}
          <div className="mt-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-show">
              NEW
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900] font-show text-[#282828]">
              COLLECTION
            </h1>
          </div>
          <p className="text-lg text-black-600 font-show">Summer</p>
          <p className="text-gray-600 text-show">2024</p>
        </div>

        {/* RIGHT SIDE — IMAGES SECTION (Now w-1/2 on md/lg) */}
        <div className="images flex gap-4 mt-10 md:mt-0 w-full md:w-1/2 lg:w-1/2">
          <img
            src={SitMan}
            alt="Image 1"
            className="w-[50%] rounded-md object-cover"
          />
          <img
            src={Black}
            alt="Image 2"
            className="w-[50%] rounded-md object-cover"
          />
        </div>
      </div>

      {/* Go to shop button (kept as is) */}
      <button className="flex items-center text-[#000] font-show gap-2 text-black mt-4 px-5 rounded-lg py-3 bg-[#b0b0b0] w-[80%]">
        Go to shop
        <ArrowRight className="w-5 hidden md:block lg:block h-5" />
      </button>

      {/* --- PRODUCT SLIDER SECTION --- */}
      <div className="mt-10">
        <div className="flex items-end justify-between mb-4">
          <section className="font-show">
            <h3 className="text-2xl font-bold text-[#282828]">NEW</h3>
            <h3 className="text-2xl font-bold text-[#282828]">THIS WEEK</h3>
          </section>
          <article className="text-blue-900 cursor-pointer hover:underline">
            <a href="#" className="text-[#5E5E5E] font-gork text-sm">
              see all
            </a>
          </article>
        </div>

        {/* SCROLL CONTAINER WRAPPER */}
        <div className="relative">
          {/* Arrow Left Button */}
          <ArrowLeft
            onClick={slideLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg cursor-pointer"
          />

          {/* THE SLIDER DIV */}
          <div
            ref={slideRef} // <--- Ref attached here
            id="slide"
            // Corrected classes for scroll and item visibility:
            className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
          >
            {products.map((items) => (
              <div
                key={items.id}
                // Item width ensures 4 are visible on medium screens and up
                className="inline-block w-1/2 sm:w-1/3 md:w-[calc(25%-1rem)] h-[300px] mx-3 p-2 align-top cursor-pointer hover:scale-105 ease-in-out duration-300"
              >
                <div className="bg-white rounded-md shadow-md h-full flex flex-col justify-between my-5">
                  <img
                    src={items.img}
                    alt={items.alt}
                    className="w-full h-48 rounded-md"
                  />
                  <div className="flex justify-between items-start gap-5 px-2">
                    <div>
                      <h3 className="text-lg font-show truncate">
                        {items.title}
                      </h3>
                      <p className="text-sm text-gray-500 font-gork truncate">
                        {items.material}
                      </p>
                    </div>
                    <p className="text-pink-600 font-bold">${items.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrow Right Button */}
          <ArrowRight
            onClick={slideRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white p-2 rounded-full shadow-lg cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
