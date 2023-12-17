import React from "react";
// import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "./GlobalMap.css";




const GlobalMap = () => {
  return (
    <div className="map-container">
     {/* <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://static.wikia.nocookie.net/monsterhunterespanol/images/9/94/MHW-Bosque_Primigenio.jpg/revision/latest?cb=20171117132631&path-prefix=es"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer> */}


      <img
        src="https://i.redd.it/xdcvxl1mz4531.png"
        alt="Map"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    
  );
};

export default GlobalMap;
