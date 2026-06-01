import React from "react";
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Baner = () => {
  return (
    <>
        <img className="block w-full max-w-7xl mx-auto h-auto" src="/hero.png" alt="" />

      {/* <div className="flex flex-col items-center justify-center text-center pt-20 bg-[#f5f5f5]">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#001930]">
          Best Collection Online
        </h1>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-3 text-[#001930]">
          <span className="text-[#632EE3]">ponnofy</span>.com
        </h1>

        <div className=" mt-4">
          <p className=" items-center justify-center text-[#627382] mt-4">
            Welcome to ponnofy.com, your ultimate destination for an endless
            variety of products. We are dedicated to making your online shopping
            experience simpler,
            <br />
            smarter, and more exciting by bringing quality and affordability
            together.
          </p>
        </div>
        <div className="mt-10">
          <button className="btn btn-active mr-6">
            {" "}
            <FaFacebook />
            <a
              href="https://www.facebook.com/mdarafat.mia.1804"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </button>
          <button className="btn btn-active">
            {" "}
            <IoLogoWhatsapp />
            <a
              href="https://wa.me/message/V4L7CRKUKZYDO1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Whatsapp
            </a>
          </button>
        </div>
        <img className="mt-10" src="/hero.png" alt="" />
      </div> */}
    </>
  );
};

export default Baner;
