import React from "react";
import { v4 as uuidv4 } from "uuid";
// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Image,
// } from "@chakra-ui/react";

const CardMonster = ({ monster }) => {
  

  return (
    <article className="monster-card">
      <img
      className="MonsterImage"
        src={
          "../../../../../../public/assets/monsters/" + monster.name + ".webp"
        }
        alt=""
        borderRadius="lg"
      />
      <p>{monster.name}</p>
    </article>
  );
};

export default CardMonster;
