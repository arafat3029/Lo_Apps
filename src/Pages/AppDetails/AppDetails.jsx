import React from "react";
import { useLoaderData, useParams } from "react-router";
import { GoDownload } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { FcVoicePresentation } from "react-icons/fc";
import { BarChart, CartesianGrid, Legend, Tooltip, XAxis, Bar, YAxis } from "recharts";
import { addToStoreDB } from "../../utility/addToDB";


const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === appId);
  const { companyName, image, title, downloads, ratingAvg, reviews, size,  } = appDetails;
  const ratings = appDetails.ratings;


  const handleInstall = id => {

    addToStoreDB(id);

  }

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

                    <div className="border-t-1 border-solid text-[#c4c9ce] p-2"></div>

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

                    <button onClick={() => handleInstall(id)} className="btn btn-primary bg-[#00D390] border-none max-w-1/5 mt-2">Install Now ({size} MB)</button>

                </div>

            </div>
            

            <div className="border-t-1 border-solid text-[#c4c9ce] p-2 mt-2.5"></div>

            <div className="mb-5">
                <p className="font-bold">Ratings</p>
            </div>



            <div className="flex items-center justify-normal mt-4">
                <BarChart width={600} height={300} data={ratings}>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                    <XAxis dataKey="name" stroke="#8884d8"></XAxis>
                    <YAxis stroke="#8884d8"></YAxis>
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc'}}></Tooltip>
                    <Legend width={100} wrapperStyle={{ top: 40, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }}></Legend>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"></CartesianGrid>
                    <Bar dataKey="count" fill="#8884d8" barSize={30}></Bar>
                </BarChart>
            </div>
            <div className="border-t-1 border-solid text-[#c4c9ce] p-2 mt-2.5"></div>

            <p className="font-bold text-2xl">Description</p>
            <p className="mt-5 mb-14">{appDetails.description}</p>
            

        </div>

      </div>
    </div>
  );
};

export default AppDetails;
