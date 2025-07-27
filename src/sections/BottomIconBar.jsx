import React from "react";
import { IoMdHome, FaBandcamp, CgProfile, CiSettings } from "react-icons/io";
function BottomIconBar() {
  return (
    <div>
      <button>
        <IoMdHome />
      </button>
      <button>
        <FaBandcamp />
      </button>
      <button>
        <CiSettings />
      </button>
      <button>
        <CgProfile />
      </button>
    </div>
  );
}

export default BottomIconBar;
