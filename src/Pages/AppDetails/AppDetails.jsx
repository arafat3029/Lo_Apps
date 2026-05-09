import React from "react";
import { useLoaderData, useParams } from "react-router";
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FcVoicePresentation } from "react-icons/fc";
import BarCharts from "../BarCharts/BarCharts";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === appId);
  const { companyName, image, title, downloads, ratingAvg, reviews, size,  } = appDetails;
  return (
    <div>
      <div className="max-w-7xl mx-auto">

        <div>
            
            <div className="flex items-center justify-center ">

                <div>
                    <figure><img src={image} alt={title} className="w-64 h-64" /></figure>
                </div>
                
                
                <div className="card-body">
                    <h2 className="card-title font-bold text-2xl">{title}</h2>
                    <p className="text-[#627382] pb-2">Developed by <span className="bg-gradient-to-r from-[#632EE3] via-[#7D45EB] to-[#9F62F2] text-transparent bg-clip-text font-semibold">{companyName}</span></p>

                    <div className="border-t-2 border-solid text-[#627382] p-2"></div>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col items-center gap-2 justify-center">
                            <span ><GoDownload  className="text-[#0a8f15]" size={35}/></span>
                            <p className="text-[#001931] font-semibold">Downloads: </p>
                            <span className="font-bold text-2xl">{downloads}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 justify-center">
                            <span><FaStar className="text-[#FF8811]" size={35}/></span>
                            <p className="text-[#001931] font-semibold">Average Ratings: </p>
                            <span className="font-bold text-2xl">{ratingAvg}</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 justify-center">
                            <span><FcVoicePresentation className="" size={35}/></span>
                            <p className="text-[#001931] font-semibold">Reviews: </p>
                            <span className="font-bold text-2xl">{reviews}</span>

                        </div>
                    </div>

                    <button className="btn btn-primary bg-[#00D390] border-none max-w-1/5 mt-2">Install Now ({size} MB)</button>

                </div>

            </div>

            <div className="mt-12">
                <p className="font-bold">Ratings</p>
                <BarCharts></BarCharts>
            </div>
            

        </div>

      </div>
    </div>
  );
};

export default AppDetails;
