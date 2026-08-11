import React, { useState } from "react";
import { Menu, X, User, Heart, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import PlayLogo from "../images/playLogo.png";

function Navbar() {
  // Controls whether the mobile menu is open
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* fixed typo: clasName -> className */}
      <div className="fixed w-full top-0 z-50 bg-white">
        <nav className="flex items-center justify-between px-9 py-6">
          <div className="flex items-center">
            {/* Burger icon — only clickable/relevant on small screens */}
            <Menu
              className="mr-7 cursor-pointer md:hidden"
              onClick={() => setIsMenuOpen(true)}
            />

            {/* Desktop nav links — hidden on small screens, shown from md up */}
            <div className="hidden md:block">
              <ul className="flex items-center gap-5 font-gork text-[#282828] font-medium last:cursor-pointer">
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/products">
                  <li>Collection</li>
                </Link>
                <li>New</li>
              </ul>
            </div>
          </div>

          {/* logo */}
          <div>
            <img src={PlayLogo} alt="" />
          </div>

          {/* cart / user */}
          <div className="md:flex items-center gap-4">
            <div className="hidden md:flex items-center gap-5 font-gork text-[#282828] font-medium last:cursor-pointer">
              <Heart />
              {/* <Link to="/cart">
                <h3>Cart</h3>
              </Link> */}
              <Link to="/Bag">
                <ShoppingBag />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/profile">
                <User
                  className="text-[#b0b0b0] bg-black p-1 rounded-xl"
                  size={25}
                />
              </Link>
              <div className="hidden sm:block font-gork text-[#282828] font-medium last:cursor-pointer">
                <Link to="/cart">
                  <h3>Cart</h3>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Dark overlay behind the mobile menu — closes menu when clicked */}
      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* MOBILE MENU PANEL */}
      {/* Slides in from the left, covers the page like a drawer */}
      <div
        className={`
          fixed top-0 left-0 h-full w-3/4 sm:w-1/2
          bg-white z-50 md:hidden
          p-6
          transition-transform duration-200
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button */}
        <button onClick={() => setIsMenuOpen(false)} className="mb-6">
          <X size={24} />
        </button>

        {/* Nav links inside the mobile menu */}
        <ul className="flex flex-col gap-5 font-gork text-[#282828] font-medium">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/products">
            <li>Collection</li>
          </Link>
          <li>New</li>
        </ul>

        {/* Cart/heart links repeated here since they're hidden on mobile in the top bar */}
        <div className="flex items-center gap-5 mt-8 font-gork text-[#282828] font-medium">
          <Heart />
          {/* <h3>Cart</h3> */}
          <ShoppingBag />
        </div>
      </div>
    </>
  );
}

export default Navbar;
