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
    <div className="flex flex-wrap gap-6 justify-center">
      {allapps.map((app) => (
        <Link to={`/AppDetails/${app.id}`} key={app.id}>
          <div key={app.id} className="card bg-base-100 w-96 shadow-sm">
            <div className="flex flex-col items-center">
              <img className="h-[166px] " src={app.image} alt={app.title} />
              <h2 className="font-bold items-center">{app.title}</h2>
            </div>
            <div className="card-body">
              <div className="flex justify-between mt-4">
                <div className="text-[#00d491] bg-[#f1f5e8] pl-5 pr-5 rounded-2xl flex items-center gap-2">
                  <FaCloudDownloadAlt /> {app.downloads}
                </div>
                <div className="text-[#ff8812] bg-[#fff0e0] pl-5 pr-5 rounded-2xl flex items-center gap-2">
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
