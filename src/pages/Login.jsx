import React, { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Login() {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
//     console.log("Login Data: ", formData);
//     // Call backend API here
//     fetch("https://example.com/api/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formData),
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Login successful:", data);
//         // Redirect to dashboard or another page
//         navigate("/home");
//       })
//       .catch((error) => {
//         console.error("There was a problem with the login request:", error);
//       });
 };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-8"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold text-white text-center mb-2">
          Welcome Back
        </h2>
        <p className="text-gray-200 text-center mb-6 text-sm">
          Login to continue to ResQnet
        </p>

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-300">
            <Mail size={18} className="text-white/80 mr-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3 focus-within:ring-2 focus-within:ring-indigo-300">
            <Lock size={18} className="text-white/80 mr-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* Login Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:bg-gray-100 transition"
          >
            <LogIn size={18} /> Login
          </motion.button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-sm text-white/80">
          <p>
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-white underline hover:text-gray-200"
            >
              Sign Up
            </button>
          </p>
          <p className="mt-2">
            <button className="font-semibold text-white/80 hover:text-gray-200">
              Forgot Password?
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default Login;
