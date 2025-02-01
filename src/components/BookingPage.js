import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // Default to today
  const [selectedTime, setSelectedTime] = useState("");
  const [timeSlots, setTimeSlots] = useState([]);
  const [diners, setDiners] = useState(1);
  const navigate = useNavigate();

  // Generate time slots dynamically
  useEffect(() => {
    const generateTimeSlots = () => {
      const now = new Date();
      let startHour = 10; // Business hours start at 10 AM
      let endHour = 22; // Business closes at 10 PM

      if (selectedDate.toDateString() === now.toDateString()) {
        // If booking for today, start from next available hour
        startHour = Math.max(startHour, now.getHours() + 1);
      }

      const slots = [];
      for (let hour = startHour; hour < endHour; hour++) {
        slots.push(
          `${hour % 12 || 12}:00 ${hour < 12 ? "AM" : "PM"}`
        );
      }

      setTimeSlots(slots);
      setSelectedTime(""); // Reset time when date changes
    };

    generateTimeSlots();
  }, [selectedDate]);

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select both date and time before confirming your booking.");
      return;
    }
    const formattedDate = selectedDate.toISOString();
    navigate("/available-chefs", {
      state: { date: formattedDate, time: selectedTime, diners },
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10 flex justify-center">
      <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Booking Details
        </h2>

        {/* Date Selection */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Visit Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            minDate={new Date()} // Prevent past date selection
            placeholderText="Select a date"
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Time Selection */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Time of Visit
          </label>
          <select
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:ring-2 focus:ring-orange-500"
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

        {/* Diners Selection */}
        <div className="mb-6">
          <label className="block text-lg font-medium text-gray-700 mb-2">
            Select Number of Diners
          </label>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setDiners(Math.max(1, diners - 1))}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              -
            </button>
            <span className="text-lg font-medium">{diners}</span>
            <button
              onClick={() => setDiners(diners + 1)}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
            >
              +
            </button>
          </div>
        </div>

        {/* Summary and Confirm Button */}
        <div className="mt-6">
          <div className="mb-4">
            <p className="text-lg">
              Payable Amount:{" "}
              <span className="font-bold text-orange-500">
                ₹{3499 + 100 * (diners - 1)}
              </span>
            </p>
          </div>
          <button
            onClick={handleBooking}
            className="bg-orange-500 text-white w-full py-3 rounded text-lg font-medium hover:bg-orange-600 transition duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
