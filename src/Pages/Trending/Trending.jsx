import React from "react";
import { FaCloudDownloadAlt, FaWhatsapp } from "react-icons/fa"; // FaWhatsapp ইম্পোর্ট করা হয়েছে
import Trendings from "../Trendings/Trendings";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";
import Footer from "../../Components/Footer/Footer";

const Trending = () => {
  return (
    <div className="bg-white relative min-h-screen"> {/* relative এবং min-h-screen যোগ করা হয়েছে */}
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

      <div className="flex items-center justify-center mb-5">
        <Link
          to="/AllApps"
          className="group flex items-center gap-2.5 px-5 py-2 bg-blue-50/80 hover:bg-blue-600 text-blue-600 hover:text-white font-semibold rounded-xl border border-blue-100 hover:border-transparent active:scale-95 transition-all duration-300 shadow-sm hover:shadow-md w-fit mx-auto"
        >
          {/* <FaCloudDownloadAlt
          size={22}
          className="text-blue-500 group-hover:text-white transform group-hover:translate-y-0.5 transition-all duration-300"
        /> */}
          <span className="text-sm tracking-wide">Show All</span>
        </Link>
      </div>

      <Footer></Footer>

      {/* --- WhatsApp Floating Button --- */}
      <a
        href="https://wa.me/message/V4L7CRKUKZYDO1" // এখানে আপনার WhatsApp নম্বর দিন (যেমন: 88017XXXXXXXX)
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
        
        {/* একটি ছোট হোভার টেক্সট (ঐচ্ছিক, সুন্দর দেখানোর জন্য) */}
        <span className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Contact Us
        </span>
      </a>
    </div>
  );
};

export default Trending;