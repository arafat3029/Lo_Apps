import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Trendings from "../Trendings/Trendings";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";
import Footer from "../../Components/Footer/Footer";

const Trending = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col items-center justify-center p-4 text-center bg-white">
        <h2 className="font-bold text-3xl flex ">
          <p className="text-black text-2xl">Best Selling Products </p>
          {/* <FaArrowTrendUp /> */}
        </h2>
        <p className="font-light mt-4 text-black">
          Explore All Trending Products
        </p>
      </div>

      <Trendings></Trendings>

      <button className="group relative px-8 py-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5122c4] hover:to-[#8c4ee0] text-white font-semibold rounded-xl shadow-lg hover:shadow-[0_0_25px_rgba(159,98,242,0.5)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center gap-2">
      
      {/* Pulse Effect Glow in Background */}
      <span className="absolute inset-0 rounded-xl bg-[#9F62F2]/30 blur-md opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-500 -z-10" />

      <span>Show All</span>

      {/* Animated Arrow Icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor" 
        strokeWidth="2.5"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </button>
      <Footer></Footer>
    </div>
  );
};

export default Trending;
