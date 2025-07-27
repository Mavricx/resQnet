import React from "react";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaMapMarkedAlt } from "react-icons/fa";

function BottomIconBar() {
  return (
    <div className="flex justify-around items-center bg-white-100">
      <button className="text-2xl">
        <IoMdHome />
      </button>
      <button className="text-2xl">
        <FaMapMarkedAlt />
      </button>
      <button className="text-2xl">
        <CgProfile />
      </button>
      <button className="text-2xl">
        <IoMdSettings />
      </button>
    </div>
  );
}

export default BottomIconBar;
