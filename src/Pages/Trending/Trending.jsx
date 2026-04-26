import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import Trendings from "../Trendings/Trendings";
import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";


const Trending = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-4 text-center m-8">
        <h2 className="font-bold text-3xl flex ">
          <p>Trending Apps     .</p> 
          <FaArrowTrendUp />
        </h2>
        <p className="font-light mt-4">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <Trendings></Trendings>

      <div className="flex justify-center m-10">
        <button className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:bg-gradient-to-r hover:from-[#9F62F2] hover:to-[#632EE3] text-white font-bold py-2 px-4 rounded">
          <Link to= "/AllApps">Show All</Link>
        </button>
      </div>
    </div>
  );
};

export default Trending;
