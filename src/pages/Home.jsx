import React, { useRef } from "react";
// Removed MoveRight as it's not used
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import "./home.css";

// img imports (kept as is)
import SitMan from "../images/SitMan.png";
import stand from "../images/standMan.png";
import half from "../images/halfCloth.png";
import slow from "../images/slow.png";

import Black from "../images/blackshirt.png";
import B_shirt from "../images/Black_shirt.png";
import Blus_Tishert from "../images/pw_Tishirt.png";
import butyBlack from "../images/back.png";
import T_shirt from "../images/t-shirt.png";
import Tsmall_shirt from "../images/small.png";

import WhiteMan from "../images/whiteMan.png";
import glass from "../images/glass.png";
import standMan from "../images/standMan.png";
import { title } from "framer-motion/client";

const smallImages = [
  {
    id: 10,
    title: "Basic Heavy T-Shirt",
    price: "$199.99",
    material: "cotton",
    img: glass,
  },
  {
    id: 11,
    title: "Stright Fit Jeans",
    price: "$299.99",
    material: "Cotton Jeans",
    img: SitMan,
  },
  {
    id: 12,
    title: "Basic Heavy T-Shirt",
    price: "$299.99",
    material: "Cotton Jeans",
    img: WhiteMan,
  },
  {
    id: 12,
    title: "Basic Heavy T-Shirt",
    price: "$299.99",
    material: "Cotton Jeans",
    img: WhiteMan,
  },
  {
    id: 11,
    title: "Stright Fit Jeans",
    price: "$299.99",
    material: "Cotton Jeans",
    img: SitMan,
  },
];

//   this  is final array
const fooetImages = [
  {
    img: slow,
  },
  {
    img: stand,
  },
  {
    img: half,
  },
];
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
  const NewSlide = useRef(null);
  const SCROLL_AMOUNT = 320;

  const slideLeft = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft -= SCROLL_AMOUNT;
    }
  };

  const slideRight = () => {
    if (slideRef.current) {
      slideRef.current.scrollLeft += SCROLL_AMOUNT;
    }
  };

  const NewslideLeft = () => {
    if (NewSlide.current) {
      NewSlide.current.scrollLeft -= SCROLL_AMOUNT;
    }
  };

  const NewslideRight = () => {
    if (NewSlide.current) {
      NewSlide.current.scrollLeft += SCROLL_AMOUNT;
    }
  };

  return (
    <div className="w-full p-6 md:p-10 lg:p-16">
      <div className="mb-[30%] md:mb-[20%]">
        <div className="block md:flex lg:flex gap-10 ">
          {/* LEFT SIDE — TITLE/SEARCH SECTION */}
          <div className="title space-y-4 w-full md:w-1/2 lg:w-1/2">
            {/* Small heading (kept as is) */}
            <div className="text-sm uppercase tracking-widest font-[300]">
              <p>NEW</p>
              <p>WOMEN</p>
              <p>KIDS</p>
            </div>

            {/* Search bar (kept as is) */}
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

          {/* RIGHT SIDE — IMAGES SECTION (kept as is) */}
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

        {/* Go to shop button (FIXED: w-40% for all screens, ArrowRight class simplified) */}
        <button className="flex items-center  lg:text-right text-[#000] font-show gap-2 text-black mt-4 px-5 rounded-lg py-3 bg-[#b0b0b0]  w-[45%] md:w-[35%]">
          Go to shop
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

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

        {/* 1. THE SLIDER DIV (REMOVED ABSOLUTE ARROWS) */}
        <div
          ref={slideRef}
          id="slide"
          // Scrollbar must be hidden via external CSS
          className="w-full h-fit overflow-x-scroll whitespace-nowrap scroll-smooth"
        >
          {products.map((items) => (
            <div
              key={items.id}
              className="inline-block w-1/2 sm:w-1/3 md:w-[calc(25%-1rem)] mx-3 p-2 align-top cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              <div className="bg-white rounded-md shadow-md h-full flex flex-col justify-between my-10  ">
                <img
                  src={items.img}
                  alt={items.alt}
                  className="w-full h-[42vh] rounded-md"
                />
                <div className="flex justify-between items-start gap-5 px-2 ">
                  <div className="">
                    <h3 className="text-lg font-show truncate pt-5">
                      {items.title}
                    </h3>
                    <p className="text-sm text-gray-500 font-gork truncate">
                      {items.material}
                    </p>
                  </div>
                  <p className="text-pink-600 pt-5 font-bold">{items.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. ARROWS SECTION (New Location: BELOW the slider, CENTERED, Black, Rounded) */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <ArrowLeft
            onClick={slideLeft}
            // Styling for black arrow, rounded corners, and shadow
            className="w-8 h-8 text-[#B0B0B0] bg-gray-300 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-400 transition duration-150"
          />

          <ArrowRight
            onClick={slideRight}
            // Styling for black arrow, rounded corners, and shadow
            className="w-8 h-8 text-[#B0B0B0]  bg-gray-300 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-400 transition duration-150"
          />
        </div>
      </div>

      <div className="flex items-end justify-between my-7">
        <section className="font-gork">
          <h3 className="text-3xl  font-[1000] text-[#282828]">XlV</h3>
          <h3 className="text-3xl  font-[900] text-[#282828]">COLLECTIONS</h3>
          <h3 className="text-3xl py-1 font-[200] text-[#282828]">23-24</h3>
          <div className="flex items-center gap-5 text-sm my-4 text-[#b0b0b0]">
            <h4 className=" hover:underline cursor-pointer"> ALL</h4>
            <h4 className=" hover:underline cursor-pointer"> Men</h4>
            <h4 className=" hover:underline cursor-pointer"> Women</h4>
            <h4 className=" hover:underline cursor-pointer"> Kid</h4>
          </div>
        </section>
        <article className="text-blue-900 cursor-pointer hover:underline text-right">
          <a href="#" className="text-[#5E5E5E] font-gork text-sm">
            see all
          </a>
        </article>
      </div>
      <div
        ref={NewSlide}
        id="slide"
        // Scrollbar must be hidden via external CSS
        className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
      >
        {smallImages.map((items) => (
          <div
            key={items.id}
            className="inline-block w-1/2 sm:w-1/3 md:w-[calc(25%-1rem)]  mx-3 p-2 align-top cursor-pointer hover:scale-105 ease-in-out duration-300"
          >
            <div className="bg-white rounded-md shadow-md h-full flex flex-col justify-between my-5">
              <img
                src={items.img}
                alt={items.alt}
                className="w-full h-80 rounded-md"
              />
              <div className="flex justify-between items-start gap-5 px-2">
                <div className="py-5">
                  <h3 className="text-lg font-show truncate text-sm ">
                    {items.title}
                  </h3>
                  <p className="text-xs text-gray-500 font-gork truncate ">
                    {items.material}
                  </p>
                </div>
                <p className="text-pink-600 font-bold text-xs py-5">
                  ${items.price}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center space-x-4 mt-6 mb-10">
        <ArrowLeft
          onClick={NewslideLeft}
          // Styling for black arrow, rounded corners, and shadow
          className="w-8 h-8 text-[#B0B0B0] bg-gray-300 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-400 transition duration-150"
        />

        <ArrowRight
          onClick={NewslideRight}
          // Styling for black arrow, rounded corners, and shadow
          className="w-8 h-8 text-[#B0B0B0]  bg-gray-300 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-400 transition duration-150"
        />
      </div>

      <h2 className="text-center capitaliz font-gork   font-[400] text-2xl my-6 text-[#282828]">
        Our Approch To Fashion Design
      </h2>

      <div className="lowercase text-gray-500  font-gork text-sm ">
        <p className=" text-center   text-xs w-[95%] my-5">
          <p className="pb-1 ">
            {" "}
            at the alagant vogue, we blend creativity with craftsmanship to
            create
          </p>
          <p className="pb-1">
            {" "}
            fashion that transcends trend and stands the test of time each
          </p>
          <p className="pb-1">
            {" "}
            design is metculously crafted ,ensuring the highest quelity
          </p>
          exqulsite finish{" "}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
          <div class="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto mt-0">
            <img src={half} alt="" />{" "}
          </div>
          <div class="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto mt-0">
            <img src={standMan} alt="" />{" "}
          </div>
          <div class="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto mt-0">
            <img src={SitMan} alt="" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
