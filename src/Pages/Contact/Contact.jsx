import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[750px] mx-auto px-4">
      <p className="font-bold text-3xl mb-4 mt-6">Contact</p>

      <div className="space-y-4">
        <h1 className="font-bold text-lg text-[#334155]">
          At Ponnofy.com, your satisfaction is our priority. 💖
        </h1>

        <p className="text-[#334155]">
          Our Ponnofy.com Customer Support Team is always ready to assist you
          with any questions about orders, delivery, returns, refunds, or other
          support you need.
        </p>
        <br />


        <p>Feel free to contact us through the following channels:</p>
        
        <div className="space-y-2 mb-6">
          <p>
            <span className="font-semibold">💬 Call / WhatsApp:</span>{" "}
            +8801345619858
          </p>

          <p>
            <span className="font-semibold">📧 Email:</span>{" "}
            ponnofybusiness@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
