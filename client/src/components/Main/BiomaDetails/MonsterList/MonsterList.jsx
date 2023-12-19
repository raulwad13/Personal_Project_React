import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import CardMonster from "./CardMonster";
import "./MonsterList.css";
import { Vortex } from "react-loader-spinner";

const MonsterList = ({ bioma }) => {
  const [monsters, setMonsters] = useState([]);
  const [sortedMonsters, setSortedMonsters] = useState([]);
  const [isAscending, setIsAscending] = useState(true);

  useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios.get(`http://localhost:3000/api/monsters`);
      setMonsters(response.data);

      let filteredMonsters = response.data.filter((monster) =>
        monster.locations.some((location) => location.name === bioma.name)
      );
      setSortedMonsters(filteredMonsters);
    };

    fetchMonsters();
  }, [bioma.name]);

  const sortAlphabetically = () => {
    const sorted = [...sortedMonsters].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setSortedMonsters(sorted);
    setIsAscending(true);
  };

  const sortReverseAlphabetically = () => {
    const sorted = [...sortedMonsters].sort((a, b) =>
      b.name.localeCompare(a.name)
    );
    setSortedMonsters(sorted);
    setIsAscending(false);
  };

  const paintMonster = () => {
    return sortedMonsters.map((monster) => (
      <CardMonster key={uuidv4()} monster={monster} />
    ));
  };

  return (
    <div className="monster-card">
      <h3>Monsters in {bioma.name}</h3>
      <div>
        <button onClick={sortAlphabetically}>Sort A-Z</button>
        <button onClick={sortReverseAlphabetically}>Sort Z-A</button>
      </div>
      <div>{monsters ? paintMonster() : null}</div>
    </div>
  );
};

export default MonsterList;
