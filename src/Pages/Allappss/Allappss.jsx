import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Footer from "../../Components/Footer/Footer";

const Allappss = () => {
  const [allapps, setAllapps] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => setAllapps(data));
  }, []);

  const handleInstalls = (id) => {
    addToStoreDB(id);
  };

  const filteredApps = allapps.filter((app) => {
    const matchesSearch = app.companyName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "" ||
      (app.category &&
        app.category.toLowerCase() === filter.toLowerCase());

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* Search & Filter */}
      <div className="bg-white px-4 py-4 flex flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Search products..."
          className="input input-bordered flex-1 bg-white text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-28 md:w-40 bg-white text-black"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="gadgets">Gadgets</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 pb-4">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            className="w-full shadow-sm rounded-lg bg-white"
          >
            <Link to={`/AppDetails/${app.id}`} className="w-full">
              <div className="card bg-white w-full">
                <div className="flex flex-col items-center p-3">
                  <img
                    className="h-[140px] sm:h-[160px] object-contain"
                    src={app.image}
                    alt={app.companyName}
                  />

                  <h2 className="font-bold mt-2 text-sm sm:text-base text-black text-center">
                    {app.companyName}
                  </h2>
                </div>

                <div className="card-body p-3">
                  <div className="flex justify-center">
                    <p className="text-[#00d491] text-sm">
                      <span className="text-2xl">৳</span>
                      {app.price}
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            <div className="px-3 pb-3 mt-2">
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

      {filteredApps.length === 0 && (
        <div className="text-center py-10 text-black">
          No products found.
        </div>
      )}
    <Footer></Footer>
    </div>
  );
};

export default Allappss;