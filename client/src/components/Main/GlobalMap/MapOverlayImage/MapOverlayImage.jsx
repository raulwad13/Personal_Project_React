import React from "react";

const MapOverlayImage = () => {
  useEffect(() => {
    const map = mapRef.current.leafletElement;
    const bounds = [
      [-26.5, -25],
      [1021.5, 1023],
    ];
    const image = L.imageOverlay(
      "https://i.imgur.com/Ion6X7C.jpg",
      bounds
    ).addTo(map);
    map.fitBounds(image.getBounds());
  }, []);
  return <div>MapOverlayImage</div>;
};

export default MapOverlayImage;
