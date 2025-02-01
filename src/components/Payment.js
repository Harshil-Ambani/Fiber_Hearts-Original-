import React from "react";
import { useLocation } from "react-router-dom";

const Payment = () => {
  const location = useLocation();
  const { date, time, diners, chef } = location.state || {};

  if (!date || !time || !diners || !chef) {
    return <p>Invalid order details. Please go back and try again.</p>;
  }

  const handlePayment = () => {
    alert("Payment successful! Thank you for booking.");
    // Add your payment logic here
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-10">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Payment Page
        </h2>
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Booking Details
          </h3>
          <p className="text-gray-600">Date: {new Date(date).toLocaleDateString()}</p>
          <p className="text-gray-600">Time: {time}</p>
          <p className="text-gray-600">Diners: {diners}</p>
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Chef Details</h3>
          <p className="text-gray-600">Name: {chef.name}</p>
          <p className="text-gray-600">Specialty: {chef.specialty}</p>
        </div>

        <div className="mt-8">
          <button
            onClick={handlePayment}
            className="bg-green-500 text-white w-full py-3 rounded text-lg font-medium hover:bg-green-600 transition"
          >
            Proceed to Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
