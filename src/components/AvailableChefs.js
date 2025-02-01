import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AvailableChefs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date, time, diners } = location.state || {};

  const chefs = [
    {
      id: 1,
      name: "Chef A",
      specialty: "Italian",
      image: "/images/chef-a.jpg",
    },
    {
      id: 2,
      name: "Chef B",
      specialty: "Chinese",
      image: "/images/chef-b.jpg",
    },
    {
      id: 3,
      name: "Chef C",
      specialty: "Indian",
      image: "/images/chef-c.jpg",
    },
  ];

  const [selectedChef, setSelectedChef] = useState(null);

  if (!date || !time || !diners) {
    return <p>Please go back and complete your booking details.</p>;
  }

  const handleSelectChef = (chefId) => {
    setSelectedChef(chefId);
  };

  const handleViewProfile = (chefId) => {
    navigate(`/chef-profile/${chefId}`, {
      state: { date, time, diners },
    });
  };

  const handleConfirmSelection = () => {
    if (selectedChef) {
      const chefDetails = chefs.find((chef) => chef.id === selectedChef);
      navigate("/payment", {
        state: { date, time, diners, chef: chefDetails },
      });
    } else {
      alert("Please select a chef to proceed.");
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Available Chefs
        </h2>
        <p className="text-lg text-gray-600 mb-4">
          Booking Date: {new Date(date).toLocaleDateString()}
        </p>
        <p className="text-lg text-gray-600 mb-4">Time: {time}</p>
        <p className="text-lg text-gray-600 mb-6">Diners: {diners}</p>

        <ul className="space-y-6">
          {chefs.map((chef) => (
            <li
              key={chef.id}
              className={`p-4 border rounded hover:bg-gray-100 flex items-center space-x-4 ${
                selectedChef === chef.id ? "border-green-500" : "border-gray-300"
              }`}
            >
              <img
                src={chef.image}
                alt={chef.name}
                className="w-24 h-24 object-cover rounded-full"
              />
              <div className="flex-1">
                <h3 className="text-xl font-semibold">{chef.name}</h3>
                <p className="text-gray-600">Specialty: {chef.specialty}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => handleViewProfile(chef.id)}
                  className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
                >
                  View Profile
                </button>
                <div
                  onClick={() => handleSelectChef(chef.id)}
                  className={`w-10 h-10 flex justify-center items-center border rounded cursor-pointer transition ${
                    selectedChef === chef.id
                      ? "bg-green-500 border-green-500 text-white"
                      : "bg-white border-gray-400 text-gray-800"
                  }`}
                  title="Select Chef"
                >
                  {selectedChef === chef.id && (
                    <span className="text-white text-lg font-bold">✔</span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <button
            onClick={handleConfirmSelection}
            className="bg-orange-500 text-white w-full py-3 rounded text-lg font-medium hover:bg-orange-600 transition"
          >
            Confirm Selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableChefs;
