import React from "react";
import GlobalMap from "./GlobalMap/GlobalMap";
import BiomaList from "./BiomaList/BiomaList";
import BiomaDetails from "./BiomaDetails/BiomaDetails";

const Main = () => {
  return (
    <>
      <main>
        <BiomaList/>
        <GlobalMap />
      </main>
    </>
  );
};

export default Main;
