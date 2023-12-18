import React from "react";
import "./GlobalMap.css";



const GlobalMap = () => {
  return (
    <div className="map-container">

      <img
        src= "../../../../public/assets/maps/mapaGlobal.png"
        alt="Map"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
    
  );
};

export default GlobalMap;
