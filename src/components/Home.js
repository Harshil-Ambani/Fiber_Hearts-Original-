import React from "react";

const HomePage = () => {
  return (
    <div>
      {}
      <section
        id="hero"
        className="bg-gray-100 h-screen flex flex-col justify-center items-center text-center px-4"
      >
        <h1 className="text-5xl font-bold text-orange-500 mb-4">
          Welcome to ChefKart
        </h1>
        <p className="text-gray-700 text-lg mb-6">
          Your personalized kitchen assistant for hassle-free cooking. We bring
          professional chefs to your doorstep.
        </p>
        <a
          href="#services"
          className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition"
        >
          Explore Services
        </a>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-16 bg-white text-center px-4 lg:px-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          ChefKart is your ultimate kitchen partner, simplifying your daily
          cooking needs. Whether you're a busy professional, a foodie, or a
          family looking for healthy meals, we've got you covered with
          customized chef services.
        </p>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-16 bg-gray-100 text-center px-4 lg:px-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Personalized Chefs
            </h3>
            <p className="text-gray-600">
              Book professional chefs to prepare meals tailored to your
              preferences.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Meal Planning
            </h3>
            <p className="text-gray-600">
              Let us handle the planning for a balanced and nutritious diet.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-md">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">
              Ingredient Preparation
            </h3>
            <p className="text-gray-600">
              Enjoy prepped ingredients delivered to your doorstep, ready for
              cooking.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-white text-center px-4 lg:px-16"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-gray-600 text-lg mb-6">
          Have questions or want to book a service? Reach out to us!
        </p>
        <a
          href="#"
          className="bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition"
        >
          Get in Touch
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p className="text-sm">
          © 2024 ChefKart. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
