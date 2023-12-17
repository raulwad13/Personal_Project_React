import React from "react";
import "../BiomaDetails/BiomaDetails.css"


const BiomaDetail = ({ bioma }) => {
  return (
    <div className="bioma-details">
      <h2>{bioma.name}</h2>
      {/* <p>{bioma.camps}</p> */}
    </div>
  );
};

export default BiomaDetail;

