import React from 'react';
import { useNavigate } from 'react-router-dom';
function Settings() {

  const navigate=useNavigate();

  const handleLogout=async()=>{
    try{
      await fetch("http://localhost:5050/api/logout", {
        method: "GET",
        credentials: "include",
      });
      navigate("/");
    }catch(err){
      console.error(err);
    }
  }
  return (
   <>
 <button onClick={handleLogout} className="bg-red-500 text-white p-2 rounded">Logout</button>
   </>
  )
}

export default Settings