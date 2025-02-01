import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';

// Import components
import CategoryCards from './components/CategoryCards';  // Import CategoryCards
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ImageSlider from './components/Slider';
import ChefsPage from './components/ChefsPage';  // Import ChefsPage
import BookingPage from './components/BookingPage';  // Import BookingPage
import WhyChooseFiberHearts from "./components/WhyChooseFiberHearts";
import ComingSoonSection from "./components/ComingSoonSection";
import AvailableChefs from "./components/AvailableChefs";
import ChefProfile from "./components/ChefProfile";
import Login from "./components/Login";
import Payment from "./components/Payment";
import SignUp from "./components/SignUp";
import ServicesSection from "./components/Services";
import MenuSelector from "./components/MenuSelector";
import PeopleAndWaiterSelection from "./components/PeopleAndWaiterSelection";
import ChefDashboard from "./components/ChefDashboard";
import AuthPage from "./components/AuthPage";
import AdminAuthPage from "./components/Admin/AdminAuthPage";  // Correct import
import AdminForgotPassword from "./components/Admin/AdminForgetPassword";  // Correct import
import AdminDashboard from "./components/Admin/AdminDashboard";  // Correct import

// MainPage content
const MainPage = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-16">
        {/* Image Slider Section */}
        <ImageSlider />
      </div>

      {/* Category Section */}
      <div id="home" className="min-h-screen bg-gray-100 flex items-center justify-center">
        <CategoryCards />
      </div>

      {/* About Section */}
      <div
        id="about"
        className="min-h-screen bg-white px-6 py-10 flex items-center justify-center"
      >
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About FiberHearts</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            FiberHearts is a revolutionary culinary service that transforms how people
            experience home-cooked meals. Designed to bring the convenience of a personal
            chef to everyday households, FiberHearts connects you with skilled and vetted
            cooks who prepare nutritious and delicious meals right in your kitchen.
          </p> 
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Whether you're juggling a busy schedule, aiming to eat healthier, or simply
            seeking to enjoy authentic home-cooked flavors, FiberHearts tailors its
            services to your unique preferences and lifestyle. With a focus on quality,
            hygiene, and a personalized touch, FiberHearts brings the joy of homemade
            meals without the hassle, allowing you to savor both time and taste.
          </p>
        </div>
      </div>

      {/* Services Section */}
      <div
        id="services"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <h2 className="text-3xl font-bold">Our Services</h2>
      </div>
      {/* Services Section */}
      <div
        id="services"
        className="min-h-screen bg-gray-100 flex items-center justify-center"
      >
        <ServicesSection />
      </div>

      {/* The Footer */}
      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chefs" element={<ChefsPage />} />
          <Route path="/booking" element={<BookingPage />} />  {/* Add the BookingPage route */}
          <Route path="/available-chefs" element={<AvailableChefs />} />
          <Route path="/chef-profile/:id" element={<ChefProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/why-choose-fiber-hearts" element={<WhyChooseFiberHearts />} />     
          <Route path="/coming-soon" element={<ComingSoonSection />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/menu-selection" element={<MenuSelector />} /> 
          <Route path="/people-waiter-selection" element={<PeopleAndWaiterSelection />} />
          <Route path="/chef-dashboard" element={<ChefDashboard />} /> 
          <Route path="/authpage" element={<AuthPage />} />   
          <Route path="/adminauthpage" element={<AdminAuthPage />} />
          <Route path="/admin-forgot-password" element={<AdminForgotPassword />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes> {/* Closing Routes tag */}
      </div>
    </Router>
  );
}

export default App;
