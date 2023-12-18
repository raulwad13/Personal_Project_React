import React, {useContext} from "react";
import "../BiomaDetails/BiomaDetails.css"
import MonsterList from "./MonsterList";
import { BiomaContext } from "../../../context/BiomaContext";


const BiomaDetails = () => {
  const { bioma, updateBioma } = useContext(BiomaContext)

  return (
    <>
    {/* <article className="bioma-details">
      <MonsterList bioma={bioma}/>
    </article> */}
    </>
  );
};

export default BiomaDetails;

