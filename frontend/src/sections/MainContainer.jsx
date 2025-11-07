
import React from "react";
import EmergencyButton from "../components/EmergencyButton";

function MainContainer() {
  return (
    <div className="relative flex flex-col items-center justify-center w-full text-center h-dvh bg-gradient-to-br from-slate-900 via-gray-800 to-indigo-900 overflow-hidden">
      {/* Glowing accents */}
      <div className="absolute w-72 h-72 bg-green-400/20 rounded-full blur-3xl top-10 left-10 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-300"></div>

      {/* Title */}
      <h1 className="text-white text-4xl font-bold mt-20 drop-shadow-lg">
        Help & Be Helped!
      </h1>

      {/* Emergency Button */}
      <EmergencyButton />
    </div>
  );
}

export default MainContainer;
