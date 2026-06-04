import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";

const Trendings = () => {
  const [trendingApps, setTrendingApps] = useState([]);

  useEffect(() => {
    fetch("App.json")
      .then((res) => res.json())
      .then((data) => setTrendingApps(data.slice(0, 8)));
  }, []);

  const handleInstalls = (id) => {
    addToStoreDB(id);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 place-items-center max-w-7xl mx-auto px-4 py-8">
      {trendingApps.map((app) => {
        // ডিসকাউন্ট পার্সেন্টেজ হিসাব করার সেফ লজিক
        const originalPrice =
          parseFloat(app.WithoutDiscountPrice?.replace(/,/g, "")) || 0;
        const currentPrice = parseFloat(app.price?.replace(/,/g, "")) || 0;
        const hasDiscount = originalPrice > currentPrice;
        const discountPercent = hasDiscount
          ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
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

            {/* Product Details Link Area */}
            <Link
              to={`/AppDetails/${app.id}`}
              className="w-full block p-4 flex-1"
            >
              {/* Image Container with Soft Background & Smooth Zoom */}
              <div className="w-full h-[180px] flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden p-3 border border-gray-50 group-hover:bg-gray-100/40 transition-colors duration-300 relative">
                <img
                  className={`h-full w-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out ${isSoldOut ? "opacity-40 grayscale" : ""}`}
                  src={app.image}
                  alt={app.title}
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

                {/* Product Title */}
                <h2 className="font-medium text-gray-800 text-sm md:text-base line-clamp-2 min-h-[44px] leading-snug group-hover:text-accent transition-colors duration-200">
                  {app.title}
                </h2>

                {/* Price Tags */}
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

            {/* Action Button Area */}
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
  );
};

export default Trendings;
