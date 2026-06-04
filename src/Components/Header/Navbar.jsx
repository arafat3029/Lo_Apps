import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { BiHome } from "react-icons/bi";
import { FaShop } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { BsShop } from "react-icons/bs";
import { getStoredApps } from "../../utility/addToDB";
import { VscAccount } from "react-icons/vsc";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [apps, setApps] = useState([]);

  // initial load
  useEffect(() => {
    setApps(getStoredApps());
  }, []);

  // real-time sync fix
  useEffect(() => {
    const update = () => {
      setApps(getStoredApps());
    };

    // when other tab changes localStorage
    window.addEventListener("storage", update);

    // fallback (same tab update handle)
    const interval = setInterval(update, 500);

    return () => {
      window.removeEventListener("storage", update);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="navbar sticky top-0 z-50 bg-base-100 shadow-sm bg-white ">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <Link to="/">
                <BiHome /> Home
              </Link>
            </li>
            <li>
              <Link to="/AllApps">
                <FaShop /> All Product
              </Link>
            </li>
            <li>
              <Link to="/InstallationApp">
                <MdAddShoppingCart /> Install Cart
              </Link>
            </li>
          </ul>
        </div>

        <Link to="/">
          <img
            className="w-[200px]"
            src="https://i.ibb.co.com/vx0LSgQD/IMG-2267.jpg"
            alt=""
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="text-black">
            <Link to="/">
              <BiHome /> Home
            </Link>
          </li>
          <li className="text-black">
            <Link to="/AllApps">
              <FaShop /> All Product
            </Link>
          </li>
          <li className="text-black">
            <Link to="/InstallationApp">
              <MdAddShoppingCart /> Install Cart
            </Link>
          </li>
        </ul>
      </div>

      <div className="navbar-end mr-[20px] text-black flex items-center gap-4">
        <div className="text-xl">
          <VscAccount />
        </div>

        <div className="relative">
          <Link to="/InstallationApp" className="text-xl">
            <FiShoppingCart />
            {apps.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {apps.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
