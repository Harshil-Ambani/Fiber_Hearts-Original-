import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryCards = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Chefit: One-time cook",
      description: "Get a professional cook for one-time within 60 minutes",
      features: [
        "Trained & Verified Cooks",
        "Healthy & Hygienic Food",
        "Tailored to Your Taste",
        "Quick Service",
      ],
      price: "₹299 /visit",
      buttonText: "Book Now",
    },
    {
      id: 2,
      name: "Party",
      description: "Discover amazing dishes for your next gathering.",
      features: [
        "Custom Menus for Events",
        "Professional Chefs",
        "On-site Cooking",
        "Exceptional Service",
      ],
      price: "₹399 /visit",
      buttonText: "Book Now",
    },
  ];

  // Single definition for the navigation handler
  const handleNavigate = (categoryId) => {
    if (categoryId === 2) {
      // Navigate to the menu selection page for "Party"
      navigate("/menu-selection", { state: { categoryId } });
    } else {
      // Navigate to the booking page for other categories
      navigate("/booking", { state: { categoryId } });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-between"
            style={{ minHeight: "550px" }}
          >
            <div>
              <h3 className="text-3xl font-semibold mb-4">{category.name}</h3>
              <p className="text-gray-700 mb-6">{category.description}</p>
              <hr className="my-6" />
              <ul className="mb-8">
                {category.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center text-gray-700 mb-4 text-lg"
                  >
                    <span className="text-green-500 mr-3 text-xl">✔</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="text-gray-500">
                <span className="font-bold text-3xl text-black">
                  {category.price}
                </span>
              </p>
            </div>
            <button
              onClick={() => handleNavigate(category.id)}
              className="mt-10 bg-orange-500 text-white py-3 px-6 rounded text-lg hover:bg-orange-600"
            >
              {category.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
