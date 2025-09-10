import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {useNavigate} from "react-router-dom"

const EmergencyButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);
   const navigate = useNavigate();

  const sendLocation=()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
        (position)=>{
          const lat=position.coords.latitude;
          const lng=position.coords.longitude;

          fetch( import.meta.env.VITE_BACKEND_URL+"/postLocation",{//send the location to backend
            method:"POST",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify({lat,lng}),
          })
          .then((res)=>res.json())
          .then(()=>{
            console.log("Location sent to backend",lat,lng)
            navigate("/map");
          })
          .catch((err)=>console.log("error",err))
        }
      )
    }
    else{
      alert("Geolocation is not supported by this browser.")
    }
  }

  const subButtons = [
    { label: 'Health', angle: 0 },
    { label: 'Theft', angle: 90 },
    { label: 'Fire', angle: 180 },
    { label: 'Assault', angle: 270 }
  ];

  const radius = 125; // Distance from center to sub-buttons

  const calculatePosition = (angle) => {
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  const handleSubButtonClick = (label) => {
    console.log(`${label} button clicked`);
    sendLocation();
  };

  return (
    <div className="w-full h-[80vh] 
                flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 w-full h-full"></div>

      {/* Main container */}
      <div className="relative">
        {/* Sub-buttons */}
        <AnimatePresence>
          {isExpanded && subButtons.map((button, index) => {
            const position = calculatePosition(button.angle);
            return (
              <motion.button
                key={button.label}
                initial={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 0
                }}
                animate={{ 
                  scale: 1,
                  x: position.x,
                  y: position.y,
                  opacity: 1
                }}
                exit={{ 
                  scale: 0,
                  x: 0,
                  y: 0,
                  opacity: 0
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  delay: index * 0.1
                }}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 10px 30px rgba(34, 197, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSubButtonClick(button.label)}
                className="absolute w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 
           text-white rounded-full shadow-lg hover:shadow-xl
           flex items-center justify-center text-sm font-semibold
           border-2 border-white backdrop-blur-sm
           transition-all duration-200 ease-out
           hover:from-green-400 hover:to-green-500"
              >
                {button.label}
              </motion.button>
            );
          })}
        </AnimatePresence>

        {/* Main Help button */}
        <motion.button
          onClick={() => { setIsExpanded(!isExpanded) }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 15px 40px rgba(34, 197, 94, 0.4)"
          }}
          whileTap={{ scale: 0.95 }}
          animate={{
            rotate: isExpanded ? 45 : 0
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="relative w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 
                   text-white rounded-full shadow-xl hover:shadow-2xl
                   flex items-center justify-center text-lg font-bold
                   border-4 border-white backdrop-blur-sm
                   transition-all duration-300 ease-out
                   hover:from-green-400 hover:to-green-500
                   focus:outline-none focus:ring-4 focus:ring-green-300 focus:ring-opacity-50"
        >
          <motion.span
            animate={{ rotate: isExpanded ? -45 : 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {isExpanded ? '×' : 'Help'}
          </motion.span>
        </motion.button>


        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ scale: 0, opacity: 0.8 }}
              animate={{ scale: 3, opacity: 0 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0 w-20 h-20 bg-green-400 rounded-full pointer-events-none"
            />
          )}
        </AnimatePresence>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="absolute bottom-6 left-0 right-0 text-center text-gray-600 px-4 mb-25"
      >
        <p className="text-xs text-white mb-3 leading-relaxed">
          {isExpanded ? 'Tap a category for help' : 'Tap Help to see options'}
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