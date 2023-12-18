import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import CardMonster from "./CardMonster";
import "./MonsterList.css";
import { Vortex } from "react-loader-spinner";

const MonsterList = ({ bioma }) => {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios.get(`http://localhost:3000/api/monsters`);
      console.log(response);
      setMonsters(response.data);

      let monsters = response.data;

      let res = monsters.filter((monster) =>
        monster.locations.some((location) => location.name === bioma.name)
      );
      console.log(res);
    };

    fetchMonsters();
  }, []);

  const paintMonster = () => {
    return monsters.map((monster) => (
      <CardMonster key={uuidv4()} monster={monster} />
    ));
  };

  return (
    <div className="monster-card">
      <h3>Monsters in {bioma.name}</h3>
      <div>{monsters ? paintMonster() : null}</div>
    </div>
  );
};

export default MonsterList;
