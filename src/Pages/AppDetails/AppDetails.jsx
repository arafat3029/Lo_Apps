import React from "react";
import { useLoaderData, useParams } from "react-router";
import { MdOutlineShoppingCart } from "react-icons/md";
import { addToStoreDB } from "../../utility/addToDB";
import { TbMessageChatbot } from "react-icons/tb";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";

const AppDetails = () => {
  const { id } = useParams();
  const appId = parseInt(id);

  const data = useLoaderData();
  const appDetails = data.find((app) => app.id === appId);

  const {
    image,
    title,
    price,
    WithoutDiscountPrice,
    description,
    ratingAvg,
    Highlights,
  } = appDetails;

  const handleInstall = (id) => {
    addToStoreDB(id);
  };

  const discountPercent = Math.round(
    ((WithoutDiscountPrice.replace(/,/g, "") - price.replace(/,/g, "")) /
      WithoutDiscountPrice.replace(/,/g, "")) *
      100,
  );

  return (
    <div className="bg-white pb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto py-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Product Image */}
          <div className="flex-1">
  <img
    src={image}
    alt={title}
    className="w-full h-64 max-w-lg mx-auto object-cover"
  />
</div>

          {/* Product Details */}
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap mt-5">
              <span className="text-3xl lg:text-4xl font-bold text-green-600">
                ৳ {price}
              </span>

              <span className="text-lg lg:text-xl text-gray-400 line-through">
                ৳ {WithoutDiscountPrice}
              </span>

              <span className="bg-red-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                -{discountPercent}%
              </span>
            </div>
            <h1 className="text-xl lg:text-4xl  text-black">{title}</h1>

            <div className="flex items-center gap-1 mt-4">
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarFullOutline className="text-amber-400 text-2xl" />
              <TiStarHalfOutline className="text-amber-400 text-2xl" />

              <span className="ml-2 text-base font-semibold text-gray-800">
                {ratingAvg.toFixed(1)}
              </span>

              <span className="text-sm text-gray-500">/ 5.0</span>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-black mt-6">
                Highlights
              </h2>
              <p className="mt-4 text-gray-600 leading-relaxed">{Highlights}</p>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="border-t border-gray-200 mt-6 pt-8">
          <h2 className="text-2xl font-bold text-black mb-4">Description</h2>

          <p className="text-gray-700 leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 w-full bg-white border-t z-50">
        <div className="flex items-center h-14">
          {/* Chat */}
          <button className="w-16 h-full flex flex-col items-center justify-center border-r border-gray-200">
            <TbMessageChatbot size={22} className="text-gray-600" />
            <span className="text-[10px] text-gray-500">Chat</span>
          </button>

          {/* Buy Now */}
          <button className="flex-1 h-full bg-cyan-400 text-white font-medium">
            Buy Now
          </button>

          {/* Add To Cart */}
          <button
            onClick={() => handleInstall(id)}
            className="flex-1 h-full bg-orange-500 text-white font-medium"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
