import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close the menu for mobile devices
    }
  };

  return (
    <nav className="bg-black shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">FiberHearts</div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } lg:flex space-x-6 text-white font-medium`}
        >
          <li>
            <button
              onClick={() => handleScrollTo("home")}
              className="hover:text-orange-500 transition"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("about")}
              className="hover:text-orange-500 transition"
            >
              AboutUs
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("services")}
              className="hover:text-orange-500 transition"
            >
              Services
            </button>
          </li>
          <li>
            <button
              onClick={() => handleScrollTo("contact")}
              className="hover:text-orange-500 transition"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* CTA Buttons */}
        <div className="hidden lg:flex space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Sign Up
          </button>
          {/* Chef Login Button */}
          <button
            onClick={() => navigate("/authpage", { state: { isChefLogin: true } })} // Pass state
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          >
            Chef Login
          </button>
{/* Admin Login */}
          <button
            onClick={() => navigate("/AdminAuthPage")}
            className="bg-orange-500 text-black px-4 py-2 rounded-md hover:bg-orange-600 transition"
          >
            Admin Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
