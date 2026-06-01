import React from "react";
import { BsFacebook } from "react-icons/bs";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal  text-base-content p-10 bg-white shadow-lg border-t border-gray-200">
      <div>
        <p className="font-semibold text-black">
          Ponnofy.com offers stylish <br />
          and comfortable products made just for you.
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/mdarafat.mia.1804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 rounded-full hover:scale-110 transition"
              src="https://i.ibb.co.com/PZV8Dn3c/canva-facebook-logo-MAGz-Nq-Krz-KM.png"
              alt="Facebook"
            />
          </a>

          <a
            href="https://www.facebook.com/mdarafat.mia.1804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-[50px] rounded-full hover:scale-110 transition"
              src="https://i.ibb.co.com/KcJh6zHx/download-1.jpg"
              alt="Social"
            />
          </a>

          <a
            href="https://www.facebook.com/mdarafat.mia.1804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 rounded-full hover:scale-110 transition"
              src="https://i.ibb.co.com/bRNjhGHt/download.png"
              alt="Social"
            />
          </a>

          <a
            href="https://www.facebook.com/mdarafat.mia.1804"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="w-10 rounded-full hover:scale-110 transition"
              src="https://i.ibb.co.com/Dg7Nt3bQ/download-2.png"
              alt="Social"
            />
          </a>
        </div>
      </div>
      <div className="text-black">
        <p className="font-bold text-xl">Information</p>
        <Link to='/contact'> <a className="text-[#0e8ddb]" href="">Contact Us</a> </Link>
        <Link to='/'><a className="text-[#0e8ddb]" href="">About Us</a></Link>
      </div>
      <div className="text-black">
        <p className="font-bold text-xl">Contact Us</p>
        <p>+8801345619858</p>
        <p>ponnofybusiness@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
