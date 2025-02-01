import React from "react";

const ChefsPage = () => {
  const chefs = [
    { id: 1, name: "Chef John", expertise: "Italian Cuisine", rating: "4.5" },
    { id: 2, name: "Chef Emily", expertise: "Indian Cuisine", rating: "4.8" },
    { id: 3, name: "Chef Michael", expertise: "Continental", rating: "4.3" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Chefs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <div
              key={chef.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
            >
              <img
                src={`https://via.placeholder.com/150?text=Chef+${chef.name}`}
                alt={chef.name}
                className="w-32 h-32 rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold text-gray-800">{chef.name}</h3>
              <p className="text-gray-600">{chef.expertise}</p>
              <p className="text-yellow-500">Rating: {chef.rating}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefsPage;
