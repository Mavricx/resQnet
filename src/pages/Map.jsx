import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { set } from "mongoose";

function Map() {
  const mapboxAccessToken = import.meta.env.VITE_MAPBOX_TOKEN;
  const [location, setLocation] = useState(null);
  let lat = 20.2961;
  let lng = 85.8245;

  const getPosition = () => {
    fetch("http://localhost:5050/getNearbyUsers")
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.location);
      });
  };

  useEffect(() => {
    getPosition();
  }, []);

  lat = location ? location.lat : 20.2961;
  lng = location ? location.lng : 85.8245;

  return (
    <div className="w-full h-screen max-w-lg z-0">
      <MapContainer center={[lat, lng]} zoom={13} className="w-full h-full">
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${mapboxAccessToken}`}
          id="mapbox/streets-v11"
          tileSize={512}
          zoomOffset={-1}
          attribution='&copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />

        <Marker position={[lat, lng]}>
          <Popup>📍 You are here</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
