import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Trendings = () => {
  const [trendingApps, setTrendingApps] = useState([]);

  useEffect(() => {
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => setTrendingApps(data.slice(0, 8)));
  }, []);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center bg-white">
      {trendingApps.map((app) => (
        <Link key={app.id} to={`/AppDetails/${app.id}`} className="w-full">
          <div className="card bg-base-100 w-full max-w-[280px] lg:max-w-[320px] shadow-sm bg-white">
            <div className="flex flex-col items-center p-3">
              <img
                className="h-[140px] object-contain"
                src={app.image}
                alt={app.title}
              />
              <h2 className="font-bold text-center mt-2 text-black">{app.title}</h2>
            </div>

            <div className="card-body p-4">
              <div className="flex justify-between mt-2">
                <div className="text-[#00d491] bg-[#f1f5e8] px-3 py-1 rounded-2xl flex items-center gap-2 text-sm">
                  <FaCloudDownloadAlt /> {app.downloads}
                </div>

                <div className="text-[#ff8812] bg-[#fff0e0] px-3 py-1 rounded-2xl flex items-center gap-2 text-sm">
                  <FaStar /> {app.ratingAvg}
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Trendings;
