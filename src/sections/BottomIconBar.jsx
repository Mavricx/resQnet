import { IoMdHome, IoMdSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { FaMapMarkedAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';

function BottomIconBar() {
  return ( 
      <nav className="fixed bottom-0 left-0 right-0 shadow-md flex justify-around items-center h-16 rounded-t-xl bg-white">
        <Link to="/home" className="text-4xl">
          <IoMdHome />
        </Link>
        <Link to="/map" className="text-3xl">
          <FaMapMarkedAlt />
        </Link>
        <Link to="/profile" className="text-3xl">
          <CgProfile />
        </Link>
        <Link to="/settings" className="text-4xl">
          <IoMdSettings />
        </Link>
      </nav>
  );
}

export default BottomIconBar;
