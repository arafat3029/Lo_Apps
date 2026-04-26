import React from 'react';
import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa6";

const Baner = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center pt-20 bg-[#f5f5f5]">
      <h1 className="text-6xl font-bold text-[#001930]">We Build</h1>

      <h1 className="text-6xl font-bold mt-3 text-[#001930]">
        <span className="text-[#632EE3]">Productive</span> Apps
      </h1>

      <div className=" mt-4">
        <p className=' items-center justify-center text-[#627382] mt-4'>
          At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
          Our goal is to turn your ideas into digital experiences that truly make an impact.
        </p>
      </div>
      <div className='mt-10'>
        <button className="btn btn-active mr-6"> <FaGooglePlay /><a href="https://play.google.com/store/apps?hl=en" target="_blank" rel="noopener noreferrer">Google Play</a></button>
        <button className="btn btn-active"> <FaAppStoreIos /><a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">App Store</a></button>
      </div>
      <img className='mt-10' src="/hero.png" alt="" />
    </div>
  );
};

export default Baner;