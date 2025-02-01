import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MenuSelection = () => {
  const navigate = useNavigate();

  const [selectedMenus, setSelectedMenus] = useState([]);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);

  const menus = [
    "Italian Cuisine",
    "Indian Cuisine",
    "Chinese Cuisine",
    "Mexican Cuisine",
    "Continental Cuisine",
  ];

  // Generate available future time slots (1-hour intervals)
  useEffect(() => {
    const generateTimeSlots = () => {
      const now = new Date();
      let startHour = 10; // Start at 10:00 AM
      let endHour = 22; // End at 10:00 PM

      // If the selected date is today, remove past times and show only future slots
      if (selectedDate === new Date().toISOString().split("T")[0]) {
        // Get the current hour and minute
        const currentHour = now.getHours();
        const currentMinute = now.getMinutes();

        // Only show time slots that are greater than the current time
        const slots = [];
        for (let hour = startHour; hour < endHour; hour++) {
          const slotTime = new Date();
          slotTime.setHours(hour, 0, 0, 0); // Set hour, minute, and second to 0

          // If the time slot is in the future, add it to the list
          if (slotTime > now) {
            slots.push(`${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`);
          }
        }

        setTimeSlots(slots);
      } else {
        // If the selected date is not today, show all available time slots
        const slots = [];
        for (let hour = startHour; hour < endHour; hour++) {
          slots.push(`${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`);
        }
        setTimeSlots(slots);
      }
    };

    generateTimeSlots();
  }, [selectedDate]);

  const handleMenuChange = (menu) => {
    if (selectedMenus.includes(menu)) {
      setSelectedMenus(selectedMenus.filter((item) => item !== menu));
    } else {
      setSelectedMenus([...selectedMenus, menu]);
    }
  };

  const handleSubmit = () => {
    if (selectedMenus.length === 0 || !selectedDate || !selectedTime) {
      alert("Please select at least one menu, a date, and a time.");
      return;
    }

    // Redirect to people and waiter selection page with the selected data
    navigate("/people-waiter-selection", {
      state: { menus: selectedMenus, date: selectedDate, time: selectedTime },
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Menu Selection
        </h2>

        {/* Checkboxes for Menus */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select Menus
          </label>
          <div className="space-y-2">
            {menus.map((menu, index) => (
              <div key={index} className="flex items-center">
                <input
                  type="checkbox"
                  id={`menu-${index}`}
                  value={menu}
                  checked={selectedMenus.includes(menu)}
                  onChange={() => handleMenuChange(menu)}
                  className="mr-2"
                />
                <label htmlFor={`menu-${index}`} className="text-gray-700">
                  {menu}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Date Picker */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select a Date
          </label>
          <input
            type="date"
            className="w-full border rounded-lg p-3"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />
        </div>

        {/* Time Picker */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select a Time
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full border rounded-lg p-3"
          >
            <option value="">Select a time</option>
            {timeSlots.length > 0 ? (
              timeSlots.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))
            ) : (
              <option disabled>No slots available</option>
            )}
          </select>
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

export default MenuSelection;
