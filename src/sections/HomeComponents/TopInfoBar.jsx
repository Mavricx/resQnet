import React from "react";
import CircleTop from "../../components/CircleTop";
function TopInfoBar() {
  return (
    <div className="flex space-x-4 overflow-x-auto p-3 border-b border-gray-200 bg-white scrollbar-hide mt-7">
      {Array.from({ length: 7 }).map((_, index) => (
        <div key={index} className="flex-none">
          <CircleTop />
        </div>
      ))}
    </div>
  );
}

export default TopInfoBar;
