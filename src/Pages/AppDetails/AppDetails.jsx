import React from "react";
import { useLoaderData, useParams } from "react-router";
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FcVoicePresentation } from "react-icons/fc";
import {
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  Bar,
  YAxis,
} from "recharts";
import { addToStoreDB } from "../../utility/addToDB";
import { MdOutlineShoppingCart } from "react-icons/md";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === appId);
  const { companyName, image, title, downloads, ratingAvg, reviews, price } =
    appDetails;
  const ratings = appDetails.ratings;

  const handleInstall = (id) => {
    addToStoreDB(id);
  };

  return (
    <div className="px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-10">
          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src={image}
              alt={title}
              className="w-40 h-40 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-contain"
            />
          </div>

          {/* DETAILS */}
          <div className="w-full">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center lg:text-left">
              {title}
            </h2>

            <p className="text-[#627382] pb-2 text-center lg:text-left text-sm sm:text-base">
              Developed by{" "}
              <span className="bg-gradient-to-r from-[#632EE3] via-[#7D45EB] to-[#9F62F2] text-transparent bg-clip-text font-semibold">
                {companyName}
              </span>
            </p>

            <div className="border-t border-gray-200 my-3"></div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center">
              <div className="flex flex-col items-center gap-1">
                <GoDownload className="text-[#0a8f15]" size={28} />
                <p className="text-sm font-semibold">Downloads</p>
                <span className="font-bold text-lg sm:text-xl">
                  {downloads}
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <FaStar className="text-[#FF8811]" size={28} />
                <p className="text-sm font-semibold">Ratings</p>
                <span className="font-bold text-lg sm:text-xl">
                  {ratingAvg}
                </span>
              </div>

              <div className="flex flex-col items-center gap-1">
                <FcVoicePresentation size={28} />
                <p className="text-sm font-semibold">Reviews</p>
                <span className="font-bold text-lg sm:text-xl">{reviews}</span>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-2 flex flex-col lg:flex-row gap-10 justify-center lg:justify-start">
              <button
                onClick={() => handleInstall(id)}
                className="btn btn-outline btn-accent w-full sm:w-auto"
              >
               <MdOutlineShoppingCart />  Add To Cart
              </button>

              <button
                onClick={() => handleInstall(id)}
                className="btn btn-primary bg-[#00D390] border-none w-full sm:w-auto"
              >
              <MdOutlineShoppingCart />  Buy Now ({price} Tk)
              </button>
            </div>
          </div>

          
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* RATING CHART */}
        <p className="font-bold text-xl sm:text-2xl mb-3">Ratings</p>

        <div className="w-full overflow-x-auto">
          <BarChart
            width={window.innerWidth < 640 ? 320 : 600}
            height={300}
            data={ratings}
          >
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="name" stroke="#8884d8" />
            <YAxis stroke="#8884d8" />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" barSize={30} />
          </BarChart>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* DESCRIPTION */}
        <p className="font-bold text-xl sm:text-2xl">Description</p>
        <p className="mt-4 mb-10 text-sm sm:text-base text-gray-700">
          {appDetails.description}
        </p>
      </div>
    </div>
  );
};

export default AppDetails;
