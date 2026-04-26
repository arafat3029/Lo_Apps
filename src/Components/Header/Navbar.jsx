import React from "react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllApps">Apps</Link>
            </li>
            <li>
                <Link>Installation</Link>
            </li>
          </ul>
        </div>
        <Link to="/"><p className="btn btn-ghost text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#853fe7] bg-clip-text text-transparent">
            <img src="/logo.png" alt="" className="w-7" />
            HERO.IO</p></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/AllApps">Apps</Link>
          </li>
          <li>
            <Link>Installation</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn bg-gradient-to-r from-[#5a1ee7] to-[#9F62F2] p-6 text-white"> <FaGithub /><a href="https://github.com/arafat3029" target="_blank" rel="noopener noreferrer">Contribute</a></button>
      </div>
    </div>
  );
};

export default Navbar;
