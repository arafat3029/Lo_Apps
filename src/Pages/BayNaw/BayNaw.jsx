import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { MdOutlineLocalShipping, MdPayment, MdOutlineShoppingBag } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa'; // react-icons/fa থেকে ইম্পোর্ট করা হয়েছে

const BayNaw = () => {
  // ১. ইউআরএল থেকে আইডি এবং লোডার থেকে ডেটা নেওয়া হলো
  const { id } = useParams();
  const appId = parseInt(id);
  const data = useLoaderData();

  // ২. আইডি অনুযায়ী নির্দিষ্ট প্রোডাক্টের তথ্য খুঁজে বের করা
  const appDetails = data?.find((app) => app.id === appId);

  // প্রোডাক্টের তথ্য ডিস্ট্রাকচারিং
  const { title, price, image } = appDetails || {
    title: "Premium Service/App",
    price: "500",
    image: "https://via.placeholder.com/150"
  };

  // ফর্ম স্টেট
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod' // ডিফল্ট: ক্যাশ অন ডেলিভারি
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order Submitted:", { ...formData, product: { title, price } });
    alert("আপনার অর্ডারটি সফলভাবে গ্রহণ করা হয়েছে!");
  };

  if (!appDetails && id) {
    return <div className="text-center py-20 text-gray-500">Product not found!</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 relative"> {/* relative যোগ করা হয়েছে */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden lg:flex">
        
        {/* বাম পাশ: অর্ডার ফর্ম */}
        <div className="flex-1 p-6 sm:p-10">
          <div className="flex items-center gap-2 text-cyan-600 font-bold text-xl mb-6">
            <MdOutlineLocalShipping size={26} />
            <h2>ডেলিভারি ইনফরমেশন</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* নাম */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">আপনার নাম *</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="এখানে আপনার পুরো নাম লিখুন"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-sm"
              />
            </div>

            {/* মোবাইল নম্বর */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">মোবাইল নম্বর *</label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="যেমন: 017XXXXXXXX"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-sm"
              />
            </div>

            {/* সম্পূর্ণ ঠিকানা */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">পূর্ণাঙ্গ ঠিকানা *</label>
              <textarea
                name="address"
                required
                rows="3"
                value={formData.address}
                onChange={handleChange}
                placeholder="গ্রাম/রোড, থানা, জেলা"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all text-sm resize-none"
              ></textarea>
            </div>

            {/* পেমেন্ট মেথড */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">পেমেন্ট পদ্ধতি</label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'cod' ? 'border-cyan-500 bg-cyan-50/50' : 'border-gray-200'}`}>
                  <span className="text-sm font-medium text-gray-800">ক্যাশ অন ডেলিভারি</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={handleChange}
                    className="w-4 h-4 text-cyan-600 accent-cyan-500"
                  />
                </label>

                <label className={`flex items-center justify-between p-3.5 border rounded-xl cursor-pointer transition-all ${formData.paymentMethod === 'online' ? 'border-cyan-500 bg-cyan-50/50' : 'border-gray-200'}`}>
                  <span className="text-sm font-medium text-gray-800">বিকাশ / রকেট / কার্ড</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={handleChange}
                    className="w-4 h-4 text-cyan-600 accent-cyan-500"
                  />
                </label>
              </div>
            </div>

            {/* অর্ডার কনফার্ম বাটন */}
            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 active:opacity-95 text-white font-bold py-3 px-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 mt-2"
            >
              <MdOutlineShoppingBag size={20} />
              অর্ডার কনফার্ম করুন
            </button>
          </form>
        </div>

        {/* ডান পাশ: অর্ডার সামারি */}
        <div className="w-full lg:w-80 bg-slate-50 p-6 sm:p-10 lg:p-6 border-t lg:border-t-0 lg:border-l border-gray-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-gray-800 font-bold text-lg mb-4">
              <MdPayment size={22} className="text-gray-600" />
              <h3>অর্ডার সামারি</h3>
            </div>

            {/* প্রোডাক্ট কার্ড */}
            <div className="flex items-center gap-4 bg-white p-3 rounded-xl border border-gray-100 shadow-sm mb-6">
              <img src={image} alt={title} className="w-16 h-16 object-contain bg-gray-50 rounded-lg p-1" />
              <div className="overflow-hidden">
                <h4 className="text-sm font-bold text-gray-800 truncate">{title}</h4>
                <p className="text-sm text-green-600 font-semibold mt-0.5">৳ {price}</p>
              </div>
            </div>

            {/* প্রাইস ক্যালকুলেশন */}
            <div className="space-y-2 text-sm text-gray-600 border-b border-gray-200 pb-4">
              <div className="flex justify-between">
                <span>সাবটোটাল</span>
                <span className="font-semibold text-gray-800">৳ {price}</span>
              </div>
              <div className="flex justify-between">
                <span>ডেলিভারি চার্জ</span>
                <span className="text-green-600 font-medium">ফ্রি</span>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 lg:pt-0 mt-4 lg:mt-0">
            <span className="text-base font-bold text-gray-800">সর্বমোট মূল্য</span>
            <span className="text-xl font-extrabold text-cyan-600">৳ {price}</span>
          </div>
        </div>

      </div>

      {/* --- WhatsApp Floating Button --- */}
      <a
        href="https://wa.me/YOUR_PHONE_NUMBER" // এখানে কান্ট্রি কোডসহ আপনার নম্বর দিন
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

export default BayNaw;