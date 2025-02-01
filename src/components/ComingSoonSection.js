import React from "react";

const ComingSoonSection = () => {
  return (
    <div className="bg-orange-100 py-16 px-6 md:px-12 lg:px-24">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-orange-500 mb-6 leading-tight">
            Big Things Are Cooking at FiberHearts!
          </h2>
          <p className="text-gray-700 text-lg mb-4">
            Exciting news! Our app is getting a makeover to serve you even better. While it’s 
            temporarily unavailable for download, our services are fully operational!
          </p>
          <p className="text-gray-700 text-lg mb-4">
            You can still book your favorite chefs, caterers, and bartenders by reaching out 
            to us directly through our website or by giving us a call. We’re here to make 
            your culinary experiences seamless and unforgettable!
          </p>
          <p className="text-gray-700 text-lg">
            Thank you for your support and patience. Stay tuned – our upgraded app will be 
            worth the wait!
          </p>
        </div>

        {/* Image with Testimonial */}
        <div className="relative">
          <img
            src="/dining-party.jpg" // Replace with your image path
            alt="Dining Party"
            className="rounded-lg shadow-lg"
          />
          {/* Testimonial Overlay */}
          <div className="absolute top-6 left-6 bg-white p-4 rounded-md shadow-md">
            <p className="text-lg italic text-gray-800">
              "FiberHearts is a total game changer when I plan parties at home!"
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-700">
              - Deepa Rajan <span className="text-orange-500">★★★★★</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonSection;
