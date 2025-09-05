import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight, PhoneCall, Users, Bell } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-between h-dvh bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white p-6">
      {/* Top Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center space-y-2 mt-8"
      >
        <ShieldCheck size={64} className="mb-3 drop-shadow-lg" />
        <h1 className="text-3xl font-bold">ResQnet</h1>
      </motion.div>

      {/* Middle Section with Tagline + Features */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center text-center px-4 space-y-6"
      >
        {/* Tagline */}
        <p className="text-lg font-medium leading-relaxed">
          Empowering communities to <br />
          stay safe & connected in emergencies.
        </p>

        {/* Features */}
        <div className="grid grid-cols-1 gap-4 w-full max-w-md">
          <div className="bg-white/10 rounded-xl p-4 flex items-center space-x-3 backdrop-blur-md shadow-md">
            <PhoneCall size={28} className="text-yellow-300" />
            <p className="text-sm font-medium">
              Quick SOS alerts to nearby responders
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 flex items-center space-x-3 backdrop-blur-md shadow-md">
            <Users size={28} className="text-green-300" />
            <p className="text-sm font-medium">
              Connect with trusted community & police
            </p>
          </div>
          <div className="bg-white/10 rounded-xl p-4 flex items-center space-x-3 backdrop-blur-md shadow-md">
            <Bell size={28} className="text-pink-300" />
            <p className="text-sm font-medium">
              Real-time safety updates in your area
            </p>
          </div>
        </div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full max-w-md space-y-4 mb-8"
      >
        <button
          className="w-full bg-white text-indigo-600 font-semibold py-3 rounded-2xl shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
          onClick={() => navigate("/signup")}
        >
          Sign Up <ArrowRight size={18} className="ml-2" />
        </button>
        <button
          className="w-full border-2 border-white py-3 rounded-2xl font-semibold flex items-center justify-center hover:bg-white hover:text-indigo-600 transition"
          onClick={() => navigate("/login")}
        >
          Login
        </button>
      </motion.div>
    </div>
  );
}

export default Landing;
