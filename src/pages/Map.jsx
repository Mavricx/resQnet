import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
function Map() {
  return (
   <div className="w-full h-screen max-w-lg z-0">
      <MapContainer
        center={[20.5937, 78.9629]} // Center: India
        zoom={5}
        className="w-full h-full"
      >
        {/* OpenStreetMap tiles */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
        />

        {/* Example marker */}
        <Marker position={[28.6139, 77.209]}>
          <Popup>📍 New Delhi</Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map