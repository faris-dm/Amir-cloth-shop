import React, { useRef, useState } from "react";
import { Search, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import "./home.css";
import Accordion from "./Accordion";

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
// import Footer from "./componts/Footer";

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
    id: 13,
    title: "Basic Heavy T-Shirt",
    price: "$299.99",
    material: "Cotton Jeans",
    img: WhiteMan,
  },
  {
    id: 14,
    title: "Stright Fit Jeans",
    price: "$299.99",
    material: "Cotton Jeans",
    img: SitMan,
  },
];

const fooetImages = [{ img: slow }, { img: stand }, { img: half }];

const products = [
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

  const [isAccordionVisible, setIsAccordionVisible] = useState(true);
  const handleToggle = () => setIsAccordionVisible((prev) => !prev);

  const slideLeft = () => {
    if (slideRef.current) slideRef.current.scrollLeft -= SCROLL_AMOUNT;
  };
  const slideRight = () => {
    if (slideRef.current) slideRef.current.scrollLeft += SCROLL_AMOUNT;
  };
  const NewslideLeft = () => {
    if (NewSlide.current) NewSlide.current.scrollLeft -= SCROLL_AMOUNT;
  };
  const NewslideRight = () => {
    if (NewSlide.current) NewSlide.current.scrollLeft += SCROLL_AMOUNT;
  };

  // styles
  const smallTitle = "title space-y-4 w-full md:w-1/2 lg:w-1/2";
  const searchDev =
    "flex items-center rounded-md px-3 py-2 w-full max-w-lg bg-[#b0b0b0]";
  const searchInputStyle =
    "ml-2 w-full outline-none cursor-pointer bg-transparent";
  const headingH1 = "text-4xl sm:text-5xl lg:text-6xl font-bold font-show";
  const collectionHeading =
    "text-4xl sm:text-5xl lg:text-6xl font-black font-show text-[#282828]";
  const rightSideImages =
    "images flex gap-3 sm:gap-4 mt-8 md:mt-0 w-full md:w-1/2 lg:w-1/2";
  const RightImagesStyle =
    "flex-1 min-w-0 rounded-md object-cover h-56 sm:h-72 md:h-full";
  const fristSectionTitle = "text-2xl font-bold text-[#282828]";
  const GoToShopButton =
    "flex items-center justify-center lg:justify-start text-black font-show gap-2 mt-8 md:mt-10 px-5 rounded-lg py-5 cursor-pointer bg-[#b0b0b0] w-full sm:w-[60%] md:w-[35%] lg:w-[10%]";
  const ImageSLideContainer =
    "inline-block w-1/2 sm:w-1/3 md:w-[calc(25%-1rem)] mx-3 p-2 align-top cursor-pointer hover:scale-105 ease-in-out duration-300";
  const ImagesChildeDiv =
    "bg-white rounded-md shadow-md h-full flex flex-col justify-between my-10";
  const imageDescribtionContainer =
    "flex justify-between items-start gap-5 px-2";
  const imagesMapTitle =
    "text-lg md:text-[14px] lg:text-lg font-show truncate pt-5";
  const materialName =
    "text-xs md:text-[12px] text-gray-500 font-gork truncate py-2";
  const itemPrice = "text-pink-600 pt-5 font-bold md:text-xs";
  const LeftArrow =
    "w-8 h-8 text-[#B0B0B0] bg-gray-300 p-2 rounded-lg shadow-lg cursor-pointer hover:bg-gray-400 transition duration-150";
  const xlv = "text-3xl font-black text-[#282828]";
  const genderFilter = "hover:underline cursor-pointer";
  const ApprochHeading =
    "text-center capitalize font-gork font-normal text-2xl my-6 text-[#282828] md:text-3xl md:my-8 lg:text-4xl lg:my-10 mt-16 md:mt-25 pt-12";
  const appriochText = "text-xs pb-1 md:text-sm lg:text-base";
  const footerImages =
    "w-full h-56 sm:h-64 md:h-[70vh] object-cover rounded-md";

  return (
    <div>
      <div className="w-full p-6 md:p-10 lg:p-16 lg:mt-17">
        <div className="mb-16 sm:mb-24 md:mb-[15%] relative">
          <div className="flex flex-col md:flex-row gap-8 md:gap-10">
            {/* LEFT SIDE — TITLE/SEARCH SECTION */}
            <div className={smallTitle}>
              <div className="text-sm uppercase tracking-widest font-light">
                <p>NEW</p>
                <p>WOMEN</p>
                <p>KIDS</p>
              </div>

              <div className={searchDev}>
                <Search className="w-5 h-5 text-gray-500 shrink-0" />
                <input
                  type="text"
                  placeholder="Search"
                  className={searchInputStyle}
                />
              </div>

              <div className="mt-8 md:mt-10">
                <h1 className={headingH1}>NEW</h1>
                <h1 className={collectionHeading}>COLLECTION</h1>
              </div>
              <p className="text-lg text-black-600 font-show">Summer</p>
              <p className="text-gray-600 text-show">2026</p>
            </div>

            {/* RIGHT SIDE — IMAGES SECTION */}
            <div className={rightSideImages}>
              <img src={SitMan} alt="Image 1" className={RightImagesStyle} />
              <img src={Black} alt="Image 2" className={RightImagesStyle} />
            </div>
          </div>

          {/* Go to shop button + arrow */}
          <Link to="/products">
            <div className="flex items-center gap-3 mt-6">
              <button className={GoToShopButton}>
                Go to Shop
                <ArrowRight className="w-7 h-7 hidden md:block" />
              </button>
              <ArrowRight className="w-8 h-8 md:hidden text-black shrink-0" />
            </div>
          </Link>
        </div>

        {/* --- PRODUCT SLIDER SECTION --- */}
        <div className="mt-10">
          <div className="flex items-end justify-between mb-4">
            <section className="font-show">
              <h3 className={fristSectionTitle}>NEW</h3>
              <h3 className={fristSectionTitle}>THIS WEEK</h3>
            </section>
            <article className="text-blue-900 cursor-pointer hover:underline">
              <Link to="/products">
                {" "}
                <a href="#" className="text-[#5E5E5E] font-gork text-sm">
                  see all
                </a>
              </Link>
            </article>
          </div>

          <div
            ref={slideRef}
            id="slide"
            className="no-scrollbar  w-full h-fit overflow-x-scroll whitespace-nowrap scroll-smooth"
          >
            {products.map((items, i) => (
              <div key={`${items.id}-${i}`} className={ImageSLideContainer}>
                <div className={ImagesChildeDiv}>
                  <img
                    src={items.img}
                    alt={items.title}
                    className="w-full h-[28vh] sm:h-[35vh] md:h-[42vh] rounded-md object-cover"
                  />
                  <div className={imageDescribtionContainer}>
                    <div>
                      <h3 className={imagesMapTitle}>{items.title}</h3>
                      <p className={materialName}>{items.material}</p>
                    </div>
                    <p className={itemPrice}>{items.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-4 mt-6">
            <ArrowLeft onClick={slideLeft} className={LeftArrow} />
            <ArrowRight onClick={slideRight} className={LeftArrow} />
          </div>
        </div>

        <div className="flex items-end justify-between my-7">
          <section className="font-gork">
            <h3 className={xlv}>XlV</h3>
            <h3 className={xlv}>COLLECTIONS</h3>
            <h3 className="text-2xl sm:text-3xl py-1 font-extralight text-[#282828]">
              23-24
            </h3>
            <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm my-4 text-[#b0b0b0]">
              <h4 className={genderFilter}>ALL</h4>
              <h4 className={genderFilter}>Men</h4>
              <h4 className={genderFilter}>Women</h4>
              <h4 className={genderFilter}>Kid</h4>
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
          className="no-scrollbar  w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth"
        >
          {smallImages.map((items, i) => (
            <div
              key={`${items.id}-${i}`}
              className="inline-block w-1/2 sm:w-1/3 md:w-[calc(25%-1rem)] mx-3 p-2 align-top cursor-pointer hover:scale-105 ease-in-out duration-300"
            >
              <div className={ImagesChildeDiv}>
                <img
                  src={items.img}
                  alt={items.title}
                  className="w-full h-48 sm:h-56 md:h-65 rounded-md object-cover"
                />
                <div className="flex justify-between items-start gap-3 px-2">
                  <div className="py-5">
                    <h3 className="font-grok truncate text-[13px]">
                      {items.title}
                    </h3>
                    <p className="text-xs text-gray-500 font-gork truncate">
                      {items.material}
                    </p>
                  </div>
                  <p className="text-pink-600 font-bold text-xs py-5">
                    {items.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-4">
          <p className="text-center font-gork text-sm text-[#262626] ml-5">
            Show more
          </p>
          <Icon onClick={handleToggle} isOpen={isAccordionVisible} />
        </div>

        <h2 className={ApprochHeading}>Our Approach To Fashion Design</h2>

        <div className="lowercase text-gray-500 font-gork text-sm md:text-base lg:text-lg pb-12 md:pb-15">
          <div className="text-center mx-auto my-5 w-[90%] md:w-[90%] lg:w-[80%] lg:max-w-2xl">
            <p className={appriochText}>
              At The Alagant Vogue, we blend creativity with craftsmanship to
              create
            </p>
            <p className={appriochText}>
              fashion that transcends trends and stands the test of time. Each
            </p>
            <p className={appriochText}>
              design is meticulously crafted, ensuring the highest quality and
            </p>
            <p className={appriochText}>exquisite finish.</p>
          </div>
        </div>

        <div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full my-7 mb-16 md:mb-30">
            <div className="w-full sm:w-1/3">
              <img src={slow} alt="" className={footerImages} />
            </div>
            <div className="w-full sm:w-1/3">
              <img src={standMan} alt="" className={footerImages} />
            </div>
            <div className="w-full sm:w-1/3">
              <img src={SitMan} alt="" className={footerImages} />
            </div>
          </div>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default Home;
