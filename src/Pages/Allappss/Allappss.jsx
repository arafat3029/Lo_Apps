import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Allappss = () => {
  const [allapps, setAllapps] = useState([]);

  useEffect(() => {
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => setAllapps(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
      {allapps.map((app) => (
        <Link to={`/AppDetails/${app.id}`} key={app.id} className="w-full">
          <div className="card bg-base-100 shadow-sm w-full">
            <div className="flex flex-col items-center p-3">
              <img
                className="h-[140px] sm:h-[160px] object-contain"
                src={app.image}
                alt={app.title}
              />
              <h2 className="font-bold text-center mt-2 text-sm sm:text-base">
                {app.title}
              </h2>
            </div>

            <div className="card-body p-3">
              <div className="flex justify-between mt-2 text-xs sm:text-sm">
                <div className="text-[#00d491] bg-[#f1f5e8] px-3 py-1 rounded-2xl flex items-center gap-1">
                  <FaCloudDownloadAlt /> {app.downloads}
                </div>

                <div className="text-[#ff8812] bg-[#fff0e0] px-3 py-1 rounded-2xl flex items-center gap-1">
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

export default Allappss;
