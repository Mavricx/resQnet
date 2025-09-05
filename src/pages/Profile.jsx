import React, { useEffect, useState } from 'react';

function Profile() {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    fetch("http:localhost:5050/love")
      .then((response) => response.json())
      .then((data) => setSettings(data.nearby))
      .catch((error) => console.error("Error fetching settings:", error));
  }, []);

  return (
    <div className='flex flex-col items-center justify-center bg-white -100 p-10 mt-70'>
      <h1>Profile</h1>
      <ul>
        {settings.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Profile;


