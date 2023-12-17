// BiomaCard.js
import React from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BiomaCard = ({ bioma }) => {
  const [monsters, setMonsters] = React.useState([]);

  React.useEffect(() => {
    const fetchMonsters = async () => {
      const response = await axios.get(
        `http://localhost:3000/api/monsters?location=${bioma.name}`
      );
      setMonsters(response.data);
    };

    fetchMonsters();
  }, [bioma.name]);

  return (
    <div>
      <h3>Monsters in {bioma.name}</h3>
      <ul>
        {monsters.map((monster) => (
          <li key={uuidv4()}>
            <strong>Name:</strong> {monster.name} | <strong>Type:</strong>{" "}
            {monster.type} | <strong>Species:</strong> {monster.species}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BiomaCard;
