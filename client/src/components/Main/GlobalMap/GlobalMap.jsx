import React, { useEffect, useState, useRef } from "react";
import "./GlobalMap.css";
import { MapContainer,  useMap } from 'react-leaflet'



const GlobalMap = () => {
  useEffect(() => {
    const map = mapRef.current.leafletElement;
    const bounds = [[-26.5, -25], [1021.5, 1023]];
    const image = L.imageOverlay("https://i.imgur.com/Ion6X7C.jpg", bounds).addTo(
      map
    );
    map.fitBounds(image.getBounds());
  }, []);
  return (
    <div className="map-container">

<MapContainer center={position} zoom={13} scrollWheelZoom={false}>
    <Marker position={position}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>,

    </div>
    
  );
};

export default GlobalMap;
