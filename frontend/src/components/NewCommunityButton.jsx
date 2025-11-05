import React from "react";
import { Plus} from 'lucide-react';
function NewCommunityButton() {
  return (
    <>
      {/* Floating Action Button */}
      <button className="absolute bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transform hover:scale-105 transition-all duration-200 group mb-17">
        <Plus className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-200" />
        <span className="absolute right-16 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          New Community
        </span>
      </button>
    </>
  );
}

export default NewCommunityButton;
