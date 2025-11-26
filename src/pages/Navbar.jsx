import React from "react";
import { Menu, User, Heart, ShoppingBag } from "lucide-react";

//  imges

import PlayLogo from "../images/PlayLogo.png";

function Navbar() {
  return (
    <>
      <div>
        <nav className="flex items-center justify-between  px-5 py-6">
          <div className="flex ">
            <Menu />
            <div className=" hidden">
              <ul>
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
          <div>
            <div className="hidden">
              <Heart />
              <h3>Cart</h3>
              <ShoppingBag />
            </div>
            <User
              className="text-[#b0b0b0]  bg-[#000] p-1 rounded-xl  "
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
