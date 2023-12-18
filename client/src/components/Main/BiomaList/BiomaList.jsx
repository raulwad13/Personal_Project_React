// BiomaList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import BiomaDetail from "../BiomaDetails/BiomaDetails";
import MonsterList from "../BiomaDetails/MonsterList";

const BiomaList = () => {
  const [biomas, setBiomas] = useState([]);
  const [selectedBioma, setSelectedBioma] = useState(null);

  useEffect(() => {
    const getBiomas = async () => {
      const response = await axios.get("https://mhw-db.com/locations");
      setBiomas(response.data.slice(0, 5));
    };

    getBiomas();
  }, []);

  const handleBiomaClick = (bioma) => {
    setSelectedBioma(bioma);
  };

  const paintBioma = () => {
    return biomas.map((bioma) => (
      <button key={uuidv4()} onClick={() => handleBiomaClick(bioma)}>
        {bioma.name}
      </button>
    ));
  };

  return (
    <section>
      {selectedBioma ? (
        <div>
          <BiomaDetail bioma={selectedBioma} />
          <MonsterList bioma={selectedBioma} />
        </div>
      ) : (
        <div>{paintBioma()}</div>
      )}
    </section>
  );
};

export default BiomaList;
