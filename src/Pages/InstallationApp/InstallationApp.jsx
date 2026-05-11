import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromStoreDB } from "../../utility/addToDB";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const InstallationApp = () => {
  const [ilstalledAppsData, setInstalledAppsData] = useState([]);

  const data = useLoaderData();
  console.log(data);

  useEffect(() => {
    const installedApps = getStoredApps();
    const ConvartedStoredBooks = installedApps.map((id) => parseInt(id));
    const storedAppsData = data.filter((app) =>
      ConvartedStoredBooks.includes(app.id),
    );
    setInstalledAppsData(storedAppsData);
  }, [data]);

  const handelUninstall = (id) => {
    removeFromStoreDB(id);
    const remainingApps = ilstalledAppsData.filter((app) => app.id !== id);
    setInstalledAppsData(remainingApps);
  };

  return (
    <div className=" bg-[#f5f5f5]">
      <div>
        <h1 className="text-3xl font-bold text-center pt-10">
          Your Installed Apps
        </h1>
        <p className="text-center text-[#627382] mt-4 mb-7">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="flex flex-col items-baseline max-w-7xl mx-auto">
        <div className="mt-9">
          <p className="mb-4 font-bold text-black text-2xl ">
            {ilstalledAppsData.length} Apps Found{" "}
          </p>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {ilstalledAppsData.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-[#ffffff] p-4 rounded-lg shadow-sm w-full"
            >
              <div className="flex items-center gap-6 justify-center pt-6 ">
                <div>
                  <img className="w-24" src={app.image} alt={app.name} />
                </div>

                <div>
                  <h2>{app.title}</h2>

                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-[#00D390] flex items-center gap-1">
                      <FaCloudDownloadAlt />
                      {app.downloads}
                    </span>

                    <span className="flex items-center gap-1 text-[#FF8811]">
                      <FaStar />
                      {app.ratingAvg}
                    </span>

                    <span className="text-[#627382]">{app.size} MB</span>
                  </div>
                </div>
              </div>

              <div>
                <button onClick={() => handelUninstall(app.id)} className="btn btn-primary">Uninstall</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationApp;
