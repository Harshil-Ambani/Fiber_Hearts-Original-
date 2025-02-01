import React from "react";
import WhyChooseFiberHearts from "./WhyChooseFiberHearts"; // Import the component

const Footer = () => {
  return (
    <>
      {/* Why Choose FiberHearts Section */}
      <WhyChooseFiberHearts />

      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-6">
          {/* Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center sm:text-left">
              <h2 className="text-4xl font-bold text-orange-500 mb-4">FiberHearts</h2>
              <p className="text-gray-400">
                Bringing the best culinary experiences right to your door.
              </p>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a href="/" className="text-white hover:text-orange-500 transition">Home</a>
                </li>
                <li>
                  <a href="/about" className="text-white hover:text-orange-500 transition">About</a>
                </li>
                <li>
                  <a href="/services" className="text-white hover:text-orange-500 transition">Services</a>
                </li>
                <li>
                  <a href="/contact" className="text-white hover:text-orange-500 transition">Contact</a>
                </li>
              </ul>
            </div>
            <div className="text-center sm:text-left">
              <h3 className="text-xl font-semibold text-orange-500 mb-4">Follow Us</h3>
              <div className="flex justify-center sm:justify-start space-x-6">
                <a href="https://facebook.com" className="text-white hover:text-orange-500 transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com" className="text-white hover:text-orange-500 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" className="text-white hover:text-orange-500 transition">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">&copy; 2025 FiberHearts. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
