import React, { useEffect, useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";

const Trendings = () => {
  const [trendingApps, setTrendingApps] = useState([]);

  useEffect(() => {
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => setTrendingApps(data.slice(0, 8)));
  }, []);

  const handleInstalls = (id) => {
    addToStoreDB(id);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 place-items-center max-w-7xl mx-auto ">
      {trendingApps.map((app) => (
        <div key={app.id} className="w-full shadow-sm">
          <Link to={`/AppDetails/${app.id}`} className="w-full">
            <div className="card w-full max-w-[280px] lg:max-w-[320px] ">
              <div className="flex flex-col items-center p-3">
                <img
                  className="h-[140px] object-contain"
                  src={app.image}
                  alt={app.title}
                />

                <h2 className="font-semibold mt-3">{app.companyName}</h2>
              </div>

              <div className="pl-3">
                <p className="text-[#00d491] text-sm">
                  <span className="text-2xl">৳</span>
                  {app.price}
                </p>
              </div>
            </div>
          </Link>

          <div className="pl-3 pr-3 pb-3 mt-2  mx-auto">
            <button
              onClick={() => handleInstalls(app.id)}
              className="btn btn-outline btn-accent w-full"
            >
              Add To Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trendings;
