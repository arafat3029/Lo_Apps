import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";
import { getStoredApps, removeFromStoreDB } from "../../utility/addToDB";
import { RxCross1 } from "react-icons/rx";

const InstallationApp = () => {
  const [installedAppsData, setInstalledAppsData] = useState([]);

  const data = useLoaderData();

  useEffect(() => {
    const installedApps = getStoredApps();
    const convertedStoredApps = installedApps.map((id) => parseInt(id));

    const storedAppsData = data.filter((app) =>
      convertedStoredApps.includes(app.id),
    );

    setInstalledAppsData(storedAppsData);
  }, [data]);

  const handleRemoveApp = (id) => {
    removeFromStoreDB(id);

    const updatedInstalledApps = installedAppsData.filter(
      (app) => app.id !== id,
    );

    setInstalledAppsData(updatedInstalledApps);
  };

  return (
    <div className="bg-white min-h-screen px-3 sm:px-6 py-6">
      <div className="max-w-7xl mx-auto">
        <p className="mb-6 font-bold text-black text-xl sm:text-2xl">
          {installedAppsData.length}{" "}
          {installedAppsData.length === 1 ? "App" : "Apps"} Installed
        </p>

        <div className="flex flex-col gap-4">
          {installedAppsData.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-sm"
            >
              {/* Left Side */}
              <Link
                to={`/AppDetails/${app.id}`}
                className="flex items-center gap-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-lg"
                    src={app.image}
                    alt={app.companyName}
                  />

                  <div>
                    <h2 className="font-semibold text-base sm:text-lg text-black">
                      {app.companyName}
                    </h2>

                    <p className="text-black mt-1">
                      <span className="text-2xl font-bold">৳</span>
                      {app.price}
                    </p>
                  </div>
                </div>
              </Link>

              {/* Remove Button */}
              <button
                onClick={() => handleRemoveApp(app.id)}
                className="text-black hover:text-red-700 text-xl"
              >
                <RxCross1 />
              </button>
            </div>
          ))}
        </div>

        {installedAppsData.length === 0 && (
          <div className="flex flex-col items-center justify-center py-10 sm:py-16 lg:py-20">
            <img
              className="w-40 sm:w-56 md:w-72 lg:w-80 h-auto mb-4"
              src="https://i.ibb.co.com/v4DgmL2r/istockphoto-1433173565-612x612.jpg"
              alt="Empty Cart"
            />

            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-600 text-center">
              No items in your cart!
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default InstallationApp;
