import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router"; 
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToStoreDB } from "../../utility/addToDB";
import { TbMessageChatbot } from "react-icons/tb";
import { TiStarFullOutline, TiStarHalfOutline } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa"; // react-icons/fa থেকে একবারে ক্লিন ইম্পোর্ট

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);
  const navigate = useNavigate(); 

  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === appId);

  // ডিফল্ট ভ্যালুসহ অবজেক্ট ডিস্ট্রাকচারিং
  const {
    image,
    title,
    price = "0",
    WithoutDiscountPrice = "0",
    description,
    ratingAvg = 0,
    Highlights,
    quantity,
  } = appDetails || {};

  const handleInstall = (targetId) => {
    addToStoreDB(targetId);
  };

  // Sold Out চেক করার লজিক
  const isSoldOut = quantity === 0 || quantity === "0" || !quantity;

  // ডিসকাউন্ট পার্সেন্টেজ হিসাব করার লজিক
  const origPrice = parseFloat(WithoutDiscountPrice?.replace(/,/g, "")) || 0;
  const currPrice = parseFloat(price?.replace(/,/g, "")) || 0;
  const hasDiscount = origPrice > currPrice;
  const discountPercent = hasDiscount
    ? Math.round(((origPrice - currPrice) / origPrice) * 100)
    : 0;

  if (!appDetails) {
    return (
      <div className="text-center py-20 text-gray-500">Product not found!</div>
    );
  }

  return (
    <div className="bg-white pb-20 px-4 sm:px-6 relative min-h-screen"> {/* relative এবং min-h-screen যোগ করা হয়েছে */}
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Product Image */}
          <div className="flex-1 w-full">
            <div className="relative max-w-lg mx-auto bg-slate-50 rounded-2xl overflow-hidden p-4 border border-gray-100 flex items-center justify-center">
              <img
                src={image}
                alt={title}
                className={`w-full h-64 sm:h-80 object-contain transition-all duration-300 ${isSoldOut ? "opacity-30 grayscale" : ""}`}
              />
              {/* Sold Out Overlay */}
              {isSoldOut && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <span className="bg-black/75 text-white text-sm font-bold uppercase tracking-wider px-4 py-2 rounded-xl shadow-md">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex-1 w-full">
            <div className="flex items-center gap-3 flex-wrap mt-5">
              <span className="text-3xl lg:text-4xl font-bold text-green-600">
                ৳ {price}
              </span>

              {hasDiscount && (
                <span className="text-lg lg:text-xl text-gray-400 line-through">
                  ৳ {WithoutDiscountPrice}
                </span>
              )}

              {hasDiscount && !isSoldOut && (
                <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full animate-pulse">
                  -{discountPercent}%
                </span>
              )}

              {isSoldOut && (
                <span className="bg-gray-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  Sold Out
                </span>
              )}
            </div>

            <h1 className="text-xl lg:text-4xl font-bold text-black mt-2 leading-tight">
              {title}
            </h1>

            {/* Ratings */}
            <div className="flex items-center gap-1 mt-4">
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarHalfOutline className="text-amber-400 text-2xl" />

              <span className="ml-2 text-base font-semibold text-gray-800">
                {Number(ratingAvg).toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">/ 5.0</span>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold text-black mt-6">Highlights</h2>
              <p className="mt-2 text-gray-600 leading-relaxed">
                {Highlights || "No highlights available."}
              </p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="border-t border-gray-200 mt-10 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Description</h2>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {description || "No description available."}
          </p>
        </div>
      </div>

      {/* Bottom Sticky Action Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50 shadow-[0_-4px_12px_rgba(0,0,0,0.05)]">
        <div className="flex items-center h-14 max-w-7xl mx-auto">
          {/* Chat Button */}
          <button className="w-16 h-full flex flex-col items-center justify-center border-r border-gray-200 hover:bg-slate-50 transition-colors">
            <TbMessageChatbot size={22} className="text-gray-600" />
            <span className="text-[10px] text-gray-500 mt-0.5">Chat</span>
          </button>

          {/* Buy Now Button */}
          <button
            disabled={isSoldOut}
            onClick={() => navigate(`/baynaw/${id}`)}
            className={`flex-1 h-full font-semibold tracking-wide transition-all text-white flex items-center justify-center
              ${
                isSoldOut
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-cyan-500 hover:bg-cyan-600 active:opacity-90"
              }`}
          >
            {isSoldOut ? "Sold Out" : "Buy Now"}
          </button>

          {/* Add To Cart Button */}
          <button
            onClick={() => handleInstall(appId)}
            disabled={isSoldOut}
            className={`flex-1 h-full font-semibold tracking-wide transition-all text-white flex items-center justify-center gap-2
              ${
                isSoldOut
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-orange-500 hover:bg-orange-600 active:opacity-90"
              }`}
          >
            {!isSoldOut && <MdOutlineShoppingCart size={18} />}
            {isSoldOut ? "Sold Out" : "Add to Cart"}
          </button>
        </div>
      </div>

      {/* --- WhatsApp Floating Button --- */}
      <a
        href="https://wa.me/message/V4L7CRKUKZYDO1" // এখানে কান্ট্রি কোডসহ আপনার নম্বর দিন
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-6 bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:bg-[#20ba5a] hover:scale-110 active:scale-95 transition-all duration-300 z-[60] flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} />
        
        {/* Hover Text */}
        <span className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
          Contact Us
        </span>
      </a>
    </div>
  );
};

export default AppDetails;