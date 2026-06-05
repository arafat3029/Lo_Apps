import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Footer from "../../Components/Footer/Footer";
import { FaWhatsapp } from "react-icons/fa"; // react-icons/fa থেকে ইম্পোর্ট করা হয়েছে

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

  // সার্চ, ফিল্টার এবং প্রাইস শর্টিং হ্যান্ডেল করার লজিক
  const filteredApps = allapps
    .filter((app) => {
      // টাইটেল এবং কোম্পানি নেম দুইটার মাধ্যমেই সার্চ করার সুবিধা
      const searchString =
        `${app.title || ""} ${app.companyName || ""}`.toLowerCase();
      const matchesSearch = searchString.includes(search.toLowerCase());

      // যদি প্রাইস ফিল্টার সিলেক্ট করা থাকে তবে ক্যাটাগরি ফিল্টার স্কিপ হবে
      const isPriceSort = filter === "lowToHigh" || filter === "highToLow";
      const matchesFilter =
        filter === "" ||
        isPriceSort ||
        (app.category && app.category.toLowerCase() === filter.toLowerCase());

      return matchesSearch && matchesFilter;
    })
    .sort((a, b) => {
      // কমা (যেমন: ১,২৯৯ থেকে 1299) রিমুভ করে নাম্বারে কনভার্ট করার সেফ লজিক
      const priceA = parseFloat(a.price?.replace(/,/g, "")) || 0;
      const priceB = parseFloat(b.price?.replace(/,/g, "")) || 0;

      if (filter === "lowToHigh") {
        return priceA - priceB; // ছোট থেকে বড় দাম
      }
      if (filter === "highToLow") {
        return priceB - priceA; // বড় থেকে ছোট দাম
      }
      return 0; // ডিফল্ট সিকোয়েন্স
    });

  return (
    <div className="bg-white min-h-screen flex flex-col justify-between relative"> {/* relative যোগ করা হয়েছে */}
      <div>
        {/* Search & Filter Bar Container */}
        <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
          <div className="bg-white p-3 sm:p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-row gap-2 sm:gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <span className="absolute inset-y-0 left-3 flex items-center pl-0.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search..."
                className="input input-bordered w-full h-10 sm:h-12 pl-9 sm:pl-11 bg-slate-50 text-gray-800 border-gray-200 focus:border-accent rounded-xl focus:outline-none transition-colors text-xs sm:text-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {/* Filter & Sort Dropdown */}
            <div className="w-auto min-w-[130px] sm:min-w-[180px]">
              <select
                className="select select-bordered w-full h-10 sm:h-12 bg-slate-50 text-gray-800 border-gray-200 focus:border-accent rounded-xl focus:outline-none transition-colors font-medium text-xs sm:text-sm px-2 sm:px-4"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                <option value="">All Products</option>
                {/* <option value="electronics">Electronics</option>
                <option value="gadgets">Gadgets</option>
                <option value="accessories">Accessories</option> */}
                <option value="lowToHigh">Price: Low to High</option>
                <option value="highToLow">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center max-w-7xl mx-auto px-4 py-6">
          {filteredApps.map((app) => {
            // ডিসকাউন্ট পার্সেন্টেজ হিসাব করার লজিক
            const originalPrice =
              parseFloat(app.WithoutDiscountPrice?.replace(/,/g, "")) || 0;
            const currentPrice = parseFloat(app.price?.replace(/,/g, "")) || 0;
            const hasDiscount = originalPrice > currentPrice;
            const discountPercent = hasDiscount
              ? Math.round(
                  ((originalPrice - currentPrice) / originalPrice) * 100,
                )
              : 0;

            // Sold Out চেক করার লজিক (নাম্বার বা স্ট্রিং দুইটাই হ্যান্ডেল করবে)
            const isSoldOut = app.quantity === 0 || app.quantity === "0";

            return (
              <div
                key={app.id}
                className="group relative w-full max-w-[280px] lg:max-w-[320px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Badge Handling */}
                {isSoldOut ? (
                  <span className="absolute top-3 left-3 z-10 bg-gray-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                    SOLD OUT
                  </span>
                ) : (
                  hasDiscount && (
                    <span className="absolute top-3 left-3 z-10 bg-red-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm animate-pulse">
                      {discountPercent}% OFF
                    </span>
                  )
                )}

                {/* Link Area */}
                <Link
                  to={`/AppDetails/${app.id}`}
                  className="w-full block p-4 flex-1"
                >
                  {/* Image Area */}
                  <div className="w-full h-[160px] sm:h-[180px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-3 border border-gray-50 group-hover:bg-gray-100/40 transition-colors duration-300 relative">
                    <img
                      className={`h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out ${isSoldOut ? "opacity-40 grayscale" : ""}`}
                      src={app.image}
                      alt={app.title || app.companyName}
                    />
                    {isSoldOut && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 rounded-xl">
                        <span className="bg-black/70 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-md">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="mt-4 space-y-1.5">
                    {/* Brand / Company Name */}
                    <p className="text-[11px] font-bold text-accent/80 tracking-widest uppercase truncate">
                      {app.companyName || "Gadget"}
                    </p>

                    {/* Title */}
                    <h2 className="font-medium text-gray-800 text-sm md:text-base line-clamp-2 min-h-[44px] leading-snug group-hover:text-accent transition-colors duration-200">
                      {app.title || app.companyName}
                    </h2>

                    {/* Pricing */}
                    <div className="pt-1 flex items-center gap-2 flex-wrap">
                      <p className="text-accent font-extrabold text-xl md:text-2xl flex items-baseline">
                        <span className="text-sm font-semibold mr-0.5">৳</span>
                        {app.price}
                      </p>

                      {hasDiscount && (
                        <p className="text-gray-400 text-xs md:text-sm line-through font-normal">
                          ৳{app.WithoutDiscountPrice}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>

                {/* Action Button */}
                <div className="p-4 pt-0">
                  <button
                    onClick={() => !isSoldOut && handleInstalls(app.id)}
                    disabled={isSoldOut}
                    className={`btn w-full rounded-xl font-semibold shadow-sm transition-all duration-200 flex items-center justify-center border-none
    ${
      isSoldOut
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "btn-accent text-white active:scale-95 bg-accent hover:bg-accent-focus group-hover:shadow-md"
    }`}
                  >
                    {isSoldOut ? "Sold Out" : "Add To Cart"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State / No Products Found */}
        {filteredApps.length === 0 && (
          <div className="text-center py-20 px-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto text-gray-300 mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="text-lg font-bold text-gray-700">
              No Products Found
            </h3>
            <p className="text-gray-400 text-sm mt-1">
              Try checking your spelling or selecting a different category.
            </p>
          </div>
        )}
      </div>

      <Footer />

      {/* --- WhatsApp Floating Button --- */}
      <a
        href="https://wa.me/message/V4L7CRKUKZYDO1" // এখানে কান্ট্রি কোডসহ আপনার নম্বর দিন
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 z-50 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={28} />
        
        {/* Hover Text */}
        <span className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Contact Us
        </span>
      </a>
    </div>
  );
};

export default Allappss;