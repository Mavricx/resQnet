import React from "react";
import EmergencyButton from "../components/EmergencyButton";

function MainContainer() {
  return (
    <div
      className="flex flex-col items-center justify-center w-full text-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg')", backgroundSize: "cover", backgroundPosition: "center", }}
    >
      <h1 className="text-white text-4xl font-bold mt-20 ">Never hesitate to ask for help</h1>
      <EmergencyButton />
    </div>
  );
}

export default MainContainer;
