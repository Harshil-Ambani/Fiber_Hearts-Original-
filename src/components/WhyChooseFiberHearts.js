import React from "react";

const WhyChooseFiberHearts = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-bold text-orange-500 text-center mb-12">Why Choose FiberHearts?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Feature 1 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-orange-500 text-4xl mb-4">
              <i className="fas fa-utensils"></i>
            </div>
            <h4 className="text-xl font-semibold mb-2">Professional Chefs</h4>
            <p className="text-gray-600">
              Our chefs bring a world-class culinary experience to your table.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-orange-500 text-4xl mb-4">
              <i className="fas fa-leaf"></i>
            </div>
            <h4 className="text-xl font-semibold mb-2">Fresh Ingredients</h4>
            <p className="text-gray-600">
              We prioritize quality with the freshest ingredients.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-orange-500 text-4xl mb-4">
              <i className="fas fa-clock"></i>
            </div>
            <h4 className="text-xl font-semibold mb-2">Quick Service</h4>
            <p className="text-gray-600">
              Timely service ensures your satisfaction at every step.
            </p>
          </div>
          {/* Feature 4 */}
          <div className="text-center bg-white p-6 rounded-lg shadow-lg">
            <div className="text-orange-500 text-4xl mb-4">
              <i className="fas fa-smile"></i>
            </div>
            <h4 className="text-xl font-semibold mb-2">Customer Focused</h4>
            <p className="text-gray-600">
              Your happiness is our top priority, always.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFiberHearts;
