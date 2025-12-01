import React from "react";
import {
  Search,
  ArrowRight,
  ArrowLeft,
  MoveRight,
  ArrowRightFromLine,
} from "lucide-react";

// img
import SitMan from "../images/SitMan.png";
import Black from "../images/blackshirt.png";
import B_shirt from "../images/Black_shirt.png";
import Blus_Tishert from "../images/pw_Tishirt.png";
import butyBlack from "../images/back.png";

import T_shirt from "../images/t-shirt.png";
import Tsmall_shirt from "../images/small.png";

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
    id: 2,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: T_shirt,
  },
  {
    id: 2,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: B_shirt,
  },
  {
    id: 2,
    title: "Backpack",
    price: "$29.99",
    material: "Leather",
    img: SitMan,
  },
  {
    id: 1,
    title: "Sneakers",
    price: "$49.99",
    material: "Leather",
    img: butyBlack,
  },
];

function Home() {
  let Slide = document.getElementById("slide");
  const slideLeft = () => {
    Slide = document.getElementById("slide");
    Slide.scrollLeft = Slide.scrollLeft - 500;
  };
  const rightSlide = () => {
    let Slide = document.getElementById("slide");
    Slide.scrollLeft = Slide.scrollLeft = Slide.scrollLeft + 500;
  };

  return (
    <>
      <div>
        <div className="w-full p-6 md:p-10 lg:p-16">
          {/* Layout wrapper */}
          <div className="block md:flex lg:flex gap-10">
            {/* LEFT SIDE — TITLE SECTION */}
            <div className="title flex-1 space-y-4">
              {/* Small heading */}
              <div className="text-sm uppercase tracking-widest font-[300]">
                <p>NEW</p>
                <p>WOMEN</p>
                <p>KIDS</p>
              </div>

              {/* Search bar */}
              <div className="flex items-center rounded-md px-3 py-2 w-full max-w-sm bg-[#b0b0b0]">
                <Search className="w-5 h-5 text-gray-500 " />
                <input
                  type="text"
                  placeholder="Search"
                  className="ml-2 w-full outline-none cursor-pointer bg-transparent"
                />
              </div>

              {/* Big brand name */}
              <div className="mt-10">
                <h1 className="text-4xl md:text-5xl  lg:text-6xl font-bold font-show">
                  NEW
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-[900]  font-show text-[#282828]">
                  COLLECTION
                </h1>
              </div>

              {/* Subtitle */}
              <p className="text-lg text-black-600 font-show">Summer</p>

              <p className=" text-gray-600 text-show">2024</p>
              {/* Go to shop */}
            </div>

            {/* RIGHT SIDE — IMAGES SECTION */}
            <div className="images  flex md gap-4 mt-10 md:mt-0">
              {/* Add your images here */}
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

          <div>
            <button
              className="flex items-center text-[#000] font-show gap-2 text-black mt-4 px-5 rounded-lg 
          py-3 bg-[#b0b0b0] w-[80%]"
            >
              Go to shop
              <ArrowRight className="w-5 hidden md:block lg:block   h-5" />
            </button>
          </div>
          <div
            //   w-[30%]
            //   py-3 bg-[#b0b0b0] rounded-xl
            className=" flex items-center gap-2 "
          >
            <MoveRight
              width={50}
              className=" text-center mx-3 my-5 cursor-pointer hover:bg-[#b0b0b0] hover:scale-90 "
            />
          </div>

          {/*   2nd New  this week */}

          <div>
            <div className="flex items-end justify-between">
              <section className="font-show">
                <h3 className="text-2xl font-bold text-[#282828]">NEW </h3>
                <h3 className="text-2xl font-bold text-[#282828]">
                  THIS WEEK{" "}
                </h3>
              </section>
              {/* SECOND SECTION */}
              <article className="text-blue-900  cursor-pointer hover:underline">
                <a href="#" className="text-[#5E5E5E] font-gork text-sm">
                  see all
                </a>
              </article>

              {/* title ends here */}
            </div>

            <div>
              <div className="w-full overflow-x-auto md:flex md:gap-4 no-scrollbar mb-8">
                {/*  */}

                <div className="relative flex items-center">
                  <ArrowLeft onClick={slideLeft} />
                  <div
                    id="slide"
                    className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smoth"
                  >
                    {products.map((items) => (
                      <div
                        key={items.id}
                        className="inline-block w-[220px] h-[330px]  p-2 align-top cursor-pointer hover:scale-105 ease-in-out duration-300"
                      >
                        {/* */}
                        <div className="bg-white rounded-md shadow-md h-full flex flex-col justify-between ">
                          <img
                            src={items.img}
                            alt={items.alt}
                            className="w-full h-48 rounded-md "
                          />
                          <div className="flex items-start gap-5  px-2">
                            <div>
                              <h3 className="text-lg font-show truncate">
                                {items.title}
                              </h3>
                              <p className=" text- text-sm text-gray-500  font-gork truncate">
                                {items.material}
                              </p>
                            </div>
                            <p className="text-pink-600 font-bold">
                              ${items.price}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    <style>
                      {`
                    .no-scrollbar::-webkit-scrollbar { display: none; }
                     .no-scrollbar { scrollbar-width: none; }  `}
                    </style>{" "}
                  </div>
                  <ArrowRight onClick={rightSlide} />
                </div>
              </div>

              {/*  cloth sections endss here */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//
//  <img src={T_shirt} alt="" /> <img src={butyBlack} alt="" />
//  <img src={Tsmall_shirt} alt="" />
// <img src={Blus_Tishert} alt="" />
//

export default Home;

//   <div className="grid md:gap-4">
//   {products.map((item) => (
//     <div
//       key={item.id}
//       className="p-3  rounded-lg hover:shadow-md transition"
//     >
//       <img
//         src={item.img}
//         alt={item.title}
//         className="w-full rounded-md "
//       />

//       <div className="mt-2 flex items-center justify-between">
//         <div>
//           <h3 className="text-sm font-gork font-[600] ">
//             {item.title}
//           </h3>
//           <p className="text-xs opacity-70 ">{item.price}</p>
//           {/* end here */}
//         </div>
//         <p className="text-gray-500  font-gork font-[300] text-sm">
//           {item.material}
//         </p>
//       </div>
//     </div>
//   ))}
// </div>
