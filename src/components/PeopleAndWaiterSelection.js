import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PeopleAndWaiterSelection = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // State for the number of people, number of waiters
  const [numPeople, setNumPeople] = useState(1);
  const [numWaiters, setNumWaiters] = useState(1); // Number of waiters to be selected

  const handleSubmit = () => {
    if (numPeople <= 0 || numWaiters <= 0) {
      alert("Please select the number of people and the number of waiters.");
      return;
    }

    // Process the booking, or pass data to a confirmation page
    navigate("/confirmation", {
      state: {
        ...location.state, // Passing the previous state (menus, date, time)
        numPeople,
        numWaiters, // Send the number of waiters selected
      },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          People & Waiter Selection
        </h2>

        {/* Number of People */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Number of People
          </label>
          <input
            type="number"
            min="1"
            value={numPeople}
            onChange={(e) => setNumPeople(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Number of Waiters */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Number of Waiters
          </label>
          <input
            type="number"
            min="1"
            value={numWaiters}
            onChange={(e) => setNumWaiters(Number(e.target.value))}
            className="w-full border rounded-lg p-3"
          />
        </div>

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full bg-orange-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-orange-600"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default PeopleAndWaiterSelection;
