import React, { useEffect, useState, useRef } from "react";
import "./GlobalMap.css";
import { MapContainer, useMap, mapoverla } from "react-leaflet";
import MapOverlayImage from "./MapOverlayImage/MapOverlayImage";

const GlobalMap = () => {
  return (
    <>
      <MapOverlayImage />
    </>
  );
};

export default GlobalMap;
