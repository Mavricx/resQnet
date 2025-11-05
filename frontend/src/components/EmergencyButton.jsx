import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EmergencyButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();

  const sendLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;

          fetch(import.meta.env.VITE_BACKEND_URL + "/postLocation", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ lat, lng }),
          })
            .then((res) => res.json())
            .then(() => {
              console.log("Location sent to backend", lat, lng);
              navigate("/map");
            })
            .catch((err) => console.log("error", err));
        },
        (err) => {
          console.error("Geolocation error:", err);
          alert("Unable to get location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  const subButtons = [
    { label: "Health", angle: 0 },
    { label: "Theft", angle: 90 },
    { label: "Fire", angle: 180 },
    { label: "Assault", angle: 270 },
  ];

  const radius = 120; // distance from center to sub-buttons

  const calculatePosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius,
    };
  };

  const handleSubButtonClick = (label) => {
    console.log(`${label} button clicked`);
    sendLocation();
  };

  return (
    <div className="w-full h-[80vh] flex items-center justify-center relative overflow-hidden">
      <div className="relative flex items-center justify-center">
        {!isExpanded && (
          <>
            {/* Wave 1 */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         w-20 h-20 rounded-full pointer-events-none z-10
                         bg-green-400/30"
              initial={{ scale: 0.8, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 0.6,
              }}
            />
            {/* Wave 2 (staggered) */}
            <motion.div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                         w-20 h-20 rounded-full pointer-events-none z-9
                         bg-green-400/20"
              initial={{ scale: 0.8, opacity: 0.7 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 1.6,
                ease: "easeOut",
                repeat: Infinity,
                repeatDelay: 0.6,
                delay: 0.8, // staggers the second wave
              }}
            />
          </>
        )}

        {/* Sub-buttons (appear around the center when expanded) */}
        <AnimatePresence>
          {isExpanded &&
            subButtons.map((button, index) => {
              const position = calculatePosition(button.angle);
              return (
                <motion.button
                  key={button.label}
                  // center the element initially then move via x/y
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                             w-16 h-16 bg-gradient-to-r from-green-500 to-green-600
                             text-white rounded-full shadow-lg flex items-center justify-center
                             text-sm font-semibold border-2 border-white backdrop-blur-sm
                             z-40"
                  initial={{
                    scale: 0,
                    x: 0,
                    y: 0,
                    opacity: 0,
                  }}
                  animate={{
                    scale: 1,
                    x: position.x,
                    y: position.y,
                    opacity: 1,
                  }}
                  exit={{
                    scale: 0,
                    x: 0,
                    y: 0,
                    opacity: 0,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: index * 0.06,
                  }}
                  whileHover={{
                    scale: 1.08,
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleSubButtonClick(button.label)}
                >
                  {button.label}
                </motion.button>
              );
            })}
        </AnimatePresence>

        {/* MAIN HELP BUTTON */}
        <motion.button
          onClick={() => setIsExpanded((s) => !s)}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 40px rgba(34, 197, 94, 0.4)",
          }}
          whileTap={{ scale: 0.95 }}
          animate={{ rotate: isExpanded ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          aria-expanded={isExpanded}
          aria-label="Help menu"
          className="relative z-50 w-20 h-20 bg-gradient-to-r from-green-500 to-green-600
                     text-white rounded-full shadow-xl hover:shadow-2xl
                     flex items-center justify-center text-lg font-bold
                     border-4 border-white backdrop-blur-sm
                     transition-all duration-300 ease-out
                     focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        >
          <motion.span
            animate={{ rotate: isExpanded ? -45 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {isExpanded ? "×" : "Help"}
          </motion.span>
        </motion.button>
      </div>

      {/* small helper text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 text-center mb-12 text-white px-4"
      >
        <p className="text-xs mb-3 leading-relaxed">
          {isExpanded ? "Tap a category for help" : "Tap Help to see options"}
        </p>
        <div className="flex justify-center space-x-1.5">
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-100"></div>
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse delay-200"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default EmergencyButton;
