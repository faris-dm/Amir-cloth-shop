import React, { useRef, useState } from "react";
// Removed MoveRight as it's not used
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import "./home.css";
import Accordion from "./Accordion";

// img imports (kept as is)
import SitMan from "../images/sitMan.png";
import stand from "../images/standMan.png";
import half from "../images/halfCloth.png";
import slow from "../images/slow.png";
import PlayLogo from "../images/playLogo.png";
import Black from "../images/blackshirt.png";
import B_shirt from "../images/Black_shirt.png";
import Blus_Tishert from "../images/pw_Tishirt.png";
import butyBlack from "../images/back.png";
import T_shirt from "../images/t-shirt.png";
import Tsmall_shirt from "../images/small.png";

import WhiteMan from "../images/whiteMan.png";
import glass from "../images/glass.png";
import standMan from "../images/standMan.png";
import Icon from "./icon";

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
  const [isAccordionVisible, setIsAccordionVisible] = useState(true);
  const handleToggle = () => {
    setIsAccordionVisible((prev) => !prev);
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
    <div>
      <div className="w-full p-6 md:p-10 lg:p-16">
        <div className="mb-[30%] md:mb-[20%] relative">
          <div className="block md:flex lg:flex gap-10 ">
            {/* LEFT SIDE — TITLE/SEARCH SECTION */}
            <div className="title space-y-4 w-full md:w-1/2 lg:w-1/2">
              {/* Small heading (kept as is) */}
              <div className="text-sm uppercase tracking-widest font-light">
                <p>NEW</p>
                <p>WOMEN</p>
                <p>KIDS</p>
              </div>

              {/* Search bar (kept as is) */}
              <div className="flex items-center rounded-md px-3 py-2 w-full max-w-lg bg-[#b0b0b0]">
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-show text-[#282828]">
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
          <button className="flex md:flex items-center  lg:text-right text-black font-show gap-2 mt-4 px-5 rounded-lg py-3 bg-[#b0b0b0]  w-[45%] md:w-[35%] lg:w-[20%]">
            Go to shop
            <ArrowRight className="w-5 h-5 hidden md:block lg:block" />
          </button>
          <div className=" absolute left-50">
            <ArrowRight className="w-5 h-5 my-8 md:hidden lg:hidden text-center" />
          </div>
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
                      <h3 className="text-lg  md:text-xs lg:text-lg  font-show truncate pt-5 ">
                        {items.title}
                      </h3>
                      <p className="text-sm md:text-xs text-gray-500 font-gork truncate py-2">
                        {items.material}
                      </p>
                    </div>
                    <p className="text-pink-600 pt-5 font-bold md:text-xs">
                      {items.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 2. ARROWS SECTION (New Location: BELOW the slider, CENTERED, Black, Rounded) */}
          <div className="flex justify-center items-center space-x-4 mt-6 ">
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
            <h3 className="text-3xl  font-black text-[#282828]">COLLECTIONS</h3>
            <h3 className="text-3xl py-1 font-extralight text-[#282828]">
              23-24
            </h3>
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
                  className="w-full h-65 rounded-md"
                />
                <div className="flex justify-between items-start gap-3 px-2">
                  <div className="py-5">
                    <h3 className="font-show truncate text-[6px]">
                      {items.title}
                    </h3>
                    <p className="text-xs text-[10px] text-gray-500 font-gork truncate ">
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
        <div className="hidden justify-center items-center space-x-4 mt-6 mb-10 ">
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
        <div className="mb-4">
          <Icon onClick={handleToggle} isOpen={isAccordionVisible} />
        </div>

        {/* ⭐ ADD THIS SECTION ⭐ */}
        {/* {isAccordionVisible && (
          <div className="w-full max-w-2xl mx-auto">
            <Accordion />
          </div>
        )} */}
        <h2
          className="text-center capitalize font-gork font-normal text-2xl my-6 text-[#282828]
               md:text-3xl md:my-8 
               lg:text-4xl lg:my-10  mt-25 pt-12"
        >
          Our Approach To Fashion Design
        </h2>

        <div
          className="lowercase text-gray-500 font-gork text-sm 
                md:text-base 
                lg:text-lg pb-15"
        >
          <div
            className="text-center mx-auto my-5 
                  md:w-[90%] 
                  lg:w-[80%] lg:max-w-2xl"
          >
            <p
              className="text-xs pb-1 
                  md:text-sm 
                  lg:text-base"
            >
              At The Alagant Vogue, we blend creativity with craftsmanship to
              create
            </p>
            <p
              className="text-xs pb-1 
                  md:text-sm 
                  lg:text-base"
            >
              fashion that transcends trends and stands the test of time. Each
            </p>
            <p
              className="text-xs pb-1 
                  md:text-sm 
                  lg:text-base"
            >
              design is meticulously crafted, ensuring the highest quality and
            </p>
            <p
              className="text-xs 
                  md:text-sm 
                  lg:text-base"
            >
              exquisite finish.
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex gap-5 w-full my-7 mb-30">
            {/* w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] h-auto mt-0 */}
            <div class="w-1/3 ">
              <img
                src={slow}
                alt=""
                class="w-full h-48  md:h-[70vh] object-cover"
              />{" "}
            </div>
            <div class="w-1/3">
              <img
                src={standMan}
                alt=""
                class="w-full h-48  md:h-[70vh] object-cover"
              />{" "}
            </div>
            <div class="w-1/3">
              <img
                src={SitMan}
                class="w-full h-48  md:h-[70vh] object-cover"
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
      {/* grid grid-cols-2 place-items-center h-40 justify-around */}
      <footer className="bg-[#EBEBEB]   pt-6 pb-8">
        <div className="grid grid-cols-2 items-center px-6 pb-8">
          <div className="text-[9px] text-[#9a9393]  font-lg   grid gap-5 pt-6 ">
            <div className="mb-7 lowrcase ">
              <p className="hover:underline text-[10px] py-1">INFO</p>
              <section>
                <p className="hover:underline text-[10px] md:text-[12px] py-px">
                  PRICING
                </p>
                <p className="hover:underline text-[10px] md:text-[12px] py-px">
                  ABOUT
                </p>
                <p className="hover:underline text-[10px] md:text-[12px] py-px">
                  CONTACT
                </p>
              </section>
            </div>
            <div>
              <p className="hover:underline text-[12px] py-1">LANGUAGE</p>
              <section className="text-[10px] md:text-[15px]">
                <p className="hover:underline text-[10px] md:text-[12px] py-px">
                  ENG
                </p>
                <p className="hover:underline text-[10px] md:text-[12px] py-px">
                  ESP
                </p>
                <p className="hover:underline text-[10px] md:text-[12px] py-px">
                  SVE
                </p>
              </section>
            </div>
          </div>
          {/*   this dev is for text */}
          <div className="">
            <article className="">
              {" "}
              <h3 className="text-xs text-[#D6D6D6]">TECHNOLOGIES</h3>
              <div className="font-show text-[30px]  font-black text-[#262626] mt-7">
                <img src={PlayLogo} alt="" />

                <h2 className="">XlV</h2>
                <h3 className="mt">QR</h3>
              </div>
            </article>
          </div>
        </div>
      </footer>

      {/* end here */}
    </div>
  );
}

export default Home;
