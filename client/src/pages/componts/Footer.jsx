import React from "react";
// import PlayLogo from "../assets/PlayLogo.png"; // adjust path to match your project
import PlayLogo from "../../images/PlayLogo.png";
import "../home.css";
// import "./home.css";

function Footer() {
  const fotterDev =
    "grid grid-cols-1 sm:grid-cols-2 items-center px-6  gap-8";
  const footerLinks = "hover:underline font-bold text-[12px] ";
  const footerBrand =
    "font-show text-[24px] sm:text-[30px] font-black text-[#262626] mt-7 flex items-center gap-2";

  return (
    <div>
      <footer className="bg-[#EBEBEB]  mt-40">
        <div className={fotterDev}>
          <div className="text-[9px] text-[#9a9393] font-lg grid grid-cols-2 sm:flex sm:gap-16 gap-5 pt-2 px-4 sm:px-0 sm:m-15 md:mx-40">
            <div className="mb-2 lowercase">
              <p className="hover:underline text-[12px] py-1">INFO</p>
              <section>
                <p className={footerLinks}>PRICING</p>
                <p className={footerLinks}>ABOUT</p>
                <p className={footerLinks}>CONTACT</p>
              </section>
            </div>
            <div>
              <p className="hover:underline text-[12px] py-1">LANGUAGE</p>
              <section className="text-[10px] md:text-[15px]">
                <p className={footerLinks}>ENG</p>
                <p className={footerLinks}>ESP</p>
                <p className={footerLinks}>SVE</p>
              </section>
            </div>
          </div>

          {/* this div is for text */}
          <article className="px-4 sm:px-0">
            <h3 className="text-xs text-[#D6D6D6]">TECHNOLOGIES</h3>
            <div className={footerBrand}>
              <img src={PlayLogo} alt="" className="h-6 w-auto" />
              <h2>XlV</h2>
              <h3>QR</h3>
            </div>
          </article>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
