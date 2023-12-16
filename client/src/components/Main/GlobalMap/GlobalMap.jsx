import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./GlobalMap.css";


const GlobalMap = () => {
  return (
    <>
      <section className="map">
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://i.redd.it/xdcvxl1mz4531.png"
          />
          <Marker position={[51.505, -0.09]}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </section>
    </>
  );
};

export default GlobalMap;
