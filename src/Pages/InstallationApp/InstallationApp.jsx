import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStoredApps, removeFromStoreDB } from "../../utility/addToDB";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const InstallationApp = () => {
  const [ilstalledAppsData, setInstalledAppsData] = useState([]);

  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const installedApps = getStoredApps();
    const ConvartedStoredBooks = installedApps.map((id) => parseInt(id));
    const storedAppsData = data.filter((app) =>
      ConvartedStoredBooks.includes(app.id),
    );
    setInstalledAppsData(storedAppsData);
  }, [data]);

  const handelRemoveApp = (id) => {
    removeFromStoreDB(id);

    const updatedInstalledApps = ilstalledAppsData.filter(
      (app) => app.id !== id,
    );
    setInstalledAppsData(updatedInstalledApps);
  };

  return (
    <div className="bg-[#f5f5f5] px-3 sm:px-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center pt-10">
          Your Installed Apps
        </h1>
        <p className="text-center text-[#627382] mt-3 sm:mt-4 mb-6 sm:mb-7 text-sm sm:text-base">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col items-center max-w-7xl mx-auto">
        <div className="mt-6 sm:mt-9 w-full">
          <p className="mb-4 font-bold text-black text-xl sm:text-2xl">
            {ilstalledAppsData.length} Apps Found
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6 w-full">
          {ilstalledAppsData.map((app) => (
            <div
              key={app.id}
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#ffffff] p-4 rounded-lg shadow-sm w-full gap-4"
            >
              {/* LEFT SIDE */}
              <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
                <img className="w-20 sm:w-24" src={app.image} alt={app.name} />

                <div className="text-center sm:text-left">
                  <h2 className="font-semibold text-base sm:text-lg">
                    {app.title}
                  </h2>

                  <div className="flex flex-wrap justify-center sm:justify-start items-center gap-3 sm:gap-4 mt-2 text-sm">
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

              {/* BUTTON */}
              <div className="w-full sm:w-auto flex justify-center sm:justify-end">
                <button
                  onClick={() => handelRemoveApp(app.id)}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  Uninstall
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationApp;
