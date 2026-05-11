import React, { useState } from "react";
import Allappss from "../Allappss/Allappss";

const AllApps = () => {
    const [allapps, setAllapps] = useState([]);
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => setAllapps(data));
      
  return (
    <div>

      <div className="flex flex-col justify-center items-center p-8">
        <h1 className="text-4xl font-bold">Our All Applications</h1>
        <span className="text-lg text-gray-600 mt-4">
          Explore All Apps on the Market developed by us. We code for Millions
        </span>
      </div>

      <div className="flex justify-between items-center px-8 py-4">

        <div className="text-xl font-bold">
          <span>({allapps.length}) Apps Found</span>
        </div>

        <div>
          <label className="input" >
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search Apps" />
          </label>
        </div>

      </div>
    
    <Allappss></Allappss>

    </div>
  );
};

export default AllApps;
