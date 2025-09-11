import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Camera,
  UserCircle,
  Hash,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { sendSignInLinkToEmail } from "firebase/auth";
// import auth from "./firebase.js";

// const actionCodeSettings = {
//   url: "https://localhost:5173/finishSignIn", //TODO: change this after deploying the frontend
//   handleCodeInApp: true, //means we are handling the code in the app not in firebase
// };

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
  email: "",
  name: "",
  userType: "Normal Citizen",
  address: null,
  gender: "Male",
  phoneNo: "",
  lastLocation: { type: "Point", coordinates: [0, 0] },
  country: "",
  state: "",
  city: "",
  zipcode: "",
});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    // e.preventDefault();
    // try {
    //   await sendSignInLinkToEmail(auth, formData.email, actionCodeSettings); //send the sign in link to the email
    //   window.localStorage.setItem("emailForSignIn", formData.email); //store the email in local storage to retrieve it later
    //   alert("Sign in link sent to your email. Please check your inbox.");
    // } catch (e) {
    //   alert(e.message);
    // }
  
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm backdrop-blur-lg bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-white text-center mb-2">
          Create Account
        </h2>
        <p className="text-gray-200 text-center mb-6 text-sm">
          Join ResQnet to stay safe & connected
        </p>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <User size={18} className="text-white/80 mr-3" />
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          {/* Email */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
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
          {/* Profile Picture */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <UserCircle size={18} className="text-white/80 mr-3" />
            <select
              name="gender"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.gender}
              onChange={handleChange}
            >
              <option className="text-black" value="Male">
                Male
              </option>
              <option className="text-black" value="Female">
                Female
              </option>
              <option className="text-black" value="Other">
                Other
              </option>
            </select>
          </div>
          {/* User Type */}
          <div className="bg-white/20 rounded-xl px-4 py-3">
            <select
              name="userType"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.userType}
              onChange={handleChange}
            >
              <option className="text-black">Normal Citizen</option>
              <option className="text-black">Police Authority</option>
            </select>
          </div>

          {/* Country */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <MapPin size={18} className="text-white/80 mr-3" />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>

          {/* State */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <MapPin size={18} className="text-white/80 mr-3" />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.state}
              onChange={handleChange}
              required
            />
          </div>

          {/* City */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <MapPin size={18} className="text-white/80 mr-3" />
            <input
              type="text"
              name="city"
              placeholder="City"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          {/* Zipcode */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <Hash size={18} className="text-white/80 mr-3" />
            <input
              type="number"
              name="zipcode"
              placeholder="Zip Code"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.zipcode}
              onChange={handleChange}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex items-center bg-white/20 rounded-xl px-4 py-3">
            <Phone size={18} className="text-white/80 mr-3" />
            <input
              type="tel"
              name="phoneNo"
              placeholder="Phone Number"
              className="bg-transparent w-full text-white placeholder-white/60 focus:outline-none"
              value={formData.phoneNo}
              onChange={handleChange}
              required
            />
          </div>
          {/* Submit */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full bg-white text-indigo-600 py-3 rounded-xl font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            Sign Up
          </motion.button>
        </form>

        {/* Switch to Login */}
        <div className="text-center mt-4 text-sm text-white/80">
          Already have an account?{" "}
          <button
            onClick={() => navigate("/login")}
            className="font-semibold underline hover:text-gray-200"
          >
            Login
          </button>
        </div>
      </motion.div>
    </div>
  );
}
