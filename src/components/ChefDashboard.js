import React, { useState } from "react";

const ChefDashboard = () => {
  const [partyOrders, setPartyOrders] = useState([
    { id: 1, customer: "Alice Johnson", dish: "Buffet Package", status: "Pending" },
    { id: 2, customer: "Robert Brown", dish: "Wedding Special", status: "In Progress" },
  ]);

  const [oneTimeOrders, setOneTimeOrders] = useState([
    { id: 1, customer: "John Doe", dish: "Spaghetti Carbonara", status: "Pending" },
    { id: 2, customer: "Jane Smith", dish: "Margherita Pizza", status: "In Progress" },
  ]);

  const handleStatusChange = (setOrders, orders, orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-green-500 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold">Chef Dashboard</h1>
      </header>

      <main className="p-6 space-y-6">
        {/* Party Orders Section */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Party Orders</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Order ID</th>
                <th className="border border-gray-300 p-2">Customer</th>
                <th className="border border-gray-300 p-2">Dish</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {partyOrders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 p-2">{order.id}</td>
                  <td className="border border-gray-300 p-2">{order.customer}</td>
                  <td className="border border-gray-300 p-2">{order.dish}</td>
                  <td className="border border-gray-300 p-2">{order.status}</td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(setPartyOrders, partyOrders, order.id, e.target.value)
                      }
                      className="border border-gray-300 p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* One-Time Cook Orders Section */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">One-Time Cook Orders</h2>
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Order ID</th>
                <th className="border border-gray-300 p-2">Customer</th>
                <th className="border border-gray-300 p-2">Dish</th>
                <th className="border border-gray-300 p-2">Status</th>
                <th className="border border-gray-300 p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {oneTimeOrders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 p-2">{order.id}</td>
                  <td className="border border-gray-300 p-2">{order.customer}</td>
                  <td className="border border-gray-300 p-2">{order.dish}</td>
                  <td className="border border-gray-300 p-2">{order.status}</td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleStatusChange(setOneTimeOrders, oneTimeOrders, order.id, e.target.value)
                      }
                      className="border border-gray-300 p-1 rounded"
                    >
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Profile Section */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Profile</h2>
          <div>
            <p>
              <strong>Name:</strong> Chef Gordon Ramsay
            </p>
            <p>
              <strong>Email:</strong> chef.ramsay@example.com
            </p>
          </div>
          <button className="bg-yellow-500 text-white px-4 py-2 mt-4 rounded hover:bg-yellow-600">
            Edit Profile
          </button>
        </section>
      </main>
    </div>
  );
};

export default ChefDashboard;
