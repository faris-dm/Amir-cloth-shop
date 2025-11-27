import React from "react";
import {
  Search,
  ArrowRight,
  MoveRight,
  ArrowRightFromLine,
} from "lucide-react";

// img
import SitMan from "../images/SitMan.png";
import Black from "../images/blackshirt.png";

function Home() {
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
        </div>
      </div>
    </>
  );
}

export default Home;
