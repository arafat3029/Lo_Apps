import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative text-center">
        {/* 404 Text over Image */}
        <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-8xl font-bold text-black">
          404
        </h1>

        {/* Image */}
        <img src="/dribbble_1.gif" alt="404 Illustration" className="mx-auto" />

        {/* Subtitle */}
        <h2 className="-mt-[140px] text-4xl font-semibold text-gray-800">
          Looks like you're lost
        </h2>

        {/* Message */}
        <p className="text-center mt-3 text-gray-600">
          Oops! The page you are looking for is not available.
        </p>

        {/* Button */}
        <div className="mt-5">
            <Link to="/" className="btn bg-[#39ad31] text-white px-6 py-2 rounded-md hover:bg-green-600 transition">Go Home</Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;