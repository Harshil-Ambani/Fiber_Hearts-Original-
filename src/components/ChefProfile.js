import React, { useState } from "react";

const ChefProfile = () => {
  const chef = {
    name: "Mr. Monu",
    rating: 4.21,
    totalRatings: 466,
    experience: 9,
    language: "Hindi",
    cooks: { veg: true, nonVeg: false },
    specialties: [
      { name: "North Indian", image: "path/to/north-indian.jpg" },
      { name: "South Indian", image: "path/to/south-indian.jpg" },
      { name: "Chinese", image: "path/to/chinese.jpg" },
    ],
    reviews: [
      {
        name: "Sakshi Dhingra",
        date: "Jul 2023",
        location: "Huda Plots RWE, Sector 56",
        rating: 5,
        feedback:
          "He was very professional and provided us with great service. In the main course, the food he prepared was delicious!",
      },
      // Add more reviews here
    ],
  };

  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-4">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button className="text-orange-500 text-lg font-semibold mr-4">&lt; Back</button>
        <h1 className="text-xl font-semibold text-gray-800">View Profile</h1>
      </div>

      {/* Chef Details */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <div className="flex items-center space-x-6">
          <img
            src="path/to/chef-image.jpg"
            alt={chef.name}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-gray-800">{chef.name}</h2>
            <p className="text-gray-600">
              <span className="font-semibold">{chef.rating}</span> ({chef.totalRatings})
            </p>
            <p className="text-gray-600">{chef.experience} years experience</p>
            <p className="text-gray-600">Speaks: {chef.language}</p>
            <p className="text-gray-600 mt-2">
              Cooks: {chef.cooks.veg ? "Veg" : ""} {chef.cooks.nonVeg ? "Non-Veg" : ""}
            </p>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Specialties</h3>
        <div className="flex space-x-4 overflow-x-auto">
          {chef.specialties.map((specialty, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-4 w-40 flex flex-col items-center"
            >
              <img
                src={specialty.image}
                alt={specialty.name}
                className="w-16 h-16 rounded-full mb-2"
              />
              <p className="text-sm font-medium text-gray-800">{specialty.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Summary */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Overall Rating</h3>
        <div>
          {/* Star breakdown */}
          {[5, 4, 3, 2, 1].map((star) => (
            <div key={star} className="flex items-center mb-2">
              <span className="text-gray-800 mr-2">{star} stars</span>
              <div className="flex-grow bg-gray-200 h-2 rounded-lg overflow-hidden">
                <div
                  className="bg-orange-500 h-full"
                  style={{ width: `${(star * 20)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Reviews</h3>
        {chef.reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4 mb-4">
            <p className="text-gray-800 font-medium mb-1">{review.name}</p>
            <p className="text-sm text-gray-500 mb-2">{review.date} - {review.location}</p>
            <p className="text-sm text-gray-800">{review.feedback}</p>
          </div>
        ))}
      </div>

      {/* Select Time */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <label className="block text-lg font-medium text-gray-700 mb-2">Select Time of Visit</label>
        <select
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select a time</option>
          <option value="10:00 AM">10:00 AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="2:00 PM">2:00 PM</option>
          <option value="4:00 PM">4:00 PM</option>
        </select>
      </div>

      {/* Continue Button */}
      <button
        className="bg-orange-500 text-white w-full py-3 rounded text-lg font-medium hover:bg-orange-600 transition duration-200"
      >
        Continue
      </button>
    </div>
  );
};

export default ChefProfile;
