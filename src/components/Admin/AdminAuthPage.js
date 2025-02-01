import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AdminAuthPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLogin, setIsLogin] = useState(true); 
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const url = isLogin
      ? "http://localhost:5000/admin-login"
      : "http://localhost:5000/admin-signup"; 

    const method = "POST";
    const body = JSON.stringify(formData);

    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body,
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert(isLogin ? "Login successful!" : "Signup successful!");
        navigate("/admin"); 
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-96">
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Admin Login" : "Admin Sign Up"}
        </h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
            >
              {isLogin ? "Login" : "Sign Up"}
            </button>
          </div>
        </form>

        {isLogin && (
          <div className="text-center mt-4">
            <Link to="/admin-forgot-password" className="text-blue-500 font-bold">
              Forgot Password?
            </Link>
          </div>
        )}

        <div className="text-center mt-4">
          <span className="text-sm text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </span>
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 ml-2 font-bold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminAuthPage;
