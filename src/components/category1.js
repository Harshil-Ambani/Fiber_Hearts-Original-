import React, { useState } from "react";

const ChefDashboard = () => {
  const [orders, setOrders] = useState([
    { id: 1, customer: "Doe", dish: "Spaghetti Carbonara", status: "Pending" },
    { id: 2, customer: "Smith", dish: "Margherita Pizza", status: "In Progress" },
  ]);

  const [menuItems, setMenuItems] = useState([
    { id: 1, name: "Spaghetti Carbonara", price: "$12" },
    { id: 2, name: "Margherita Pizza", price: "$10" },
    { id: 3, name: "Caesar Salad", price: "$8" },
  ]);

  const [newDish, setNewDish] = useState("");
  const [newPrice, setNewPrice] = useState("");

  // Handle status updates for orders
  const handleOrderStatusChange = (orderId, newStatus) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  // Add a new menu item
  const handleAddDish = () => {
    if (newDish && newPrice) {
      setMenuItems([
        ...menuItems,
        { id: Date.now(), name: newDish, price: newPrice },
      ]);
      setNewDish("");
      setNewPrice("");
    }
  };

  // Remove a menu item
  const handleRemoveDish = (id) => {
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-green-500 text-white p-4 shadow-lg">
        <h1 className="text-3xl font-bold">Chef Dashboard</h1>
      </header>

      {/* Main Content */}
      <main className="p-6 space-y-6">
        {/* Orders Section */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Orders</h2>
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
              {orders.map((order) => (
                <tr key={order.id}>
                  <td className="border border-gray-300 p-2">{order.id}</td>
                  <td className="border border-gray-300 p-2">{order.customer}</td>
                  <td className="border border-gray-300 p-2">{order.dish}</td>
                  <td className="border border-gray-300 p-2">{order.status}</td>
                  <td className="border border-gray-300 p-2">
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleOrderStatusChange(order.id, e.target.value)
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

        {/* Menu Section */}
        <section className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-bold mb-4">Menu Management</h2>
          <ul>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center border-b py-2"
              >
                <div>
                  <span className="font-bold">{item.name}</span> - {item.price}
                </div>
                <button
                  onClick={() => handleRemoveDish(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Dish Name"
              value={newDish}
              onChange={(e) => setNewDish(e.target.value)}
              className="border p-2 rounded mr-2"
            />
            <input
              type="text"
              placeholder="Price"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
              className="border p-2 rounded mr-2"
            />
            <button
              onClick={handleAddDish}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add New Dish
            </button>
          </div>
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
