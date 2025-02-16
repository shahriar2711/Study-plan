import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Hardcoded default users
  const defaultUsers = [
    { email: "atiq@gmail.com", password: "atiq123" },
    { email: "sk@gmail.com", password: "sk123" },
    { email: "mun@gmail.com", password: "mun123" },
    { email: "abrar@gmail.com", password: "abrar123" },
    { email: "enan@gmail.com", password: "enan123" },
    { email: "adil@gmail.com", password: "adil123" },
    { email: "tasnim@gmail.com", password: "tasnim123" },
    { email: "ashir@gmail.com", password: "ashir123" },
    { email: "sami@gmail.com", password: "sami123" },
    { email: "kanchi@gmail.com", password: "kanchi123" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
  
    console.log("Form Data Submitted:", formData);
  
    // Check user credentials
    const foundUser = defaultUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );
  
    if (!foundUser) {
      console.log("Login Failed: User not found");
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }
  
    console.log("Login Success! Redirecting...");
    localStorage.setItem("loggedInUser", JSON.stringify(foundUser));
  
    setLoading(false);
    navigate("/dashboard"); // Ensure navigation is working
  };
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-6 bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-center text-3xl font-bold text-gray-900">Sign In</h2>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded">{error}</div>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <p className="text-center">
          Don't have an account? <Link to="/signup" className="text-blue-600">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
