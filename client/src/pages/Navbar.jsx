import React from "react";
import { Menu, User, Heart, ShoppingBag } from "lucide-react";

import PlayLogo from "../images/playLogo.png";

function Navbar() {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between  px-9 py-6">
          <div className="flex ">
            <Menu className="mr-7 " />
            <div className=" hidden md:block">
              <ul className="flex items-center  gap-5 font-gork text-[#282828] font-medium  last:cursor-pointer">
                <li> Home</li>
                <li> Collection</li>
                <li>New</li>
              </ul>
            </div>
          </div>
          {/*  menu */}
          <div>
            <img src={PlayLogo} alt="" />
          </div>
          {/* logo finsihs here */}
          <div className="  md:flex items-center gap-4">
            <div className="hidden md:flex items-center  gap-5 font-gork text-[#282828] font-medium  last:cursor-pointer ">
              <Heart />
              <h3>Cart</h3>
              <ShoppingBag />
            </div>
            <User
              className="text-[#b0b0b0]  bg-black p-1 rounded-xl  "
              size={25}
            />
          </div>
          {/* cart */}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
